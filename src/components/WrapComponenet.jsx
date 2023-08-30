import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import Main1Component from './wrap/Main1Component';
import Main2Component from './wrap/Main2Component';
import Main3Component from './wrap/Main3Component';
import Main4Component from './wrap/Main4Component';
import Main5Component from './wrap/Main5Component';
import Main6Component from './wrap/Main6Component';
import Main7Component from './wrap/Main7Component';
import Main8Component from './wrap/Main8Component';
import FooterComponent from './wrap/FooterComponent';
import AgreeComponent from './wrap/AgreeComponent';
import IntroComponent from './wrap/IntroComponent';
import SignupComponent from './wrap/SignupComponent';
import SigninComponent from './wrap/SigninComponent';
import Sec4Img1Component from './wrap/main3/Sec4Img1Component';
import Sec4Img2Component from './wrap/main3/Sec4Img2Component';
import Sec4Img3Component from './wrap/main3/Sec4Img3Component';
import Sec4Img4Component from './wrap/main3/Sec4Img4Component';
import Sec6Img1Component from './wrap/main3/Sec6Img1Component';
import Sec6Img2Component from './wrap/main3/Sec6Img2Component';
import Sec6Img3Component from './wrap/main3/Sec6Img3Component';
import Sec6Img4Component from './wrap/main3/Sec6Img4Component';
import Sub3Child1Component from './wrap/sub/Sub3Child1Component';
import Sub3Child2Component from './wrap/sub/Sub3Child2Component';
import Sub3Child3Component from './wrap/sub/Sub3Child3Component';
import Sub3Child4Component from './wrap/sub/Sub3Child4Component';
import Sub3Child5Component from './wrap/sub/Sub3Child5Component';
import Sub3Child6Component from './wrap/sub/Sub3Child6Component';
import Sub3Child7Component from './wrap/sub/Sub3Child7Component';
import Sub3Child8Component from './wrap/sub/Sub3Child8Component';
import ServiceComponent from './wrap/ServiceComponent';
import GotopComponent from './wrap/GotopComponent';
import MypageComponent from './wrap/MypageComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';


export default function WrapComponenet(){

        // 네비게이션
        const [isIntro, setIsIntro] = React.useState(true);

        // 헤더영역에서 라우터 링크이용 값을 변경한다.
        const setIsIntroFn=(z)=>{
            setIsIntro(z);
        }

        React.useEffect(()=>{
            setIsIntroFn();
        },[]);
    
        const [product, setProduct] = React.useState({
            key: 'INTERPARK_VIEW_PRODUCT',
            sign: false,
            getViewProduct: []
        });
    
        // 비구조화 === 구조분할할당
        const {getViewProduct, key, sign} = product;
    
    
        // 상품 클릭 이벤트 매개변수 들어옴
        const setViewProduct=(value)=>{
            let arr = [];
            if(localStorage.getItem(key)!==null){
                arr = JSON.parse(localStorage.getItem(key));
                arr = [value, ...arr];
                localStorage.setItem(key, JSON.stringify(arr));
                setProduct({
                    ...product,
                    sign: !sign,
                    getViewProduct:arr
                });
            }
            else{
                arr = [value];
                localStorage.setItem(key, JSON.stringify(arr));
                setProduct({
                    ...product,
                    sign: !sign,
                    getViewProduct:arr
                });
            }
        }

        // 회원가입 타이머
        const [state, setState] = React.useState({
            minutes: 4,
            seconds: 59,
            setId: 0,
            msg:'',
            isEnd: false,
    
        });
    
        const timerCountfn=()=>{
    
            let setId = 0;
            let minutes = 4;
            let seconds = 59;
            let msg = '';
            let isEnd = false;
    
            setId = setInterval(function(){
    
                seconds--;
                if(seconds<0){
                    seconds = 59;
                    minutes--;
                    if(minutes<0){
                        clearInterval(setId);
                        seconds = 0;
                        minutes = 0;
                        msg = '유효시간이 경과되었습니다.'
                        isEnd = true;
                    }
    
                }
    
                setState({
                    ...state,
                    seconds: seconds,
                    minutes: minutes,
                    msg: msg,
                    setId: setId,
                    isEnd: isEnd
                })
    
            },1000);
    
        }
    

    return (
        <div id='wrap'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<HeaderComponent setIsIntroFn={setIsIntroFn}/>} >                        
                    <Route index element={<IntroComponent setViewProduct={setViewProduct}/>} />
                        <Route path='intro' element={<IntroComponent setViewProduct={setViewProduct}/>} />
                        <Route path='Main1' element={<Main1Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main2' element={<Main2Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main3' element={<Main3Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main3Sec4Img1' element={<Sec4Img1Component/>} />                          
                        <Route path='Main3Sec4Img2' element={<Sec4Img2Component/>} />                          
                        <Route path='Main3Sec4Img3' element={<Sec4Img3Component/>} />                          
                        <Route path='Main3Sec4Img4' element={<Sec4Img4Component/>} />                          
                        <Route path='Main3Sec6Img1' element={<Sec6Img1Component/>} />                          
                        <Route path='Main3Sec6Img2' element={<Sec6Img2Component/>} />                          
                        <Route path='Main3Sec6Img3' element={<Sec6Img3Component/>} />                          
                        <Route path='Main3Sec6Img4' element={<Sec6Img4Component/>} />  
                        <Route path='Sub3Child1Component' element={<Sub3Child1Component/>} />    
                        <Route path='Sub3Child2Component' element={<Sub3Child2Component/>} />    
                        <Route path='Sub3Child3Component' element={<Sub3Child3Component/>} />    
                        <Route path='Sub3Child4Component' element={<Sub3Child4Component/>} />    
                        <Route path='Sub3Child5Component' element={<Sub3Child5Component/>} />    
                        <Route path='Sub3Child6Component' element={<Sub3Child6Component/>} />    
                        <Route path='Sub3Child7Component' element={<Sub3Child7Component/>} />    
                        <Route path='Sub3Child8Component' element={<Sub3Child8Component/>} />    
                        <Route path='Main4' element={<Main4Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main5' element={<Main5Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main6' element={<Main6Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main7' element={<Main7Component setViewProduct={setViewProduct}/>} />
                        <Route path='Main8' element={<Main8Component setViewProduct={setViewProduct}/>} />
                        <Route path='Agreement' element={<AgreeComponent/>} />
                        <Route path='signup' element={<SignupComponent timer={state} timerCountfn={timerCountfn}/>} />
                        <Route path='signin' element={<SigninComponent/>} /> 
                        <Route path='service' element={<ServiceComponent/>} />                        
                        <Route path='mypage' element={<MypageComponent/>} />                        
                    </Route>
                </Routes>


            </BrowserRouter>
            <FooterComponent/>
            <GotopComponent/>
            <QuickMenuComponent product={product} isIntro={isIntro}/>
        </div>
    );
};



