import React from "react";
import $ from "jquery";
import DalComponent from "./modal/DalComponent";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Main2Component({n, setViewProduct}){

  
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
    slide21:[],
    slide22:[],
    slide23:[],
    slide24:[],
  })
  React.useEffect(()=>{
    axios({
        url:'./data/json/main2.json',
        method:'GET'
    })
    .then((res)=>{
      if(res.status===200){
        console.log(res.data); 
        setState({
            ...state,
            slide21: res.data.slide21,
            n21: res.data.slide21.length,
            slide22: res.data.slide22,
            n22: res.data.slide22.length,
            slide23: res.data.slide23,
            n23: res.data.slide23.length,
            slide24: res.data.slide24,
            n24: res.data.slide24.length
        })
      }
    })
    .catch((err)=>{
        console.log(err);
    })
},[])

  const [showCalendar, setShowCalendar] = React.useState(false);

  const dateSubmit = (date) => {
      const resultDate = document.getElementById('date');
      resultDate.innerText = date;
      resultDate.style.fontSize = '24px';
      resultDate.style.letterSpacing = '-1px';
      resultDate.style.color = '#000';
    };
    const onClickCalendar=(e)=>{
        e.preventDefault();
        setShowCalendar(true);
        $('#date').text('날짜를 선택해주세요').css({fontSize:24, lineHeight:1, color:'#ccc'});

    }
    const onCloseCalendar=()=>{
        setShowCalendar(false);
    }
  React.useEffect(()=>{
    $('.heart').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('on');
    });
  });

  //섹션3 슬라이드
  React.useEffect(()=>{
    const $slideWrap      = $('#section3 .slider-wrap');
    const $leftArrowBtn  = $('#section3 .left-arrow-btn');
    const $rightArrowBtn = $('#section3 .right-arrow-btn');
    let   cnt = 0; 
    let n=state.n21;
    $slideWrap.css({width: `${34 * n}%` });

    //1. 메인슬라이드함수  
    mainSlide();  
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

}, [state.n21]);

//섹션4 슬라이드
React.useEffect(()=>{
  const $slideWrap = $('#section4 .slide-wrap');
  const $prevBtn = $('#section4 .left-arrow-btn');
  const $nextBtn = $('#section4 .right-arrow-btn');
  let cnt=0;
  let setId=0;
  let n=state.n22;

  $slideWrap.css({width: `${20 * n}%` });

  function mainSlide(){
      // console.log(cnt);
      $slideWrap.stop().animate({left: `${-20*cnt}%`}, 600, function(){
          if(cnt>n-11) cnt=0;
          if(cnt<0) cnt=n-11;
          $slideWrap.stop().animate({left: `${-20*cnt}%`}, 0)
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
          autoTimer();
      }      
  });
  


  $prevBtn.on({
      click(e){
          e.preventDefault();
          clearInterval(setId);
          prevCount();
          autoTimer();
      }
  });




},[state.n22]);


//섹션 5 슬라이드
React.useEffect(()=>{
  const $slideWrap      = $('#section5 .slider3');
  const $leftArrowBtn  = $('#section5 .prev-button3');
  const $rightArrowBtn = $('#section5 .next-button3');
  
  const $currentNumber    = $('#section5 .current-number');
  const $totalNumber      = $('#section5 .total-number');
 
  let n=state.n23;
  let   cnt = 0; 



  function slidePageEvent(){
    $currentNumber.html( cnt+1===(n-2) ? 1 : (cnt+1===0 ? n-3 : cnt+1) );
    
    $totalNumber.html( n-3 );
  }



  $slideWrap.css({width: `${25 * n}%` });

  //1. 메인슬라이드함수  
  mainSlide();  
  function mainSlide(){
      $slideWrap.stop().animate({left: `${-25*cnt}%`},300,function(){
        if(cnt>=n-3){cnt=0}
        if(cnt< 0){cnt=n-4}  // 23-1 (0~22)
        $slideWrap.stop().animate({left: `${-25*cnt}%`}, 0);
      });
      slidePageEvent();
  }
  //2-1. 다음카운트함수
  function nextCount(){
      cnt++;
      mainSlide();
  }
  //2-2. 이전카운트함수
  function prevCount(){
      cnt--;
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


 

}, [state.n23]); 


//섹션 6 슬라이드
React.useEffect(()=>{
  const $slideWrap      = $('#section6 .slider-wrap');
  const $leftArrowBtn  = $('#section6 .left-arrow-btn');
  const $rightArrowBtn = $('#section6 .right-arrow-btn');
  const $arrowBtn = $('#section6 .arrow-btn');
 
  let n=state.n24;
  let   cnt = 0; 



  $slideWrap.css({width: `${33.8 * n}%` });

  //1. 메인슬라이드함수  
  mainSlide();  
  function mainSlide(){
      $slideWrap.stop().animate({left: `${-33.8*cnt}%`},300);
      if( cnt>=n-3 ){
          $('#section6 .right-arrow-btn').stop().fadeOut(300);
      }
      else{
          $('#section6 .right-arrow-btn').stop().fadeIn(300);
      }
      
      if( cnt<=0 ){
          $('#section6 .left-arrow-btn').stop().fadeOut(300);
      }
      else{
          $('#section6 .left-arrow-btn').stop().fadeIn(300);
      }
  }  
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


  function addOnClass() {            

      if (n >= 7) {
        $arrowBtn.addClass('on');
      }
    }

    addOnClass();

}, [state.n24]); 
    

    return (
        <main id="main2">
        <section id="section1">
          <div className="wrap">
            <div className="container">
              <div className="content">
                <div className="content-gap">
                  <div>
                    <h1>여행지, 숙소</h1>
                    <input type="text" placeholder="검색해보세요." />
                  </div>
                  <div className="box2">
                    <h1>날짜</h1>
                    <p id="date" onClick={onClickCalendar} >날짜를 선택해주세요</p>

                    {
                        showCalendar && <DalComponent dateSubmit={dateSubmit} onCloseCalendar={onCloseCalendar}/>
                    }
                  </div>
                  <div>
                    <h1>인원, 객실</h1>
                    <p>성인2, 소아0, 객실1</p>
                  </div>
                  <div className="search">
                    <span>
                      <input type="button" value="검색하기" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section2">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="content">
                  <div className="line1">
                    <a href="!#">
                      <div>
                        
                        <div className="circle">
                          <img src="./img/main2/shortcut_hotsale.png" alt="" />
                        </div>
                      </div>
                      <h6>호텔</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_resort2.png" alt="" />
                        </div>
                      </div>
                      <h6>리조트</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_motel2.png" alt="" />
                        </div>
                      </div>
                      <h6>모텔/부티크</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_pension.png" alt="" />
                        </div>
                      </div>
                      <h6>펜션/풀빌라</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_brand.png" alt="" />
                        </div>
                      </div>
                      <h6>오늘 숙박</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_activity.png" alt="" />
                        </div>
                      </div>
                      <h6>금주의 특가</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_korea.png" alt="" />
                        </div>
                      </div>
                      <h6>주말 숙박</h6>
                    </a>
                    <a href="!#">
                      <span>라스트 방</span>
                      <div>                        
                        <div className="circle">
                          <img src="./img/main2/shortcut_time.png" alt="" />
                        </div>
                      </div>
                      <h6>초강력특가</h6>
                    </a>
                  </div>
                  <div className="line2">
                    <a href="!#">
                      <span>최대 38만원</span>
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_allnight.png" alt="" />
                        </div>
                      </div>
                      <h6>80일간 초특가</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/icon_pool.png" alt="" />
                        </div>
                      </div>
                      <h6>인기펜션</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_resort.png" alt="" />
                        </div>
                      </div>
                      <h6>제주특가모음</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_allnight.png" alt="" />
                        </div>
                      </div>
                      <h6>한정판매</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_gold.png" alt="" />
                        </div>
                      </div>
                      <h6>금도끼</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img
                            src="./img/main2/87d4a75e40c0e4cfcc8b3ac29c9798f4.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <h6>라이브 특가!</h6>
                    </a>
                    <a href="!#">
                      <span>가정의 달</span>
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_hotsale.png" alt="" />
                        </div>
                      </div>
                      <h6>황금연휴특가</h6>
                    </a>
                    <a href="!#">
                      <div>
                        <div className="circle">
                          <img src="./img/main2/shortcut_coupon.png" alt="" />
                        </div>
                      </div>
                      <h6>쿠폰/혜택</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section3">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="slider-controls">
                  <a href="!#" className='left-arrow-btn'><img src="./img/main2/icon_arrowPrev_on.svg" alt="" /></a>
                  <a href="!#" className='right-arrow-btn'><img src="./img/main2/icon_arrowNext_on.svg" alt="" /></a>
                </div>
                <div className="content">
                  <div className="slider-container">
                    <div className="slider-view">
                      <ul className="slider-wrap">
{
                        state.slide21.map((item, idx)=>{
                          return(
                            <li className="slide" key={idx}>
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
          </div>
        </section>
        <section id="section4">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="slider-controls2">
                <a href="!#" className='left-arrow-btn'><img src="./img/main2/icon_prev_arrow_on.png" alt="" /></a>
                  <a href="!#" className='right-arrow-btn'><img src="./img/main2/icon_next_arrow_on.png" alt="" /></a>
                </div>
                <div className="content">
                  <h2>금도끼 금주의 미친특가</h2>
                  <div className="slide-container">
                    <div className="slide-view">
                      <ul className="slide-wrap">
{
                        state.slide22.map((item, idx)=>{
                          return(
                            <li className='slide slide3' key={idx}>
                              <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                  <figure>
                                    <img src={item.img} alt="" />
                                  </figure>
                                  <div className="things">
                                  <h1>{item.text1}</h1>
                                  <div className="value">
                                    <span>{item.text2}</span>
                                  </div>
                                  <div className="price">{item.price}</div>
                                </div>
                                <button type='button' className='heart'>
                                  <img className='heart-off' src="./img/main2/icon_dib_off.svg" alt="" />
                                  <img className='heart-on' src="./img/main2/icon_dib_on.svg" alt="" />
                                </button>
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
        </section>
        <section id="section5">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="title">
                  <h1>대체공휴일 확정! 호캉스 확정!</h1>
                  <div className="slider-controls3">
                    <span className='page-count-box'>
                      <em className='current-number'>1</em>
                      <i>/</i>     
                      <em className='total-number'>{n}</em>
                    </span>
                    <button className="prev-button3"></button>
                    <button className="next-button3"></button>
                  </div>
                </div>
                <div className="content">
                  <div className="slider-container3">
                    <div className="slider3">
{
                        state.slide23.map((item, idx)=>{
                          return(
                            <div className="slide" key={idx}>
                              <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                <div className="img-box"><img src={item.img} alt="" /></div>
                                <div className="things">
                                  <h1>{item.text1}</h1>
                                  <div className="value">
                                    <span>{item.text2}</span>
                                  </div>
                                  <div className="price">{item.price}</div>
                                </div>
                                <button type='button' className='heart'>
                                    <img className='heart-off' src="./img/main2/icon_dib_off.svg" alt="" />
                                    <img className='heart-on' src="./img/main2/icon_dib_on.svg" alt="" />
                                </button>
                              </a>
                            </div>
                          )
                        })                     
}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section6">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="slider-controls4">
                  <a href="!#" className='left-arrow-btn'><img src="./img/main2/icon_arrowPrev_on.svg" alt="" /></a>
                  <a href="!#" className='right-arrow-btn'><img src="./img/main2/icon_arrowNext_on.svg" alt="" /></a>
                </div>
                <div className="content">
                <div className="slider-container">
                    <div className="slider-view">
                      <ul className="slider-wrap">
{
                    state.slide24.map((item, idx)=>{
                      return(
                        <li className="slide" key={idx}>
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
          </div>
        </section>
        <section id="section7">
          <img src="../../img/main2/638201614670770313.jpg" alt="" />
        </section>
      </main>
    );
};