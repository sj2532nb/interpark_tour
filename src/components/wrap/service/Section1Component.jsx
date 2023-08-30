import React from 'react';
import './scss/section1.scss';

export default function Section1Component(){
    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <a href="!#">
                            <img src="./img/service/tabCustomer01On.gif" alt="" />
                        </a>
                    </div>
                    <div className="content">
                        <div className="row1">
                            <div className="row1-left">
                                <img src="./img/service/bannerMain01n.jpg" alt="" />
                            </div>
                            <div className="row1-right">
                                <div className="notice-title">
                                    <img src="./img/service/titNotice.gif" alt="" />
                                    <a href="!#"><img src="./img/service/btn_more.gif" alt="" /></a>
                                </div>
                                <ul className="notice-content">
                                    <li><a href="!#">80일간의 세계일주 퀴즈...</a></li>
                                    <li><a href="!#">[여행TV] 5/18 경...</a></li>
                                    <li><a href="!#">[중요] 태풍에 따른 괌...</a></li>
                                    <li><a href="!#">2023년 5월 29일(...</a></li>
                                    <li><a href="!#">[인터파크LIVE] 5/...</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="row2-left">
                                <h4><img src="./img/service/titOftenQna.gif" alt="" /></h4>
                                <div className="FAQ-search-box">
                                    <input type="text" name='FAQ-search' id='FAQSearch' /><img src="./img/service/btnSearchView.gif" alt="" /><span>예) 결제, 예약취소, 해외호텔</span>
                                </div>
                                <div className="FAQ-best-box">
                                    <img src="./img/service/imgQuestionBoxT.gif" alt="" />
                                    <div className="FAQ-box">
                                        <div className="FAQ-title">
                                            <img src="./img/service/TitQuestion5.gif" alt="" />
                                            <a href="!#"><img src="./img/service/btn_more.gif" alt="" /></a>
                                            <img src="./img/service/imgFaq.gif" alt="" />
                                        </div>
                                        <div className="FAQ-content">
                                            <ul>
                                                <li><img src="./img/service/bulNum01.gif" alt="" /><strong>[해외여행]</strong><a href="!#">여권 관련 문의</a></li>
                                                <li><img src="./img/service/bulNum02.gif" alt="" /><strong>[해외호텔]</strong><a href="!#">예약을 하고 난 후 며칠 뒤 다시 보니 금액이 떨...</a></li>
                                                <li><img src="./img/service/bulNum03.gif" alt="" /><strong>[해외호텔]</strong><a href="!#">호텔 추천이나 견적을 받을 수 있나요?</a></li>
                                                <li><img src="./img/service/bulNum04.gif" alt="" /><strong>[해외호텔]</strong><a href="!#">법인카드로 결제할 수 있나요?</a></li>
                                                <li><img src="./img/service/bulNum05.gif" alt="" /><strong>[해외호텔]</strong><a href="!#">호텔에 짐을 맡길 수 있나요?</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src="./img/service/imgQuestionBoxB.gif" alt="" />
                                </div>
                            </div>
                            <div className="row2-right">
                                <h4><img src="./img/service/titQuestion.gif" alt="" /></h4>
                                <a href="!#"><img src="./img/service/banner1Counsel_2.gif" alt="" /></a>
                                <a href="!#"><img src="./img/service/bannerFit_1_2.gif" alt="" /></a>
                                <a href="!#"><img src="./img/service/bannerCallCounsel.gif" alt="" /></a>
                            </div>
                        </div>
                        <div className="row3">
                            <h4><img src="./img/service/titService.gif" alt="" /></h4>
                            <a href="!#"><img src="./img/service/bannerService_110713.gif" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};