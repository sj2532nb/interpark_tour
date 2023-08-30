import React from 'react';
import './scss/section8.scss';

export default function Section8Component(){
    return (
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>유용한 정보</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <div>
                                        <h4>PC, 모바일 톡집사</h4>
                                        <span>
                                            PC, 모바일에서
                                            <br />
                                            톡집사를 만나보세요!
                                            <img src="./img/intro/thum_talkButler.svg" alt="" />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div>
                                        <h4>면세/환전/렌트/쇼핑</h4>
                                        <span>
                                            여행 준비 마무리는
                                            <br />
                                            여기에서!
                                            <img src="./img/intro/thum_taxFree.svg" alt="" />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div>
                                        <h4>여행자 보험</h4>
                                        <span>
                                            해외 여행 준비의
                                            <br />
                                            필수 아이템!
                                            <img src="./img/intro/thum_insurance.svg" alt="" />
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="!#">
                                    <div>
                                        <h4>쏠쏠한 카드 혜택</h4>
                                        <span>
                                            다양한 카드 혜택을
                                            <br />
                                            확인해 보세요!
                                            <img src="./img/intro/thum_hot.svg" alt="" />
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};