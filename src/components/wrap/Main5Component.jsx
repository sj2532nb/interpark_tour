import React from 'react';
import $ from 'jquery';
import Main5ModalComponent from './modal/Main5ModalComponent';
import DalComponent from './modal/DalComponent';
import axios from 'axios';

export default function Sub5Component({setViewProduct}) {

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
        slide51:[],
        slide521:[],
        slide522:[],
        slide523:[],
        slide524:[],
        slide525:[],
        slide526:[],
        slide53:[],
        slide541:[],
        slide542:[],
        slide543:[],
        slide544:[],
        slide545:[],
        slide546:[]
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main5.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide51: res.data.slide51,
                        n51: res.data.slide51.length,
                        slide521: res.data.slide521,
                        slide522: res.data.slide522,
                        slide523: res.data.slide523,
                        slide524: res.data.slide524,
                        slide525: res.data.slide525,
                        slide526: res.data.slide526,
                        slide53: res.data.slide53,
                        n53: res.data.slide53.length,
                        slide541: res.data.slide541,
                        slide542: res.data.slide542,
                        slide543: res.data.slide543,
                        slide544: res.data.slide544,
                        slide545: res.data.slide545,
                        slide546: res.data.slide546,
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
        let n=state.n51;

   

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
    
    },[state.n51]);
    
     //섹션 4
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
        const $arrowBtn = $('#section5 .arrow-btn');
       
        let n=state.n53;
        let   cnt = 0; 

   

        $slideWrap.css({width: `${17 * n}%` });

        //1. 메인슬라이드함수  
        
        function mainSlide(){
            console.log(cnt);
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
      
            if (n >= 7) {
              $arrowBtn.addClass('on');
            }
        }
      
       
        addOnClass();
    
    }, [state.n53]);

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
        <div id='sub5' className='sub'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>해외패키지</h2></div>
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
                                                <span>예약즉시</span>
                                                <img src="./img/sub5/174737d74acacd56bb02daccddee9d7e.png" alt="" />
                                                <h4>출발확정</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub5/ecb6c3c9eb9c0ff4dec0dd239da4854f.png" alt="" />
                                                <h4>홈쇼핑LIVE</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub5/04d474e63392357a5ce811b9d4302088.png" alt="" />
                                                <h4>쎈여행딜</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub5/b4011c3ee27a8a415cf18cff8b984edb.png" alt="" />
                                                <h4>지방출발</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub5/a3bfdd27e4ca274a40fb93b27389a193.png" alt="" />
                                                <h4>일본여행</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>80일간</span>
                                                <img src="./img/sub5/659dae9df50beff95c20d5611742b6ae.png" alt="" />
                                                <h4>1등특가</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub5/f9726359b1a1523183f312f4fe94b837.png" alt="" />
                                                <h4>자유여행</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <span>문화의발견</span>
                                                <img src="./img/sub5/41088e4066c7f34049d2f5842acbc069.png" alt="" />
                                                <h4>컨셉트립</h4>
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
                    <h3>인터파크투어 X 모두투어 콜라보 3% 할인</h3>
                    <img src="./img/sub5/icon_arrow.png" alt="" />
                </a>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이벤트</h2>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main5ModalComponent onCloseModal={onCloseModal} slide51={state.slide51}/>
                            }
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
{
                                        state.slide51.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn'><img src="./img/sub5/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./img/sub5/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section4'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>긴급모객! 예약하면 출발 가능!</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">베트남</a></li>
                                    <li><a href="!#">필리핀</a></li>
                                    <li><a href="!#">일본</a></li>
                                    <li><a href="!#">미주/대양주</a></li>
                                    <li><a href="!#">유럽</a></li>
                                    <li><a href="!#">부산출발</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
                                    {
                                        state.slide521.map((item, idx)=>{
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
                                        state.slide522.map((item, idx)=>{
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
                                        state.slide523.map((item, idx)=>{
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
                                        state.slide524.map((item, idx)=>{
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
                                        state.slide525.map((item, idx)=>{
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
                                        state.slide526.map((item, idx)=>{
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
                                        state.slide53.map((item,idx)=>{
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
                <a href="!#" className='left-arrow-btn arrow-btn'><img src="./img/sub5/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn arrow-btn'><img src="./img/sub5/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section6'>
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>판매랭킹 Top4</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">대만</a></li>
                                    <li ><a href="!#">중국</a></li>
                                    <li><a href="!#">괌</a></li>
                                    <li><a href="!#">유럽</a></li>
                                    <li><a href="!#">클럽메드</a></li>
                                    <li><a href="!#">컨셉트립</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide541.map((item, idx)=>{
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
                                                    state.slide542.map((item, idx)=>{
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
                                                    state.slide543.map((item, idx)=>{
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
                                                    state.slide544.map((item, idx)=>{
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
                                                    state.slide545.map((item, idx)=>{
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
                                                    state.slide546.map((item, idx)=>{
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
                                <h3>상품 더보기<img src="./img/sub5/icon_arrow.png" alt="" /></h3>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

