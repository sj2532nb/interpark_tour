import React from 'react';
import './scss/section2.scss';

export default function Section2Component(){

    const [state, setState] = React.useState({
        isSearch1: false,
        isSearch2: false
    });

    const onClickSearch1=(e)=>{
        e.preventDefault();
        let isSearch1=false;
        if(state.isSearch1===true){
            isSearch1=false;
        }
        else if(state.isSearch1===false){
            isSearch1=true;
        }
        setState({
            ...state,
            isSearch1: isSearch1,
            isSearch2: false
        })
    }

    const onClickSearch2=(e)=>{
        e.preventDefault();
        let isSearch2=false;
        if(state.isSearch2===true){
            isSearch2=false;
        }
        else if(state.isSearch2===false){
            isSearch2=true;
        }
        setState({
            ...state,
            isSearch1: false,
            isSearch2: isSearch2
        })
    }
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <h3><img src="./img/service/h3Announcement.gif" alt="" /></h3>
                            <img src="./img/service/visualCustomer01.gif" alt="" />
                        </div>
                        <div className="notice-search-box">
                            <div className="search1-box">
                                <img src="./img/service/txtSection.gif" alt="" />
                                <div>
                                    <span onClick={onClickSearch1}>
                                        <input type="button" name='search1' id='search1' value="전체"/>
                                        <img src="./img/service/basicSelectsBtn.gif" alt="" />
                                    </span>
                                    {        
                                        state.isSearch1 && (      
                                        <ul>
                                            <li><a href="!#">전체</a></li>
                                            <li><a href="!#">당첨자발표</a></li>
                                            <li><a href="!#">투어공지</a></li>
                                            <li><a href="!#">해외항공</a></li>
                                            <li><a href="!#">국내항공</a></li>
                                            <li><a href="!#">해외숙소</a></li>
                                            <li><a href="!#">국내숙소</a></li>
                                            <li><a href="!#">패키지</a></li>
                                            <li><a href="!#">허니문</a></li>
                                            <li><a href="!#">제주/내륙테마</a></li>
                                            <li><a href="!#">공통공지</a></li>
                                        </ul>
                                    )
                                }
                                </div>
                            </div>
                            <div className="search2-box">
                                <img src="./img/service/txtSearch.gif" alt="" />
                                <div>
                                    <span onClick={onClickSearch2}>
                                        <input type="button" name='search2' id='search2' value="제목"/>
                                        <img src="./img/service/basicSelectsBtn.gif" alt="" />
                                    </span>
                                    {        
                                        state.isSearch2 && (   
                                        <ul>
                                            <li><a href="!#">제목</a></li>
                                            <li><a href="!#">내용</a></li>
                                        </ul>
                                        )
                                    }
                                </div>
                                <input type="text" name='search3' id='search3' />
                                <a href="!#"><img src="./img/service/bulLook.gif" alt="" /></a>
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th><span><img src="./img/service/txtNum.gif" alt="" /></span></th>
                                    <th><span><img src="./img/service/txtDistribute.gif" alt="" /></span></th>
                                    <th><span><img src="./img/service/txtTit.gif" alt="" /></span></th>
                                    <th><span><img src="./img/service/txtRecord.gif" alt="" /></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12336</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">80일간의 세계일주 퀴즈 7편 방콕 정답 및 당첨자 발표</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12335</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">[여행TV] 5/25 UH FLAT 브랜드 특집 라이브방송 이...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12333</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">80일간의 세계일주 퀴즈 6편 대만 정답 및 당첨자 발표 공지...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12332</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">[여행] 5월 국내여행, 해외여행 후기 당첨자 발표</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12331</td>
                                    <td>투어공지</td>
                                    <td><a href="!#">2023년 6월 6일(화) 현충일 해외/국내 여행 및 항공 영...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12330</td>
                                    <td>해외항공</td>
                                    <td><a href="!#">[중요] 태풍에 따른 오키나와 지역 결항 및 지연 안내</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12329</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">80일간의 세계일주 퀴즈 5편 시드니 정답 및 당첨자 발표</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12327</td>
                                    <td>국내항공</td>
                                    <td><a href="!#">[공지]국내항공 결항 및 지연시 대처 방법 안내</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12325</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">80일간의 세계일주 퀴즈 4편 괌 정답 및 당첨자 발표 공지드...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12324</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">[여행TV] 5/18 경기 인천 수영장 호텔 특집 라이브방송 ...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12323</td>
                                    <td>해외항공</td>
                                    <td><a href="!#">[중요] 태풍에 따른 괌/사이판 지역 결항 및 지연 안내</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12322</td>
                                    <td>투어공지</td>
                                    <td><a href="!#">2023년 5월 29일(월) 대체 연휴 해외/국내 여행 및 항...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12321</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">[인터파크LIVE] 5/16 후쿠오카 99특가 라이브방송 이벤...</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12320</td>
                                    <td>국내항공</td>
                                    <td><a href="!#">[중요] 국내선 제주항공 시스템 점검안내</a></td>
                                    <td>23/06/02</td>
                                </tr>
                                <tr>
                                    <td>12319</td>
                                    <td>당첨자발표</td>
                                    <td><a href="!#">80일간의 세계일주 퀴즈 3편 삿포로 정답 및 당첨자 발표</a></td>
                                    <td>23/06/02</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="page-btn-box">
                            <a href="!#"><img src="./img/service/pagingFirst.gif" alt="" /></a>
                            <a href="!#" className='on'>1</a>
                            <a href="!#">2</a>
                            <a href="!#">3</a>
                            <a href="!#">4</a>
                            <a href="!#">5</a>
                            <a href="!#">6</a>
                            <a href="!#">7</a>
                            <a href="!#">8</a>
                            <a href="!#">9</a>
                            <a href="!#">10</a>
                            <a href="!#"><img src="./img/service/pagingNext.gif" alt="" /></a>
                            <a href="!#"><img src="./img/service/pagingLast.gif" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};