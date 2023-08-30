import React from 'react';
import $ from 'jquery';
import Main6ModalComponent from './modal/Main6ModalComponent';
import DalComponent from './modal/DalComponent';
import axios from 'axios';

export default function Sub6Component({setViewProduct}) {

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
        slide61:[],
        slide621:[],
        slide622:[],
        slide623:[],
        slide624:[],
        slide625:[],
        slide626:[],
        slide63:[],
        slide641:[],
        slide642:[],
        slide643:[],
        slide644:[],
        slide645:[],
        slide646:[],
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main6.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide61: res.data.slide61,
                        n61: res.data.slide61.length,
                        slide621: res.data.slide621,
                        slide622: res.data.slide622,
                        slide623: res.data.slide623,
                        slide624: res.data.slide624,
                        slide625: res.data.slide625,
                        slide626: res.data.slide626,
                        slide63: res.data.slide63,
                        n63: res.data.slide63.length,
                        slide641: res.data.slide641,
                        slide642: res.data.slide642,
                        slide643: res.data.slide643,
                        slide644: res.data.slide644,
                        slide645: res.data.slide645,
                        slide646: res.data.slide646,
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

    //섹션3
    React.useEffect(()=>{
        const $slideWrap      = $('#section3 .event-slide-wrap');
        const $leftArrowBtn  = $('#section3 .left-arrow-btn');
        const $rightArrowBtn = $('#section3 .right-arrow-btn');
        
        let   cnt = 0; 
        let n=state.n61;

   

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
    
    }, [state.n61]);
    
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
       
        let n=state.n63;
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
    
    }, [state.n63]);

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
        <div id='sub6' className='sub'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>국내/제주</h2></div>
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
                                                <img src="./img/sub6/a5c350298cfb349cd5096c931e6e4ca8.png" alt="" />
                                                <h4>제주렌터카</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub6/cf42c70d16c94f5aa93f2d59302452fd.png" alt="" />
                                                <h4>제주롯데특가</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>특가</span>
                                                <img src="./img/sub6/77af647730bdf6d2533c48fb886786fb.png" alt="" />
                                                <h4>홈쇼핑LIVE</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub6/572588d0fab9308f43b663cc8b55539a.png" alt="" />
                                                <h4>제주 에어텔</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>HOT</span>
                                                <img src="./img/sub6/572588d0fab9308f43b663cc8b55539a.png" alt="" />
                                                <h4>제주 패키지</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub6/8ad9c266ccb18ed10941a4a3e381614f.png" alt="" />
                                                <h4>황금연휴</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub6/ac13c62df061d1be8f72b82891c1df23.png" alt="" />
                                                <h4>국내출발확정</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub6/666519e7da95fa274e9e59ed3e0b36b7.png" alt="" />
                                                <h4>지자체 지원</h4>
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
                    <span>추천</span>
                    <h3>진에어 타고 떠나는 편안한 여수 자유여행</h3>
                    <img src="./img/sub6/icon_arrow.png" alt="" />
                </a>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이벤트</h2>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main6ModalComponent onCloseModal={onCloseModal} slide61={state.slide61}/>
                            }
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
{
                                        state.slide61.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn'><img src="./img/sub6/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./img/sub6/icon_arrowNext_on.svg" alt="" /></a>
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
                                    <li className='on'><a href="!#">제주 에어카텔</a></li>
                                    <li><a href="!#">제주 에어카/에어텔</a></li>
                                    <li><a href="!#">제주 카텔(숙박+렌터카)</a></li>
                                    <li><a href="!#">제주 버스여행</a></li>
                                    <li><a href="!#">금주 내륙버스 집중모객</a></li>
                                    <li><a href="!#">금주 내륙기차 집중모객</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide621.map((item, idx)=>{
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
                                    state.slide622.map((item, idx)=>{
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
                                    state.slide623.map((item, idx)=>{
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
                                    state.slide624.map((item, idx)=>{
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
                                    state.slide625.map((item, idx)=>{
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
                                    state.slide626.map((item, idx)=>{
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
                                            state.slide63.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn arrow-btn'><img src="./img/sub6/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn arrow-btn'><img src="./img/sub6/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section6'>
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>제주/내륙 상품 더보기</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">제주 에어카텔</a></li>
                                    <li ><a href="!#">제주 카텔(숙박+렌터카)</a></li>
                                    <li><a href="!#">제주 버스여행</a></li>
                                    <li><a href="!#">섬여행</a></li>
                                    <li><a href="!#">내륙버스여행</a></li>
                                    <li><a href="!#">내륙기차여행</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide641.map((item, idx)=>{
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
                                    state.slide642.map((item, idx)=>{
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
                                    state.slide643.map((item, idx)=>{
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
                                    state.slide644.map((item, idx)=>{
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
                                    state.slide645.map((item, idx)=>{
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
                                    state.slide646.map((item, idx)=>{
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
                                <h3>상품 더보기<img src="./img/sub6/icon_arrow.png" alt="" /></h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}