import React from 'react';
import $ from 'jquery';
import './scss/section5.scss';
import axios from 'axios';

export default function Section5Component(){
    const [state, setState] = React.useState({
        slidei4:[],
        n:0
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
                        slidei4: res.data.slidei4,
                        n: res.data.slidei4.length
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    
    React.useEffect(()=>{

        const $slideWrap = $('#section5 .slide-wrap');
        const $prevBtn = $('#section5 .prev-btn');
        const $nextBtn = $('#section5 .next-btn');
        let cnt=0;
        let setId=0;
        let n = state.n

        $slideWrap.css({width:`${33.6*n}%`})

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-433.16666 * cnt}px`});
            if( cnt>=3 ){
                $nextBtn.stop().fadeOut(300);
            }
            else{
                $nextBtn.stop().fadeIn(300);
            }
            
            if( cnt<=0 ){
                $prevBtn.stop().fadeOut(300);
            }
            else{
                $prevBtn.stop().fadeIn(300);
            }
        }
        $prevBtn.fadeOut(0);

        function nextCount(){
            if(cnt<3){
                cnt++;
            }
            mainSlide();
        }

        function prevCount(){
            if(cnt>0){
                cnt--;
            }
            mainSlide();
        }

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

    },[state.n]);


    
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    {
                                        state.slidei4.map((item, idx)=>{
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