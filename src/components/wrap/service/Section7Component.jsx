import React from 'react';
import './scss/section7.scss';

export default function Section7Component(){

    const [state, setState] = React.useState({
        isTerminal1: true,
        isTerminal2: false,
        isDomestic: false
    });

    const onClickTerminal1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isTerminal1:true,
            isTerminal2: false,
            isDomestic: false
        })
    }

    const onClickTerminal2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isTerminal1:false,
            isTerminal2: true,
            isDomestic: false
        })
    }
    const onClickDomestic=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isTerminal1:false,
            isTerminal2: false,
            isDomestic: true
        })
    }



    return (
        <section id="section7-1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <h3><img src="./img/service/h3Meeting.gif" alt="" /></h3>
                            <img src="./img/service/visualMeetingn_n.jpg" alt="" />
                        </div>
                        <div className="bottom-box">
                            <div className="btn-box">
                                <ul>
                                    <li className={`${state.isTerminal1?' on':''}`} ><a onClick={onClickTerminal1} href="!#">해외여행(제1터미널)</a></li>
                                    <li className={`${state.isTerminal2?' on':''}`} ><a onClick={onClickTerminal2} href="!#">해외여행(제2터미널)</a></li>
                                    <li className={`${state.isDomestic?' on':''}`} ><a onClick={onClickDomestic} href="!#">국내여행</a></li>
                                </ul>
                                <img src="./img/service/txtConfirm.gif" alt="" />
                            </div>
                            <div className={`content-box terminal1 ${state.isTerminal1?' on':''}`}>
                                <div className="row1">
                                    <h4>인천국제공항 제1여객터미널<span><a href="!#"><img src="./img/service/btnWayAirport.gif" alt="" /></a><a href="!#"><img src="./img/service/btnCounter.gif" alt="" /></a></span></h4>
                                    <img src="./img/service/airport_mapn.gif" alt="" />
                                    <em>* 해외여행 : 출발 2시간 30분전 인천공항 국제선 청사 3층 해당 미팅 장소로 도착하시어 샌딩업무 담당자에게 연락주시기 바랍니다.</em>
                                    <em>* 정확한 미팅 장소는 출발 전 담당자에게 재확인 하셔야 합니다.</em>
                                </div>
                                <div className="row2">
                                    <h4>카운터 별 수속 항공사 안내</h4>
                                    <h5>A카운터 수속항공사</h5>
                                    <p>
                                        운영시간: 06시 00분~19시 30분
                                        <br />
                                        <span>아시아나 항공(OZ)</span>
                                        <br />
                                        <br />
                                        **06시 이전 미팅은 서편에서만 가능합니다.
                                    </p>
                                    <h5>N카운터 수속항공사</h5>
                                    <p>
                                        운영시간: 04시 00분~19시 30분
                                        <br />
                                        RS, ZE, LJ, TW, 7C, VN, VJ, 5J, PR, 8Y, Z2, D7, XJ, TG, TK, LO, EY, BA, LH, EK, ET, QR, AC, CX, HA, UA, AA, BI, SQ, UO, MH, SC, CA, CZ, MU, GS, 9C, FM, S7, QV, OM, 3U, ZA, TR, ZH, BR, KC, NX, AI, KJ, HZ, HY, B7, QW, 2P, MM, AY, HX
                                        <span>공동 운항 편은 항공편에 따라 T1,T2로 나눠 수속 할 수 있으니 전자항공권을 꼭 확인하여 주시기 바랍니다.</span>
                                    </p>
                                </div>
                            </div>
                            <div className={`content-box terminal2 ${state.isTerminal2?' on':''}`}>
                                <div className="row1">
                                    <h4>인천국제공항 제2여객터미널<span><a href="!#"><img src="./img/service/btnWayAirport.gif" alt="" /></a><a href="!#"><img src="./img/service/btnCounter.gif" alt="" /></a></span></h4>
                                    <img src="./img/service/airport_mapn_02.gif" alt="" />
                                    <em>* 해외여행 : 출발 2시간 30분전 인천공항 국제선 청사 3층 해당 미팅 장소로 도착하시어 샌딩업무 담당자에게 연락주시기 바랍니다.</em>
                                    <em>* 정확한 미팅 장소는 출발 전 담당자에게 재확인 하셔야 합니다.</em>
                                </div>
                                <div className="row2">
                                    <h4>카운터 별 수속 항공사 안내</h4>
                                    <h5>A카운터 수속항공사</h5>
                                    <p>KE 프리미엄</p>
                                    <h5>B카운터 수속항공사</h5>
                                    <p>KE 모닝캄</p>
                                    <h5>C카운터 수속항공사</h5>
                                    <p>KE 일반석</p>
                                    <h5>D카운터 수속항공사</h5>
                                    <p>셀프존</p>
                                    <h5>E카운터 수속항공사</h5>
                                    <p>셀프존</p>
                                    <h5>F카운터 수속항공사</h5>
                                    <p>DL, AF, KL</p>
                                    <h5>G카운터 수속항공사</h5>
                                    <p>KE 일반석, 백드롭</p>
                                    <h5>H카운터 수속항공사</h5>
                                    <p>KE 단체</p>
                                    <h4>제 2여객터미널 취항 항공사</h4>
                                    <p>
                                        대한항공, 델타항공, 에어프랑스, KLM네덜란드항공, 아에로맥시코(AM), 알이탈리아(AZ), 중화항공(CI),
                                        <br />
                                        가루다인도네시아항공(GA), 샤먼(하문)항공(MF), 아에로플로트 러시아항공(SU), 체코항공(OK)
                                    </p>
                                    <br />
                                    <strong>※ 공동운항편은 탑승 항공사 터미널로 확인 바랍니다.※</strong>
                                </div>
                            </div>
                            <div className={`content-box domestic ${state.isDomestic?' on':''}`}>
                                <div className="row2">
                                    <h4>제주도 여행</h4>
                                    <p><strong>항공권 :</strong><span> 출발 1시간전 해당공항 항공사카운터에서 예약번호/신분증 확인 후 탑승권 수령</span></p>
                                    <p><strong>버스관광 :</strong><span> 제주공항 도착 후 기사/가이드 미팅</span></p>
                                    <p><strong>자유여행 :</strong><span> 제주공항 도착 후 각 렌터카 차고지에서 렌터카 인수</span></p>
                                    <p><strong>미팅장소는 출발 2일전 안내문자 개별 발송 진행</strong></p>
                                    <h4>내륙테마 여행</h4>
                                    <h5>버스 이용시</h5>
                                    <p><strong>서울출발 :</strong><span> 시청역 8번 출구 앞 / 교대역 9번 출구 앞</span></p>
                                    <h5>기차 이용시</h5>
                                    <p><strong>서울역 :</strong><span> 3층 불고기브라더스 앞</span></p>
                                    <p><strong>용산/청량리역 :</strong><span> 대합실 여행센터 앞</span></p>
                                    <p><span>미팅장소는 출발 1일전 안내문자 개별 발송 진행</span></p>
                                    <p><strong>제주/내륙테마 대표번호 : 02-3479-4235</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};