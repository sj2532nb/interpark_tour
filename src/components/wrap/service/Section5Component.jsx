import React from 'react';
import './scss/section5.scss';

export default function Section5Component(){
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <h3><img src="./img/service/h3oneToneconsult_2.gif" alt="" /></h3>
                            <img src="./img/service/visualCustomer02_1.gif" alt="" />
                        </div>
                        <div className="bottom-box">
                            <h4><img src="./img/service/btn_oneTone_2.gif" alt="" /></h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th><span><img src="./img/service/txtNum.gif" alt="" /></span></th>
                                        <th><span><img src="./img/service/txtDistribute.gif" alt="" /></span></th>
                                        <th><span><img src="./img/service/txtInfortit.gif" alt="" /></span></th>
                                        <th><span><img src="./img/service/txtId.gif" alt="" /></span></th>
                                        <th><span><img src="./img/service/txtRecord.gif" alt="" /></span></th>
                                        <th><span><img src="./img/service/txtProcess.gif" alt="" /></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={6}>검색 결과가 없습니다.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="page-btn-box">
                                <a href="!#"><img src="./img/service/pagingFirst.gif" alt="" /></a>
                                <a href="!#" className='on'>1</a>
                                <a href="!#"><img src="./img/service/pagingLast.gif" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};