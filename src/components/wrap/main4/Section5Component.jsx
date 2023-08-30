import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function Section5Component({n, setViewProduct}){

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            text1: item.text1,
            text2: item.text2,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }


    const [state,setState]=React.useState({
        slide431:[],
        slide432:[],
        nLeft:0,
        nRight:0
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
                        slide431: res.data.slide431,
                        slide432: res.data.slide432,
                        nLeft: res.data.slide431.length-3,
                        nRight: res.data.slide432.length-3
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    // 왼쪽 슬라이드
    React.useEffect(()=>{

        const $slideWrap = $('#section5 .left-box .slide-wrap');
        const $slide = $('#section5 .left-box .slide');
        const $prevBtn = $('#section5 .left-box .prev-btn');
        const $nextBtn = $('#section5 .left-box .next-btn');
        const $currentPage = $('#section5 .left-box .current-page');
        const $totalPage = $('#section5 .left-box .total-page');
        let cnt=0;
        let setId=0;

        $slideWrap.css({width:`${327 * (state.nLeft)}px`});

        mainSlide();
        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-327 * cnt}px`}, 300, function(){
                if(cnt>7) cnt=0;
                if(cnt<0) cnt=7;
                $slideWrap.stop().animate({left: `${-327 * cnt}px`}, 0)
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
            $currentPage.html(cnt+1===9? 1:(cnt+1===0? state.nLeft:cnt+1));
            $totalPage.html(state.nLeft);
        }

    },[state.nLeft]);


    // 오른쪽 슬라이드
    React.useEffect(()=>{

        const $slideWrap = $('#section5 .right-box .slide-wrap');
        const $slide = $('#section5 .right-box .slide');
        const $prevBtn = $('#section5 .right-box .prev-btn');
        const $nextBtn = $('#section5 .right-box .next-btn');
        const $currentPage = $('#section5 .right-box .current-page');
        const $totalPage = $('#section5 .right-box .total-page');
        let cnt=0;
        let setId=0;

        $slideWrap.css({width: `${327 * (state.nRight)}px`});

        mainSlide();
        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-327 * cnt}px`}, 300, function(){
                if(cnt>7) cnt=0;
                if(cnt<0) cnt=7;
                $slideWrap.stop().animate({left: `${-327 * cnt}px`}, 0)
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
            $currentPage.html(cnt+1===9? 1:(cnt+1===0? state.nRight:cnt+1));
            $totalPage.html(state.nRight);
        };
        

    },[state.nRight]);



    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="title">
                                <h2>국내 MD Pick!</h2>
                                <div className="page-box">
                                <p className='current-page'>1</p>
                                    <i>/</i>
                                    <p className='total-page'>{state.n}</p>
                                    <div className="page-btn-box">
                                        <a href="!#" className='prev-btn'></a>
                                        <a href="!#" className='next-btn'></a>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-box">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
{
                                                state.slide431.map((item, idx)=>{
                                                    return(
                                                        <li className='slide slide8' key={idx}>
                                                            <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                                <figure>
                                                                    <img src={item.img} alt="" />
                                                                </figure>
                                                                <div>
                                                                    <span>{item.text1}</span>
                                                                    <strong>{item.text2}</strong>
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
                        <div className="right-box">
                            <div className="title">
                                <h2>해외 MD Pick!</h2>
                                <div className="page-box">
                                <p className='current-page'>1</p>
                                    <i>/</i>
                                    <p className='total-page'>{state.n}</p>
                                    <div className="page-btn-box">
                                        <a href="!#" className='prev-btn'></a>
                                        <a href="!#" className='next-btn'></a>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-box">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
{
                                                state.slide432.map((item, idx)=>{
                                                    return(
                                                        <li className='slide slide8' key={idx}>
                                                            <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                                <figure>
                                                                    <img src={item.img} alt="" />
                                                                </figure>
                                                                <div>
                                                                    <span>{item.text1}</span>
                                                                    <strong>{item.text2}</strong>
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