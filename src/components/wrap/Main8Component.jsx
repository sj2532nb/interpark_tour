import React from 'react';
import $ from 'jquery';
import Main8ModalComponent from './modal/Main8ModalComponent';
import DalComponent from './modal/DalComponent';
import axios from 'axios';

export default function Sub8Component({setViewProduct}) {

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            text1: item.text1,
            text2: item.text2,
            price: item.price,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }

    
    const [state,setState]=React.useState({
        slide81:[],
        slide821:[],
        slide822:[],
        slide823:[],
        slide824:[],
        slide825:[],
        slide826:[],
        slide83:[],
        slide841:[],
        slide842:[],
        slide843:[],
        slide844:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main8.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide81: res.data.slide81,
                        n81: res.data.slide81.length,
                        slide821: res.data.slide821,
                        slide822: res.data.slide822,
                        slide823: res.data.slide823,
                        slide824: res.data.slide824,
                        slide825: res.data.slide825,
                        slide826: res.data.slide826,
                        slide83: res.data.slide83,
                        n83: res.data.slide83.length,
                        slide841: res.data.slide841,
                        slide842: res.data.slide842,
                        slide843: res.data.slide843,
                        slide844: res.data.slide844
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    //달력
    const [showCalendar, setShowCalendar] = React.useState(false);

    const dateSubmit = (date) => {

        const resultDate = document.getElementById('date');
        resultDate.innerText = date;
        resultDate.style.fontSize = '25px';
        resultDate.style.color = '#000';
        resultDate.style.letterSpacing = '-2px';
      };

    
    

    const onClickCalendar=()=>{
        setShowCalendar(true);
        $('#date').text('출발일/도착일').css({fontSize:25,color:'#ccc'});

    }

    const onCloseCalendar=()=>{
        setShowCalendar(false);
    }


    //전체보기

    const [showModal, setShowModal]=React.useState(false);

    const onClickModal=()=>{
        setShowModal(true);

    }

    const onCloseModal=()=>{
        
        setShowModal(false);

    }



    
    React.useEffect(()=>{
        const $slideWrap      = $('#section3 .event-slide-wrap');
        const $leftArrowBtn  = $('#section3 .left-arrow-btn');
        const $rightArrowBtn = $('#section3 .right-arrow-btn');
        
        let   cnt = 0; 
        let n=state.n81;

   

        $slideWrap.css({width: `${34 * n}%` });

        //1. 메인슬라이드함수
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-34*cnt}%`},300);
            if( cnt>=n-3 ){
                $('#section3 .right-arrow-btn').stop().fadeOut(300);
            }
            else{
                $('#section3 .right-arrow-btn').stop().fadeIn(300);
            }
            
            if( cnt<=0 ){
                $('#section3 .left-arrow-btn').stop().fadeOut(300);
            }
            else{
                $('#section3 .left-arrow-btn').stop().fadeIn(300);
            }
        }  
        $('#section3 .left-arrow-btn').fadeOut(0); 
        //2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            if(cnt>=n-3){cnt=n-3}  //20 / 4 = 5(0-4)
            mainSlide();
        }
        //2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            if(cnt<=0){cnt=0}
            mainSlide();
        }
        //3. 다음화살버튼 클릭 이벤트
        $leftArrowBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        });
        $rightArrowBtn.on({
            click(e){             
                e.preventDefault();
                nextCount();
            }
        });
    
    }, [state.n81]);
    
     //섹션 4
     React.useEffect(()=>{        
        ////
        $('#section4 .nav li').click(function(e) {
            e.preventDefault();
            $('#section4 .nav li').removeClass('on');
            $(this).addClass('on');

            let index = $(this).index();
            $('#section4 .content-box >ul').removeClass('on');             
            $('#section4 .content-box >ul').eq(index).addClass('on');
        });
    });

    //섹션 5
    React.useEffect(()=>{
        const $slideWrap      = $('#section5 .event-slide-wrap');
        const $leftArrowBtn  = $('#section5 .left-arrow-btn');
        const $rightArrowBtn = $('#section5 .right-arrow-btn');
        const $slide = $('#section5 .slide');
        const $arrowBtn = $('#section5 .arrow-btn');
       
        let n=state.n83;
        let   cnt = 0; 

   

        $slideWrap.css({width: `${17 * n}%` });

        //1. 메인슬라이드함수 
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-17*cnt}%`},300);
            if( cnt>=n-6 ){
                $('#section5 .right-arrow-btn').stop().fadeOut(300);
            }
            else{
                $('#section5 .right-arrow-btn').stop().fadeIn(300);
            }
            
            if( cnt<=0 ){
                $('#section5 .left-arrow-btn').stop().fadeOut(300);
            }
            else{
                $('#section5 .left-arrow-btn').stop().fadeIn(300);
            }
        }  
        $('#section5 .left-arrow-btn').fadeOut(0); 
        //2-1. 다음카운트함수
        function nextCount(){
            cnt++;
            if(cnt>=n-6){cnt=n-6}  //20 / 4 = 5(0-4)
            mainSlide();
        }
        //2-2. 이전카운트함수
        function prevCount(){
            cnt--;
            if(cnt<=0){cnt=0}
            mainSlide();
        }
        //3. 다음화살버튼 클릭 이벤트
        $leftArrowBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        });
        $rightArrowBtn.on({
            click(e){             
                e.preventDefault();
                nextCount();
            }
        });


        function addOnClass() {            
      
            if ($slide.length >= 7) {
              $arrowBtn.addClass('on');
            }
          }
      
          addOnClass();
    
    }, [state.n83]);

     //섹션 6
     React.useEffect(()=>{
        $('#section6 .nav li').click(function(e) {
            e.preventDefault();
            $('#section6 .nav li').removeClass('on');
            $(this).addClass('on');

            let index = $(this).index();
            $('#section6 .content-box >ul').removeClass('on');             
            $('#section6 .content-box >ul').eq(index).addClass('on');
        });
    });
    

    

    return (
        <div id='sub8' className='sub'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>골프</h2></div>
                        <div className="content">
                            <div className="top-menu">
                                <div className="btn-box">
                                    <div className="btn-container">
                                        <div className="btns">
                                            <div className='btn1'>
                                                <span className="search-title">지역, 테마, 스팟, 상품명</span>
                                                <span className="placeholder">어디로 여행가세요?</span>
                                            </div>
                                            <div className='btn2' >
                                            
                                                <span className="search-title" onClick={onClickCalendar}>날짜</span>
                                                <span className="placeholder"  id="date" onClick={onClickCalendar}>출발일/도착일</span>
                                                {
                                                    showCalendar && <DalComponent dateSubmit={dateSubmit} onCloseCalendar={onCloseCalendar}/>
                                                }
                                                
                                            </div>
                                            <div className='btn3'>
                                                <span className="search-title">출발장소</span>
                                                <span className="input-text">출발지 전체</span>
                                            </div>
                                            <div className='search-btn'>
                                                <button>검색</button>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                <div className="quick-menu">
                                    <ul>
                                        <li>
                                            <a href="!#">
                                                <span>전지역</span>
                                                <img src="./img/sub8/fbec44ac88b69e04b398085e84e9ba85.png" alt="" />
                                                <h4>골프전상품</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub8/b4569644484a03c1255e8835844308bf.png" alt="" />
                                                <h4>베트남NO.1</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>특가</span>
                                                <img src="./img/sub8/def579fcab2db29dc2ecbe3437ed49fc.png" alt="" />
                                                <h4>북해도골프</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub8/efebd7c6c009befb7f9d1b4cfdeea535.png" alt="" />
                                                <h4>일본골프</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>HOT</span>
                                                <img src="./img/sub8/8ed215632dc860b478175a5bf50d623c.png" alt="" />
                                                <h4>클락/바기오</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub8/5d7158b3957b76577acb350afdcfc23c.png" alt="" />
                                                <h4>다낭골프</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub8/6d7b216747951c6d3d9278a537c2091a.png" alt="" />
                                                <h4>골프 텔</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub8/fb0c62fdad44817da02621e0b88a2cad.png" alt="" />
                                                <h4>국내골프</h4>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section2'>
                <a href="!#">
                    <span>이벤트</span>
                    <h3>전 세계 데이터 25% 할인</h3>
                    <img src="./img/sub8/icon_arrow.png" alt="" />
                </a>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이벤트</h2>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main8ModalComponent onCloseModal={onCloseModal} slide81={state.slide81}/>
                            }
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
                                        {
                                            state.slide81.map((item, idx)=>{
                                                return(
                                                    <li className='slide' key={idx}>
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
                </div>
                <a href="!#" className='left-arrow-btn'><img src="./img/sub8/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./img/sub8/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section4'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>추천골프</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">일본</a></li>
                                    <li><a href="!#">태국</a></li>
                                    <li><a href="!#">필리핀</a></li>
                                    <li><a href="!#">베트남</a></li>
                                    <li><a href="!#">괌/사이판</a></li>
                                    <li><a href="!#">말레이시아</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide821.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide822.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide823.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide824.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide825.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide826.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
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
            </section>
            <section id='section5'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>인기 여행지</h2>
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
{
                                        state.slide83.map((item, idx)=>{
                                            return(
                                                <li className='slide' key={idx}>
                                                    <a href="!#">
                                                        <img src={item.img} alt="" />
                                                        <span>{item.white_text}</span>
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
                <a href="!#" className='left-arrow-btn arrow-btn'><img src="./img/sub8/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn arrow-btn'><img src="./img/sub8/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section6'>
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>테마별 추천 GOLF</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">5월인기골프</a></li>
                                    <li ><a href="!#">온천골프</a></li>
                                    <li><a href="!#">골프텔</a></li>
                                    <li><a href="!#">골프 관광</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide841.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide842.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide843.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide844.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                  <div className="img-box">
                                                      <img src={item.img} alt="" />
                                                 </div>
                                                 <div className="text-box">
                                                    <ul>
                                                        <li><h3>{item.text1}</h3></li>
                                                        <li>
                                                            <span>{item.text2}</span>
                                                        </li>
                                                        <li>
                                                            <strong>{item.price}</strong>
                                                            <em>원~</em>
                                                        </li>
                                                    </ul>
                                                </div>
                                                </a>
                                            </li>
                                        )
                                    })
}
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <a href="!#">
                                <h3>상품 더보기<img src="./img/sub8/icon_arrow.png" alt="" /></h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

