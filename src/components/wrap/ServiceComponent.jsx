import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Section1Component from './service/Section1Component';
import Section2Component from './service/Section2Component';
import Section3Component from './service/Section3Component';
// import Section4Component from './service/Section4Component';
import Section5Component from './service/Section5Component';
import Section6Component from './service/Section6Component';
import Section7Component from './service/Section7Component';
import Section8Component from './service/Section8Component';
import Section9Component from './service/Section9Component';
import Section10Component from './service/Section10Component';
import './scss/service.scss';

export default function ServiceComponent(){

    const [state, setState] = React.useState({
        isService1: true,
        isService2: false,
        isService3: false,
        isService5: false,
        isService6: false,
        isService7: false,
        isService8: false,
        isService9: false,
        isService10: false
    });

    const onClickService1Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: true,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: false
        })
    }
    const onClickService2Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: true,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: false
        })
    }
    const onClickService3Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: true,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: false
        })
    }
    const onClickService5Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: true,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: false        
        })
    }
    const onClickService6Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: true,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: false    
        })
    }
    const onClickService7Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: true,
            isService8: false,
            isService9: false,
            isService10: false    
        })
    }
    const onClickService8Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: true,
            isService9: false,
            isService10: false    
        })
    }
    const onClickService9Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: true,
            isService10: false    
        })
    }
    const onClickService10Open=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isService1: false,
            isService2: false,
            isService3: false,
            isService5: false,
            isService6: false,
            isService7: false,
            isService8: false,
            isService9: false,
            isService10: true
        })
    }

    const onClickServiceCall=(e)=>{
        e.preventDefault();
        alert('앱 선택을(를) 여시겠습니까?');
    }


    return (
        <div id="service">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <div className="left-top">
                                <a href="!#" onClick={onClickService1Open}>
                                    <img src="./img/service/leftTitCustomer_1.gif" alt="" />
                                </a>
                                <div>
                                    <ul>
                                        <li className={state.isService2?'on':''}>
                                            <a href="!#" onClick={onClickService2Open}>
                                            {state.isService2? (<img src="./img/service/leftMnA00On.gif" alt="" />):(<img src="./img/service/leftMnA00.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li className={state.isService3?'on':''}>
                                            <a href="!#" onClick={onClickService3Open}>
                                            {state.isService3? (<img src="./img/service/leftMnA01On.gif" alt="" />):(<img src="./img/service/leftMnA01.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li><Link to="/signin"><img src="./img/service/leftMnA22.gif" alt="" /></Link></li>
                                        <li className={state.isService5?'on':''}>
                                            <a href="!#" onClick={onClickService5Open}>
                                            {state.isService5? (<img src="./img/service/leftMnA02On.gif" alt="" />):(<img src="./img/service/leftMnA02.gif" alt="" />)}
                                            </a>
                                            </li>
                                        <li className={state.isService6?'on':''}>
                                            <a href="!#" onClick={onClickService6Open}>
                                            {state.isService6? (<img src="./img/service/leftMnA04On.gif" alt="" />):(<img src="./img/service/leftMnA04.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li className={state.isService7?'on':''}>
                                            <a href="!#" onClick={onClickService7Open}>
                                            {state.isService7? (<img src="./img/service/leftMnA08On.gif" alt="" />):(<img src="./img/service/leftMnA08.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li><a href="http://shop.interpark.com/ecenter/MainFAQ.do?_method=MainFAQ"><img src="./img/service/leftMnA19.gif" alt="" /></a></li>
                                        <li><a href="http://book.interpark.com/service/HelpDeskMain.do?_method=initial"><img src="./img/service/leftMnA20.gif" alt="" /></a></li>
                                        <li><a href="http://ticket.interpark.com/HelpDesk/HelpDeskMain.asp"><img src="./img/service/leftMnA21.gif" alt="" /></a></li>
                                        <li><a href="https://shop.interpark.com/gate/info/dispute_resolution.html"><img src="./img/service/leftMnA23.gif" alt="" /></a></li>
                                    </ul>
                                    <p><img src="./img/service/leftTitTheme.gif" alt="" /></p>
                                    <ul>
                                        <li className={state.isService8?'on':''}>
                                            <a href="!#" onClick={onClickService8Open}>
                                            {state.isService8? (<img src="./img/service/leftMnB00On.gif" alt="" />):(<img src="./img/service/leftMnB00.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li className={state.isService9?'on':''}>
                                            <a href="!#" onClick={onClickService9Open}>
                                            {state.isService9? (<img src="./img/service/leftMnB01On.gif" alt="" />):(<img src="./img/service/leftMnB01.gif" alt="" />)}
                                            </a>
                                        </li>
                                        <li className={state.isService10?'on':''}>
                                            <a href="!#" onClick={onClickService10Open}>
                                            {state.isService10? (<img src="./img/service/leftMnB02On.gif" alt="" />):(<img src="./img/service/leftMnB02.gif" alt="" />)}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="left-middle">
                                <a href="http://commevent.interpark.com/event/lounge/benefitinfo;jsessionid=66E2E737D27527DE64970383067C5B37.node3?view=pc"><img src="./img/service/btnBestMenn_1.gif" alt="" /></a>
                            </div>
                            <div className="left-bottom">
                                <span>
                                    <h3>대표 전화</h3>
                                    <a href="!#" onClick={onClickServiceCall}>1588-3443</a>
                                </span>
                                <ul>
                                    <li>평일 09:00~17:00</li>
                                    <li>(해외여행상담09:00~18:00)</li>
                                    <li>(허니문 상담 09:30~18:30)</li>
                                    <li>주말/공휴일 휴무</li>
                                    <li>점심시간 12:00~13:00</li>
                                </ul>
                                <ul>
                                    <li>국내숙소 상담</li>
                                    <li>평일/토/공휴일 09:00~18:00</li>
                                    <li>일요일 휴무</li>
                                    <li>점심시간 12:00~13:00</li>
                                </ul>
                            </div>
                        </div>
                        <div className="center">
                                {state.isService1 && <Section1Component/>}
                                {state.isService2 && <Section2Component/>}
                                {state.isService3 && <Section3Component/>}
                                {/* <Section4Component/> */}
                                {state.isService5 && <Section5Component/>}
                                {state.isService6 && <Section6Component/>}
                                {state.isService7 && <Section7Component/>}
                                {state.isService8 && <Section8Component/>}
                                {state.isService9 && <Section9Component/>}
                                {state.isService10 && <Section10Component/>}
                        </div>
                        <div className="right">
                            <ul>
                                <li><a href="!#"><img src="./img/service/quickBn_02.gif" alt="" /></a></li>
                                <li><a href="!#"><img src="./img/service/quickBn_03.gif" alt="" /></a></li>
                                <li><a href="!#"><img src="./img/service/quickBn_04.gif" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <a href="!#">
                    <img src="./img/main4/638201614670770313.jpg" alt="" />
                </a>
            </div>
        </div>
    );
};