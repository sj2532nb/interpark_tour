import React from 'react';
import $ from 'jquery';
import './scss/section2.scss';
import axios from 'axios';

export default function Section2Component({setViewProduct}){

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            blue_text: item.blue_text,
            text1: item.text1,
            price: item.price,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }

    const [state, setState] = React.useState({
        slidei21:[],
        slidei22:[],
        slidei23:[],
        slidei24:[],
        isFirst:true,
        isPackage:false,
        isDomestic:false,
        isAbroad:false,
        
    });
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
                    slidei21: res.data.slidei21,
                    slidei22: res.data.slidei22,
                    slidei23: res.data.slidei23,
                    slidei24: res.data.slidei24
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const onClickFirst=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFirst:true,
            isPackage:false,
            isDomestic:false,
            isAbroad:false
        })
    }
    const onClickPackage=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFirst:false,
            isPackage:true,
            isDomestic:false,
            isAbroad:false
        })
    }
    const onClickDomestic=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFirst:false,
            isPackage:false,
            isDomestic:true,
            isAbroad:false
        })
    }
    const onClickAbroad=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFirst:false,
            isPackage:false,
            isDomestic:false,
            isAbroad:true
        })
    }


    React.useEffect(()=>{

        const $slideWrap = $('#section2 .first .slide-wrap');
        const $prevBtn = $('#section2 .first .prev-btn');
        const $nextBtn = $('#section2 .first .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-433.16666 * cnt}px`});
            if( cnt>=16 ){
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
            if(cnt<=16){
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

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $('#section2 .package .slide-wrap');
        const $prevBtn = $('#section2 .package .prev-btn');
        const $nextBtn = $('#section2 .package .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-433.16666 * cnt}px`});
            if( cnt>=13 ){
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

        function nextCount(){
            if(cnt<=13){
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
    },[]);

    React.useEffect(()=>{

        const $slideWrap = $('#section2 .domestic .slide-wrap');
        const $prevBtn = $('#section2 .domestic .prev-btn');
        const $nextBtn = $('#section2 .domestic .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-433.16666 * cnt}px`});
            if( cnt>=8 ){
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

        function nextCount(){
            if(cnt<=8){
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
    },[]);

    React.useEffect(()=>{

        const $slideWrap = $('#section2 .abroad .slide-wrap');
        const $prevBtn = $('#section2 .abroad .prev-btn');
        const $nextBtn = $('#section2 .abroad .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left: `${-433.16666 * cnt}px`});
            if( cnt>=8 ){
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

        function nextCount(){
            if(cnt<=8){
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

    },[]);



    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>투어 특가</h2>
                    </div>
                    <div className="content">
                        <div className="tab-btn-box">
                            <button onClick={onClickFirst} className={state.isFirst?' on':''}>1등특가</button>
                            <button onClick={onClickPackage} className={state.isPackage?' on':''}>패키지</button>
                            <button onClick={onClickDomestic} className={state.isDomestic?' on':''}>국내숙소</button>
                            <button onClick={onClickAbroad} className={state.isAbroad?' on':''}>해외숙소</button>
                        </div>
                        <div className={`slide-box first ${state.isFirst?' on':''}`}>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
{
                                        state.slidei21.map((item, idx)=>{
                                            return(
                                                <li className='slide slide1' key={idx}>
                                                    <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                        <figure><img src={item.img} alt="" /></figure>
                                                        <div>
                                                            <i>1등특가</i>
                                                            <h3>{item.blue_text}</h3>
                                                            <h4>{item.text1}</h4>
                                                            <em>{item.price}</em><span>원~</span>
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
                        <div className={`slide-box package ${state.isPackage?' on':''}`}>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
{
                                        state.slidei22.map((item, idx)=>{
                                            return(
                                                <li className='slide slide1' key={idx}>
                                                    <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                        <figure><img src={item.img} alt="" /></figure>
                                                        <div>
                                                            <i>1등특가</i>
                                                            <h3>{item.blue_text}</h3>
                                                            <h4>{item.text1}</h4>
                                                            <em>{item.price}</em><span>원~</span>
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
                        <div className={`slide-box domestic ${state.isDomestic?' on':''}`}>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
{
                                        state.slidei23.map((item, idx)=>{
                                            return(
                                                <li className='slide slide1' key={idx}>
                                                    <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                        <figure><img src={item.img} alt="" /></figure>
                                                        <div>
                                                            <i>1등특가</i>
                                                            <h3>{item.blue_text}</h3>
                                                            <h4>{item.text1}</h4>
                                                            <em>{item.price}</em><span>원~</span>
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
                        <div className={`slide-box abroad ${state.isAbroad?' on':''}`}>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
{
                                        state.slidei24.map((item, idx)=>{
                                            return(
                                                <li className='slide slide1' key={idx}>
                                                    <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                        <figure><img src={item.img} alt="" /></figure>
                                                        <div>
                                                            <i>1등특가</i>
                                                            <h3>{item.blue_text}</h3>
                                                            <h4>{item.text1}</h4>
                                                            <em>{item.price}</em><span>원~</span>
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
                    </div>
                </div>
            </div>
        </section>
    );
};