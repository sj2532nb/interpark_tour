import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function Section9Component({setViewProduct}){

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            text1: item.text1,
            price: item.price,
            orange_text: item.orange_text,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }


    const [state,setState]=React.useState({
        slide47:[],
        n:0
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
                        slide47: res.data.slide47,
                        n: res.data.slide47.length-6
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{

        const $slideWrap = $('#section9 .slide-wrap');
        const $slide = $('#section9 .slide');
        const $prevBtn = $('#section9 .prev-btn');
        const $nextBtn = $('#section9 .next-btn');
        const $currentPage = $('#section9 .current-page');
        const $totalPage = $('#section9 .total-page');
        let cnt=0;
        let setId=0;

        $slideWrap.css({width: `${218 * state.n}px`});

        function mainSlide(){
            console.log(cnt);
            $slideWrap.stop().animate({left: `${-218 * cnt}px`}, 400, function(){
                if(cnt>4) cnt=0;
                if(cnt<0) cnt=4;
                $slideWrap.stop().animate({left: `${-218 * cnt}px`}, 0)
            });
            slidePage();
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
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

        function slidePage(){
            console.log(cnt);
            $currentPage.html(cnt+1===6? 1:(cnt+1===0? state.n:cnt+1));
            $totalPage.html(state.n);
        }

    },[state.n]);




    return (
        <section id="section9" className='section6-16'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="title">
                                <h2>일본 인기 버스투어·현지투어</h2>
                                <div className="page-box">
                                    <div className="page-btn-box">
                                        <a href="!#" className='prev-btn'></a>
                                        <a href="!#" className='next-btn'></a>
                                    </div>
                                    <p className='current-page'>1</p>
                                    <i>/</i>
                                    <p className='total-page'>{state.n}</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="slide-box">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                        {
                                                state.slide47.map((item, idx)=>{
                                                    return(
                                                        <li className='slide slide17' key={idx}>
                                                            <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                                <figure>
                                                                    <img src={item.img} alt="" />
                                                                </figure>
                                                                <div>
                                                                    <span>{item.text1}</span>
                                                                </div>
                                                                <div className="price-box">
                                                                    <em>{item.price}</em><strong>{item.orange_text}</strong>
                                                                </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
};