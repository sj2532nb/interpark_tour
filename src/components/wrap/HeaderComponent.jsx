import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import $ from 'jquery';

export default function HeaderComponent({setIsIntroFn}){
    const [state, setState] = React.useState({
        isFixed: false     
    });

    React.useEffect(()=>{        

        const row3Top = document.querySelector('#header .header-3').offsetTop;
        const inputBox1 = $('.input-box1');
        const inputBox2 = $('.input-box2');
 
        window.addEventListener('scroll', function(){
             let isFixed = false;
             if( window.scrollY>=row3Top ){
                 isFixed = true;
                 inputBox1.css({marginTop:0});
                 inputBox2.css({top:100});
             }
             else{
                 isFixed = false;
                 inputBox1.css({marginTop:30});
                 inputBox2.css({top:0});
             }
             setState({
                 ...state,
                 isFixed: isFixed
             });
        })
 
     },[]);

    //상단 검색 상자 이벤트

    React.useEffect(()=>{
        const input1 = $('.input1');
        const input2 = $('.input2');
        const inputBox1 = $('.input-box1');
        const inputBox2 = $('.input-box2');
        const childContent = $('.input-box2 li');

        const input2Close = (e) => {
            e.preventDefault();
            if (!inputBox2.is(e.target) && inputBox2.has(e.target).length === 0) {
                inputBox2.fadeOut(0);
                inputBox1.fadeIn(200);
                
            }
        };

        
        input1.on({
            click(e){
                e.preventDefault();                
                inputBox1.fadeOut(0,)
                inputBox2.fadeIn(200, ()=>{input2.focus()})

                $(document).off('click', input2Close);
                setTimeout(()=>{
                    $(document).on('click', input2Close);    
                },0)
            }
        });        
        
        input2.on({
            change(){
                const value = input2.val();
            input1.val(value);
            }
        })

        childContent.on({
            click(){
                let strongText = $(this).find('strong').text();
                console.log(strongText);
                input2.val(strongText);
                input1.val(strongText);
                inputBox2.fadeOut(0);
                inputBox1.fadeIn(200, ()=>{input1.focus()});
            }
        })






        inputBox2.children().off('click');
        inputBox2.fadeOut(0);

        return () => {
            $(document).off('click', input2Close);
        };
    },[])

    
    const onClickQuickMenuShow=(e)=>{
        e.preventDefault();
        setIsIntroFn(true);
    }

    const onClickQuickMenuHide=(e)=>{
        e.preventDefault();
        setIsIntroFn(false);
    }

    return (
        <>

            <header id="header">
                <div className="container">
                    <div className="back-color">
                        <div className="gap gap1">
                            <div className="header-1">
                                <div className="sign">                                    
                                    <span /* onClick={onClickQuickMenuHide} */><Link to="http://localhost:8080/jsp/interpark/interpark/interpark_signin.jsp">로그인</Link></span>
                                    <span onClick={onClickQuickMenuHide}><Link to="/Agreement">회원가입</Link></span>
                                    <span onClick={onClickQuickMenuHide}><Link to="mypage">마이페이지</Link></span>
                                    <span onClick={onClickQuickMenuHide}><Link to="/service">고객센터</Link></span>
                                    <span onClick={onClickQuickMenuHide}><a href="!#">여행정보</a></span>
                                    <span onClick={onClickQuickMenuHide}><a href="!#">법인/단체여행</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`gap gap2${state.isFixed?' on':''}`}>
                        <div className="header-2">
                            <div className="left">
                            <span onClick={onClickQuickMenuShow}><Link to="/intro" className='interpark'><img src="./img/header/interpark-tour.png" alt="" /></Link></span>
                                <div className="input-box1">
                                    <input className='input1' type="text" placeholder='해외여행 1등은 크다, 삿포로 자유여행 4일 40만원대~' />                                         
                                    <a href="!#" className='search'><img src="./img/header/btn_search.svg" alt="" /></a> 
                                </div>
                                <div className="input-box2">
                                    <input className='input2' type="text" placeholder='여행할 도시나 상품을 검색해 보세요.' />                                         
                                    <div className="input2-child">
                                        <div className="child-title">
                                            <h3>인기검색어</h3>
                                            <p>2023.06.06 17:00 기준</p>
                                        </div>
                                        <div className="child-content">
                                            <ul>
                                                <li><h4><i>1</i><strong>세일페스타</strong></h4><span>ㅡ</span></li>
                                                <li><h4><i>2</i><strong>항공권</strong></h4><span>ㅡ</span></li>
                                                <li><h4><i>3</i><strong>오사카</strong></h4><span><img src="./img/header/icon_rank_new.png" alt="" /></span></li>
                                                <li><h4><i>4</i><strong>세부</strong></h4><span>ㅡ</span></li>
                                                <li><h4><i>5</i><strong>여수</strong></h4><span><img src="./img/header/icon_rank_up.png" alt="" />1</span></li>
                                                <li><h4><i>6</i><strong>나트랑</strong></h4><span><img src="./img/header/icon_rank_down.png" alt="" />3</span></li>
                                                <li><h4><i>7</i><strong>속초</strong></h4><span><img src="./img/header/icon_rank_down.png" alt="" />2</span></li>
                                                <li><h4><i>8</i><strong>제주도</strong></h4><span><img src="./img/header/icon_rank_down.png" alt="" />1</span></li>
                                                <li><h4><i>9</i><strong>부산</strong></h4><span><img src="./img/header/icon_rank_up.png" alt="" />1</span></li>
                                                <li><h4><i>10</i><strong>쏠비치</strong></h4><span><img src="./img/header/icon_rank_down.png" alt="" />2</span></li>
                                            </ul>
                                        </div>

                                    </div>
                                    
                                    <a href="!#" className='search'><img src="./img/header/btn_search.svg" alt="" /></a> 
                                </div>
                                
                                
                            </div>
                            <div className="right">
                                <a href="!#" className='slide-box'><img src="./img/header/638174125964970536.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className={`gap gap3${state.isFixed?' on':''}`}>
                        <div className="header-3">
                            <div className="list">                                
                                <span onClick={onClickQuickMenuShow}><Link to="/main1">항공</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main2">국내숙소</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main3">해외숙소</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main4">투어·티켓</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main5">해외패키지</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main6">국내</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main7">허니문</Link></span>
                                <span onClick={onClickQuickMenuShow}><Link to="/main8">골프</Link></span>
                            </div>
                            <div className="sale">
                                <a href="!#">여행혜택존<img src="./img/header/banner-travel.svg" alt="" /></a>
                                <a href="!#">1등특가<img src="./img/header/banner-trophy.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        
        </>
        

    );
};