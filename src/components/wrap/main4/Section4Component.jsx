import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function Section4Component(){
    const [state,setState]=React.useState({
        slide42:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main4.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide42: res.data.slide42,
                        n: res.data.slide42.length
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{

        const $slideWrap = $('#section4 .slide-wrap');
        const $prevBtn = $('#section4 .prev-btn');
        const $nextBtn = $('#section4 .next-btn');
        let cnt=0;
        let setId=0;
        let n = state.n

        $slideWrap.css({width:`${20*n}%`})

        function mainSlide(){
            console.log(cnt);
            $slideWrap.stop().animate({left: `${-256 * cnt}px`}, 600, function(){
                if(cnt>7) cnt=0;
                if(cnt<0) cnt=7;
                $slideWrap.stop().animate({left: `${-256 * cnt}px`}, 0)
            });
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 4000);
        }
        autoTimer();

        $nextBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                nextCount();
            }
        });

        $prevBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                prevCount();
            }
        });

        return(()=>{
            clearInterval(setId);
        })

    },[state.n]);




    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>인기 여행지별 Hot 투어·티켓</h2>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    {
                                        state.slide42.map((item, idx)=>{
                                            return(
                                                <li className='slide slide3' key={idx}>
                                                    <a href="!#">
                                                        <figure>
                                                            <img src={item.img} alt="" />
                                                        </figure>
                                                        <span>{item.text1}</span>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <a href="!#" className='prev-btn'></a>
                        <a href="!#" className='next-btn'></a>
                    </div>
                </div>
            </div>
        </section>
    );
};