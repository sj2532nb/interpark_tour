import React from 'react';
import './scss/mypage.scss';
import change from './img/mypage/change.png';
import heart from './img/mypage/heart.png';
import loginstate from './img/mypage/loginstate.png';
import dropout from './img/mypage/dropout.png';
import update from './img/mypage/update.png';

export default function MypageComponent(){
    return (
        <div id='mypage'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="up-box">
                            <div className='heart-img'><img src={heart} alt="" /></div>
                            <h4>김도희님은 현재 <span>WELCOME</span> 등급입니다.</h4>
                        </div>              
                        <div className="down-box">
                            <a href="!#">등급별 혜택보기</a>
                        </div>
                    </div>
                    <div className="content">
                        <div className="line1">
                            <div className="box">
                                <a href="!#">
                                    <img src={update} alt="" />
                                    <div className="right-txt">
                                        <h6>회원정보수정</h6>
                                        <p>본인인증, 휴대폰번호 등</p>
                                        <p>내 정보를 수정하세요.</p>
                                    </div>
                                </a>

                            </div>

                            <div className="box">
                                <a href="!#">
                                    <img src={change} alt="" />
                                    <div className="right-txt">
                                        <h6>비밀번호변경</h6>
                                        <p>주기적인 변경으로</p>
                                        <p>내 정보를 보호하세요.</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="line2">
                            <div className="box">
                                <a href="!#">
                                    <img src={loginstate} alt="" />
                                    <div className="right-txt">
                                        <h6>로그인관리</h6>
                                    </div>
                                </a>

                            </div>
                            <div className="box">
                                <a href="!#">
                                    <img src={dropout} alt="" />
                                    <div className="right-txt">
                                        <h6>회원탈퇴</h6>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
