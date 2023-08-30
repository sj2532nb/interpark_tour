import React from 'react';
import $ from 'jquery';
import './scss/section1.scss';
import axios from 'axios';

export default function Section1Component(){
    const [state,setState]=React.useState({
        slidei1:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/intro.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data);
                setState({
                    ...state,
                    slidei1: res.data.slidei1
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    React.useEffect(()=>{
        const $slideWrap = $('#section1 .slide-wrap');
        const $prevBtn = $('#section1 .prev-btn');
        const $nextBtn = $('#section1 .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-654 * cnt}px`}, 600, function(){
                if(cnt>12) cnt=0;
                if(cnt<0) cnt=12;
                $slideWrap.stop().animate({left: `${-654 * cnt}px`}, 0)
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

    },[]);


    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
{
                                    state.slidei1.map((item, idx)=>{
                                        return(
                                            <li className='slide slide1' key={idx}>
                                                <a href="!#">
                                                    <img src={item.img} alt="" />
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