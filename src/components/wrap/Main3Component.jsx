import React from 'react';
import $ from 'jquery';
import Main3ModalComponent from './modal/Main3ModalComponent';
import DalComponent from './modal/DalComponent';
import axios from 'axios';
import {Link, Outlet} from 'react-router-dom';

export default function Sub3Component({setViewProduct}) {

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
        slide31:[],
        slide321:[],
        slide322:[],
        slide323:[],
        slide324:[],
        slide325:[],
        slide326:[],
        slide33:[],
        slide341:[],
        slide342:[],
        slide343:[],
        slide344:[],
        slide345:[],
        slide346:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main3.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide31: res.data.slide31,
                        n31: res.data.slide31.length,
                        slide321: res.data.slide321,
                        slide322: res.data.slide322,
                        slide323: res.data.slide323,
                        slide324: res.data.slide324,
                        slide325: res.data.slide325,
                        slide326: res.data.slide326,
                        slide33: res.data.slide33,
                        n33: res.data.slide33.length,
                        slide341: res.data.slide341,
                        slide342: res.data.slide342,
                        slide343: res.data.slide343,
                        slide344: res.data.slide344,
                        slide345: res.data.slide345,
                        slide346: res.data.slide346
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
        $('#date').text('체크인/체크아웃').css({fontSize:25,color:'#ccc'});

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
        let n=state.n31;

   

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
    
    }, [state.n31]);
    
    //섹션 4
    React.useEffect(()=>{
        $('.heart').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('on');
        });
        
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
       
        let n=state.n33;
        let   cnt = 0; 

   

        $slideWrap.css({width: `${33.8 * n}%` });

        //1. 메인슬라이드함수  
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-33.8*cnt}%`},300);
            if( cnt>=n-3 ){
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
      
            if ($slide.length >= 7) {
              $arrowBtn.addClass('on');
            }
          }
      
          addOnClass();
    
    }, [state.n33]);  

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
        <div id='sub3' className='sub'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>해외숙소</h2></div>
                        <div className="content">
                            <div className="top-menu">
                                <div className="btn-box btn-box-sub3">
                                    <div className="btn-container">
                                        <div className="btns">
                                            <div className='btn1'>
                                                <span className="search-title">지역, 숙소, 명소, 키워드</span>
                                                <span className="placeholder">어디로 여행가세요?</span>
                                            </div>
                                            <div className='btn2' >
                                            
                                                <span className="search-title" onClick={onClickCalendar}>날짜</span>
                                                <p className="placeholder"  id="date" onClick={onClickCalendar}>체크인/체크아웃</p>
                                                {
                                                    showCalendar && <DalComponent dateSubmit={dateSubmit} onCloseCalendar={onCloseCalendar}/>
                                                }
                                                
                                            </div>
                                            <div className='btn3'>
                                                <span className="search-title">인원, 객실</span>
                                                <span className="input-text">성인2, 아동0, 객실1</span>
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
                                            <Link to="/Sub3Child1Component">
                                                <span>HOT</span>
                                                <img src="./img/sub3/1934925641ec4efc0b0fd4577f64d016.png" alt="" />
                                                <h4>50만원쿠폰팩</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child2Component">
                                                <img src="./img/sub3/f5ea5c766d269399c67d2d16a4c8baca.png" alt="" />
                                                <h4>이달의 픽</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child3Component">
                                                <span>단독특가</span>
                                                <img src="./img/sub3/8fba62ba99494112f91a5e67049b0cee.png" alt="" />
                                                <h4>일본온천호텔</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child4Component">
                                                <img src="./img/sub3/69a85117586104531058b477bdca955d.png" alt="" />
                                                <h4>얼리버드특가</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child5Component">
                                                <img src="./img/sub3/2641ca07a4a54ff931a2a570fa1c5b06.png" alt="" />
                                                <h4>가족여행</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child6Component">
                                                <span>NEW</span>
                                                <img src="./img/sub3/8b9151a8740b338db57f1dcc7df89a7a.png" alt="" />
                                                <h4>신상호텔</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child7Component">
                                                <img src="./img/sub3/6abc1f105fd2055954dce3210e0c4755.png" alt="" />
                                                <h4>TOP 랭킹</h4>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Sub3Child8Component">
                                                <img src="./img/sub3/8ed215632dc860b478175a5bf50d623c.png" alt="" />
                                                <h4>최저가보상제</h4>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section2' className='section2-sub3'>
                <a href="!#">
                    <span>이벤트</span>
                    <h3>전 세계 데이터 25% 할인</h3>
                    <img src="./img/sub3/icon_arrow.png" alt="" />
                </a>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>떠나요! 해외숙소 추천 프로모션</h2>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main3ModalComponent onCloseModal={onCloseModal} slide31={state.slide31}/>
                            }
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
{
                                        state.slide31.map((item, idx)=>{
                                            return(
                                                <li className='slide' key={idx}>
                                                    <Link to="/Sub3Child1Component">
                                                        <img src={item.img} alt="" />
                                                    </Link>
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
                <a href="!#" className='left-arrow-btn'><img src="./img/sub3/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./img/sub3/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section4'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>인기도시 BEST</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">괌</a></li>
                                    <li><a href="!#">오사카</a></li>
                                    <li><a href="!#">방콕</a></li>
                                    <li><a href="!#">다낭</a></li>
                                    <li><a href="!#">호놀룰루</a></li>
                                    <li><a href="!#">싱가포르</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide321.map((item, idx)=>{
                                        return(
                                            <li key={idx} onClick={(e)=>onClickProductList(e, item)}>
                                                <Link to={`/Main3Sec4Img${idx+1}`}>
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
                                                </Link>
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide322.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide323.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide324.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide325.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide326.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
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
            <section id='section5' className='section5-sub3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이벤트</h2>
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap event-slide-wrap-sub3'>
{
                                        state.slide33.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn arrow-btn'><img src="./img/sub3/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn arrow-btn'><img src="./img/sub3/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section6'>
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>지역별 BEST</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">남태평양</a></li>
                                    <li><a href="!#">동남아</a></li>
                                    <li><a href="!#">일본</a></li>
                                    <li><a href="!#">미주</a></li>
                                    <li><a href="!#">유럽</a></li>
                                    <li><a href="!#">중화권</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide341.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide342.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide343.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide344.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide345.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
{
                                    state.slide346.map((item, idx)=>{
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
                                                <button type='button' className='heart'>
                                                    <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                                    <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                                </button>
                                            </li>
                                        )
                                    })
}
                                </ul>
                                <ul>
                                    <li>
                                        <a href="!#">
                                            <div className="img-box">
                                                <img src="./img/sub3/2a2b516e_z.jpg" alt="" />
                                            </div>
                                            <div className="text-box">
                                                <ul>
                                                    <li><h3>[홋카이도 골프4일 63H] 힐튼 니세코 빌리지/조식/석식/ 온천골프</h3></li>
                                                    <li>
                                                        <span>3박4일</span>
                                                        <span>|</span>
                                                        <span>인천 출발</span>
                                                        <span>|</span>
                                                        <span>진에어</span>
                                                        <span>|</span>
                                                        <span>노쇼핑</span>
                                                    </li>
                                                    <li>
                                                        <strong>1,340,000</strong>
                                                        <em>원~</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                        <button type='button' className='heart'>
                                            <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                            <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                        </button>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <div className="img-box">
                                                <img src="./img/sub3/1000046905_01_b288x208.jpg" alt="" />
                                            </div>
                                            <div className="text-box">
                                                <ul>
                                                    <li><h3>[홋카이도 골프4일 63H] 힐튼 니세코 빌리지/조식/석식/ 온천골프</h3></li>
                                                    <li>
                                                        <span>3박4일</span>
                                                        <span>|</span>
                                                        <span>인천 출발</span>
                                                        <span>|</span>
                                                        <span>진에어</span>
                                                        <span>|</span>
                                                        <span>노쇼핑</span>
                                                    </li>
                                                    <li>
                                                        <strong>1,340,000</strong>
                                                        <em>원~</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                        <button type='button' className='heart'>
                                            <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                            <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                        </button>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <div className="img-box">
                                                <img src="./img/sub3/35a4350c_z.jpg" alt="" />
                                            </div>
                                            <div className="text-box">
                                                <ul>
                                                    <li><h3>[홋카이도 골프4일 63H] 힐튼 니세코 빌리지/조식/석식/ 온천골프</h3></li>
                                                    <li>
                                                        <span>3박4일</span>
                                                        <span>|</span>
                                                        <span>인천 출발</span>
                                                        <span>|</span>
                                                        <span>진에어</span>
                                                        <span>|</span>
                                                        <span>노쇼핑</span>
                                                    </li>
                                                    <li>
                                                        <strong>1,340,000</strong>
                                                        <em>원~</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                        <button type='button' className='heart'>
                                            <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                            <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                        </button>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <div className="img-box">
                                                <img src="./img/sub3/ce526780_z.jpg" alt="" />
                                            </div>
                                            <div className="text-box">
                                                <ul>
                                                    <li><h3>[홋카이도 골프4일 63H] 힐튼 니세코 빌리지/조식/석식/ 온천골프</h3></li>
                                                    <li>
                                                        <span>3박4일</span>
                                                        <span>|</span>
                                                        <span>인천 출발</span>
                                                        <span>|</span>
                                                        <span>진에어</span>
                                                        <span>|</span>
                                                        <span>노쇼핑</span>
                                                    </li>
                                                    <li>
                                                        <strong>1,340,000</strong>
                                                        <em>원~</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </a>
                                        <button type='button' className='heart'>
                                            <img className='heart-off' src="./img/sub3/icon_dib_off.svg" alt="" />
                                            <img className='heart-on' src="./img/sub3/icon_dib_on.svg" alt="" />
                                        </button>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <a href="!#">
                                <h3>상품 더보기<img src="./img/sub3/icon_arrow.png" alt="" /></h3>                                
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <section id='section7'>
                <div className="container">
                    <a href="!#">
                        <i><img src="./img/sub3/icon_service_customer.svg" alt="" /></i>
                        <ul>
                            <li><h2>고객센터</h2></li>
                            <li><h3>평일 09:00~17:00</h3></li>
                            <li><h3>점심시간 12:00~13:00</h3></li>
                            <li><h3>주말/공휴일 휴무</h3></li>
                        </ul>
                        <span></span>
                    </a>
                    <a href="!#">
                        <i><img src="./img/sub3/icon_service_talkButler.svg" alt="" /></i>
                        <ul>
                            <li><h2>톡집사 문의</h2></li>
                            <li><h3>전화가 어렵다면</h3></li>
                            <li><h3>톡집사에게 톡!</h3></li>
                        </ul>
                        <span></span>
                    </a>
                    <a href="!#">
                        <i><img src="./img/sub3/icon_service_corporate.svg" alt="" /></i>
                        <ul>
                            <li><h2>단체/법인 문의</h2></li>
                            <li><h3>견적문의/법인출장관리</h3></li>
                            <li><h3>기업연수 관련 문의</h3></li>
                        </ul>
                        <span></span>
                    </a>
                    <a href="!#">
                        <i><img src="./img/sub3/icon_service_event.svg" alt="" /></i>
                        <ul>
                            <li><h2>이벤트 혜택</h2></li>
                            <li><h3>BEST 리뷰/할인혜택 등</h3></li>
                            <li><h3>다양한 이벤트 혜택!</h3></li>
                        </ul>
                        <span></span>
                    </a>
                </div>
            </section>
        </div>
    );
}

