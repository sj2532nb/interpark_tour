import React from 'react';
import $ from 'jquery';
import './scss/section6.scss';
import axios from 'axios';

export default function Section6Component(){
    const [state, setState] = React.useState({
        slidei5:[],
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
                        slidei5: res.data.slidei5,
                        n: res.data.slidei5.length
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    })

    React.useEffect(()=>{

        const $slideWrap = $('#section6 .slide-wrap');
        const $prevBtn = $('#section6 .prev-btn');
        const $nextBtn = $('#section6 .next-btn');
        let cnt=0;
        let setId=0;
        let n=state.n
        $slideWrap.css({width:`${25*n}%`})

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-327 * cnt}px`});
            if( cnt>=1 ){
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
            if(cnt<1){
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
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>여행의 발견</h3>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
{
                                    state.slidei5.map((item, idx)=>{
                                        return(
                                            <li className='slide slide1' key={idx}>
                                                <a href="!#">
                                                    <img src={item.img} alt="" />
                                                    <div>{item.white_text}</div>
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