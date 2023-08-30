import React from 'react';

export default function Section8Component(){
    return (
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>인터파크 항공 고객센터</h3>    
                    </div>
                    <div className="content">
                        <div className="customer">
                            <div className="box1">
                                <div className="b1">
                                    <h5>운영시간</h5>
                                    <h6>평일 : 09:00 - 17:00</h6>
                                    <h6>주말,공휴일 휴무</h6>
                                </div>
                                <div className="b1">
                                    <h5>안내전화</h5>
                                    <h6>02-3479-4340 (국내)</h6>
                                    <h6>02-3479-4399 (해외)</h6>
                                </div>

                            </div>
                            <div className="box2">
                                <div className="question">
                                    <img className='butler' src="./img/main1/icon-talk-butler-large.png" alt="" />
                                    <div className="text">
                                        <h5 className='txt-que'>톡집사 문의</h5>
                                        <h6>전화가 어렵다면</h6>
                                        <h6>톡집사에게 톡!</h6>
                                    </div>
                                    <span className='butler-span'></span>
                                </div>
                                <div className="question">
                                    <img className='img-que' src="./img/main1/icon-question.png" alt="" />
                                    <div className="text">
                                        <h5>자주 묻는 질문</h5>
                                        <h6>궁금하신 사항을</h6>
                                        <h6>빠르게 확인하세요.</h6>
                                    </div>
                                    <span></span>
                                </div>
                            </div>
                            <div className="box3">
                                <div className="reservation1">
                                    <h5>예약</h5>
                                    <a href="!#">해외숙소</a>
                                    <a href="!#">투어/티켓</a>
                                    <a href="!#">해외렌터카</a>
                                    <a href="!#">TOP여행지</a>
                                </div>
                                <div className="reservation2">                                    
                                    <a href="!#">여행자보험</a>
                                    <a href="!#">데이터/로밍</a>
                                    <a href="!#">수하물보호</a>
                                    <a href="!#">면세점</a>
                                </div>
                                <div className="group">
                                    <h5>단체</h5>
                                    <a href="!#">단체항공 문의</a>
                                    <a href="!#">고객상담/맞춤 견적</a>
                                    <a href="!#">단체/법인여행</a>
                                </div>
                            </div>
                            
                        </div>
                        <p>* 국내 항공권의 경우 주말,공휴일 및 업무시간외에는 항공사를 통해 빠른 문의 가능합니다. <a href="!#">항공사 안내 </a></p>
                        <p>* 해외 항공권 구매고객은 전세계 어디에서든지 개별 번호를 통한 긴급상담이 가능합니다. <a href="!#">긴급상담 안내 </a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};