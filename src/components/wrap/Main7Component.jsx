import React from 'react';
import $ from 'jquery';
import Main7ModalComponent from './modal/Main7ModalComponent';
import DalComponent from './modal/DalComponent';
import axios from 'axios';

export default function Sub7Component({setViewProduct}) {

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
        slide71:[],
        slide721:[],
        slide722:[],
        slide723:[],
        slide724:[],
        slide725:[],
        slide726:[],
        slide73:[],
        slide741:[],
        slide742:[],
        slide743:[],
        slide744:[],
        slide745:[],
        slide746:[],
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main7.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide71: res.data.slide71,
                        n71: res.data.slide71.length,
                        slide721: res.data.slide721,
                        slide722: res.data.slide722,
                        slide723: res.data.slide723,
                        slide724: res.data.slide724,
                        slide725: res.data.slide725,
                        slide726: res.data.slide726,
                        slide73: res.data.slide73,
                        n73: res.data.slide73.length,
                        slide741: res.data.slide741,
                        slide742: res.data.slide742,
                        slide743: res.data.slide743,
                        slide744: res.data.slide744,
                        slide745: res.data.slide745,
                        slide746: res.data.slide746
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
        let n=state.n71;

   

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
    
    }, [state.n71]);
    
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
       
        let n=state.n73;
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
    
    }, [state.n73]);

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
        <div id='sub7' className='sub'>
            <section id='section1'>
                <div className="container">
                    <div className="gap">
                        <div className="title hide"><h2>허니문</h2></div>
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
                                                <span>카톡상담</span>
                                                <img src="./img/sub7/5b77c1c1e5d92d16f6af06fb868e1f57.png" alt="" />
                                                <h4>견적문의</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/89040ded2651e0fdd9561f8f068d905f.png" alt="" />
                                                <h4>유럽</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/56182a87ff46b87f42df53312e93b0ad.png" alt="" />
                                                <h4>발리</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/68810ced7010342f33703e40faa25783.png" alt="" />
                                                <h4>하와이</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/87af2b7a14fb59954315f57616f7e10e.png" alt="" />
                                                <h4>몰디브</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/566ceb33806e8ffedef2c2eac1ea7e31.png" alt="" />
                                                <h4>푸켓</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/6b2d195574bf07d5d408308b0dc12544.png" alt="" />
                                                <h4>코사무이</h4>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="!#">
                                                <img src="./img/sub7/9b902e8ce3a3888ff182d8dddcf47ee1.png" alt="" />
                                                <h4>칸쿤</h4>
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
                    <h3>♥허니문 전지역 맞춤견적♥</h3>
                    <img src="./img/sub7/icon_arrow.png" alt="" />
                </a>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>이벤트</h2>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main7ModalComponent onCloseModal={onCloseModal} slide71={state.slide71}/>
                            }
                        </div>
                        <div className="content">
                            <div className="event-slide-container">
                                <div className="event-slide-view">
                                    <ul className='event-slide-wrap'>
                                        {
                                            state.slide71.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn'><img src="./img/sub7/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn'><img src="./img/sub7/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section4'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>BEST 허니문</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">유럽</a></li>
                                    <li><a href="!#">발리</a></li>
                                    <li><a href="!#">하와이</a></li>
                                    <li><a href="!#">몰디브</a></li>
                                    <li><a href="!#">푸켓</a></li>
                                    <li><a href="!#">괌/사이판</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide721.map((item, idx)=>{
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
                                    state.slide722.map((item, idx)=>{
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
                                    state.slide723.map((item, idx)=>{
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
                                    state.slide724.map((item, idx)=>{
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
                                    state.slide725.map((item, idx)=>{
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
                                    state.slide726.map((item, idx)=>{
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
                                        state.slide73.map((item, idx)=>{
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
                <a href="!#" className='left-arrow-btn arrow-btn'><img src="./img/sub7/icon_arrowPrev_on.svg" alt="" /></a>
                <a href="!#" className='right-arrow-btn arrow-btn'><img src="./img/sub7/icon_arrowNext_on.svg" alt="" /></a>
            </section>
            <section id='section6'>
            <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>TOP 허니문</h2>
                        </div>
                        <div className="content">
                            <div className="nav">
                                <ul>
                                    <li className='on'><a href="!#">칸쿤</a></li>
                                    <li ><a href="!#">베트남</a></li>
                                    <li><a href="!#">코사무이</a></li>
                                    <li><a href="!#">모리셔스</a></li>
                                    <li><a href="!#">코타키나발루</a></li>
                                    <li><a href="!#">호주</a></li>
                                </ul>
                            </div>
                            <div className="content-box">
                                <ul className='on'>
{
                                    state.slide741.map((item, idx)=>{
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
                                    state.slide742.map((item, idx)=>{
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
                                    state.slide743.map((item, idx)=>{
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
                                    state.slide744.map((item, idx)=>{
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
                                    state.slide745.map((item, idx)=>{
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
                                    state.slide746.map((item, idx)=>{
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
                                <h3>상품 더보기<img src="./img/sub7/icon_arrow.png" alt="" /></h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

