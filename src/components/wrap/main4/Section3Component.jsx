import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function Section3Component(){
    const [state,setState]=React.useState({
        slide411:[],
        slide412:[]
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
                        slide411: res.data.slide411,
                        slide412: res.data.slide412
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{

        const $slideContainer = $('#section3 .slide-container');
        const $slideWrap = $('#section3 .slide-wrap');
        const $pageBtn = $('#section3 .page-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 600, function(){
                if(cnt>5) cnt=0;
                if(cnt<0) cnt=5;
                $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 0)
            });
            pageNation();
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

        function pageNation(){
            $pageBtn.removeClass(`on`);
            $pageBtn.eq(cnt>5? 0:cnt).addClass(`on`);
        }

        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    // clearInterval(setId);
                    cnt=idx;
                    mainSlide();
                }
            });
        });

    },[]);

    
    return (
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        {
                                            state.slide411.map((item, idx)=>{
                                                return(
                                                    <li className='slide slide6' key={idx}>
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
                            <div className="page-btn-box">
                                <a href="!#" className='page-btn on'>1</a>
                                <a href="!#" className='page-btn'>2</a>
                                <a href="!#" className='page-btn'>3</a>
                                <a href="!#" className='page-btn'>4</a>
                                <a href="!#" className='page-btn'>5</a>
                                <a href="!#" className='page-btn'>6</a>
                            </div>
                        </div>
                        <div className="right-box">
                            <ul>
                                {
                                    state.slide412.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
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
                </div>
            </div>
        </section>
    );
};