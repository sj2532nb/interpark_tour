import React from 'react';
import $ from 'jquery';
import './scss/section4.scss';
import axios from 'axios';

export default function Section4Component({setViewProduct}){

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            blue_text: item.blue_text,
            text1: item.text1,
            price: item.price,
            prev_price: item.prev_price,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }


    const [state,setState]=React.useState({
        slidei3:[],
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
                        slidei3: res.data.slidei3,
                        n: res.data.slidei3.length

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
        $slideWrap.css({width:`${33.8*n}%`})

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
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>쎄쎄쎄 할인특가</h2>
                        <p>쎈 가격에 쎈 할인을 더한 쎈특가!</p>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
{
                                    state.slidei3.map((item, idx)=>{
                                        return(
                                            <li className='slide slide1' key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                    <figure><img src={item.img} alt="" /></figure>
                                                    <div>
                                                        <i>{item.blue_text}</i>
                                                        <h4>{item.text1}</h4>
                                                        <em>{item.price}</em><span>원~</span>
                                                        <s>{item.prev_price}</s>
                                                    </div>
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
                    <div className="more-view">
                        <a href="!#">할인특가 상품 더보기</a>
                    </div>
                </div>
            </div>
        </section>
    );
};