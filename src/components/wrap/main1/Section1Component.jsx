import React from 'react';
import DalComponent from '../modal/DalComponent';
import $ from 'jquery';

export default function Section1Component(){
    const [showCalendar, setShowCalendar] = React.useState(false);

    const dateSubmit = (date) => {

        const resultDate = document.getElementById('date');
        resultDate.innerText = date;
        resultDate.style.fontSize = '19px';
        resultDate.style.letterSpacing = '-1px';
        resultDate.style.lineHeight = '1.5';
        resultDate.style.color = '#000';
      };

    
    

    const onClickCalendar=(e)=>{
        e.preventDefault();
        setShowCalendar(true);
        $('#date').text('날짜를 선택해주세요').css({fontSize:22, lineHeight:1});

    }

    const onCloseCalendar=()=>{
        setShowCalendar(false);
    }
    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="back-image">
                        <div className="back-gap">
                            <h4>공지사항</h4>
                            <button>공지사항 더보기<img src="./img/main1/icon-arrow-right-black.svg" alt="" /></button>
                        </div>

                        <div className="ticketing">
                            <div className="ticketing-gap">
                                <div className="up">
                                    <div className="btn">
                                        <button>왕복</button>
                                        <button>편도</button>
                                        <button>다구간</button>
                                    </div>
                                    <span><input type="checkbox" /> 직항만 검색</span>                            
                                </div>
                                <div className="down">
                                    <div className="start-end">
                                        <div className="start">
                                            <h4>출발</h4>
                                            <a href="!#">도시, 공항명 입력</a>
                                        </div>  
                                        <a href="!#" className='airplane'>
                                            <img src="./img/main1/icon-circle.png" alt="" />
                                            <img src="./img/main1/icon-airplane.png" alt="" />                                                
                                        </a> 
                                        <div className="arrive">
                                            <h4>도착</h4>
                                            <a href="!#">도시, 공항명 입력</a>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <h4>출발일 - 도착일</h4>
                                        <a href="!#" id="date" onClick={onClickCalendar} >날짜를 선택해주세요</a>
                                        {/* <input  id="date" onClick={onClickCalendar} />날짜를 입력해주세요 */}
                                        
                                        {
                                            showCalendar && <DalComponent dateSubmit={dateSubmit} onCloseCalendar={onCloseCalendar}/>
                                        }
                                    </div>
                                    <div className="people">
                                        <h4>인원, 좌석등급</h4>
                                        <a href="!#">1명, 좌석전체</a>
                                    </div>
                                    <div className="btn-box">
                                        <button>검색하기</button>
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