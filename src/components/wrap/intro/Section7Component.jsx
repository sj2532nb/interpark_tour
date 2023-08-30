import React from 'react';
import './scss/section7.scss';

export default function Section7Component(){
    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>여행 LIVE</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <figure>
                                    <img src="./img/intro/i601.avif" alt="" />
                                </figure>
                                <div>
                                    <h4>[경기/인천 수영장호텔특집] 최대 72% 할인</h4>
                                    <p>영상으로 보고 특가로 체크인!</p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img src="./img/intro/i602.avif" alt="" />
                                </figure>
                                <div>
                                    <h4>[경기/인천 수영장호텔특집] 최대 72% 할인</h4>
                                    <p>영상으로 보고 특가로 체크인!</p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img src="./img/intro/i603.avif" alt="" />
                                </figure>
                                <div>
                                    <h4>[경기/인천 수영장호텔특집] 최대 72% 할인</h4>
                                    <p>영상으로 보고 특가로 체크인!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};