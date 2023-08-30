import React from 'react';
import './scss/section6.scss';

export default function Section6Component(){
    return (
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <h3><img src="./img/service/h3Phone.gif" alt="" /></h3>
                            <img src="./img/service/visualCustomer04.gif" alt="" />
                        </div>
                        <div className="middle-box">
                            <h4><img src="./img/service/teltitle_air00.gif" alt="" /></h4>
                            <figure>
                                <img src="./img/service/airTel_maininfo_2.gif" alt="" />
                                <a className='link1' href="!#"></a>
                                <a className='link2' href="!#"></a>
                                <a className='link3' href="!#"></a>
                            </figure>
                        </div>
                        <div className="bottom-box">
                            <img src="./img/service/telimg_all.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};