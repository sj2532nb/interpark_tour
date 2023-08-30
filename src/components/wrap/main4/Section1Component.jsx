import React from 'react';
import $ from 'jquery';

export default function Section1Component(){

    React.useEffect(()=>{
        $('.search-box a').click(function(e) {
            e.preventDefault(); 
            let linkText = $(this).text(); 
            $('.search-box input').val(linkText); 
        });
    })
    

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                <div className='search-box'>
                        <label><input autoComplete='off' type="text" name='search' id='search' placeholder='여행할 도시나 상품을 검색해 보세요.' /></label>
                        <div className="search-container">
                            <div className="search-gap">
                                <div className="search-content">
                                    <div className="search-top-box">
                                        <h3>인기 여행지</h3>
                                        <ul>
                                            <li><a href="!#">방콕</a></li>
                                            <li><a href="!#">다낭</a></li>
                                            <li><a href="!#">파리</a></li>
                                            <li><a href="!#">세부</a></li>
                                            <li><a href="!#">싱가포르</a></li>
                                            <li><a href="!#">런던</a></li>
                                            <li><a href="!#">타이베이</a></li>
                                            <li><a href="!#">제주</a></li>
                                        </ul>
                                    </div>
                                    <div className="search-bottom-box">
                                        <h3>인기상품</h3>
                                        <ul>
                                            <li><a href="!#">[파리출발] 몽생미셸 1박2일 투어</a></li>
                                            <li><a href="!#">후쿠오카 버스 투어 1일 (다자이후/유후인/ 벳부)</a></li>
                                            <li><a href="!#">[방콕] 차오프라야 프린세스 디너 크루즈 티켓</a></li>
                                            <li><a href="!#">[대만] 버스투어 예스진지 + 스펀폭포</a></li>
                                            <li><a href="!#">[다낭] 바나힐 입장권(케이블카) & 왕복차량</a></li>
                                            <li><a href="!#">[바르셀로나] 디테일 가우디 핵심 워킹투어</a></li>
                                            <li><a href="!#">괌 돌핀 크루즈 (호텔 픽업&드랍 / 회&음료 포함)</a></li>
                                            <li><a href="!#">세부 남부 (오슬롭+투말록+캐녀닝) 정복 단독투어</a></li>
                                            <li><a href="!#">코타키나발루 선셋 패들보트 투어</a></li>
                                            <li><a href="!#">[제주] 아르떼뮤지엄 입장권</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};