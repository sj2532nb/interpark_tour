import React from 'react';
import $ from 'jquery';
import {Link, Outlet} from 'react-router-dom';

export default function AgreeComponent({이용약관동의}) {

    const [state, setState] = React.useState(이용약관동의); 

    
    
    const onChangeAgreeAll=(e)=>{
        let 약관동의 = [];
        if(e.target.checked===true){  
            약관동의 = state.이용약관 
           
        }
        else{
            약관동의 = [];  
        }
        
        setState({
            ...state,
            약관동의: 약관동의
        })
    }

    const onChangeAgreeSelect=(e)=>{

        if(e.target.checked===true){ 
            

            //전부 false
           if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '손해보험', '생명보험', '라이프서비스','개인정보처리 업무위탁']
                })
           }
           else if(e.target.value==='개인정보처리 업무위탁' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '손해보험', '생명보험', '라이프서비스', '[선택] 제 3자 마케팅 활용동의서 전체동의']
                })
           }


           //1개 false
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신']  
                })
           }
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '손해보험']  
                })
           }
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '생명보험'] 
                })
           }
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '라이프서비스']  
                })
           }


           //2개 false
           //통신+@
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '손해보험'] 
                })
            }
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '생명보험'] 
                })
            }
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '라이프서비스'] 
                })
            }

            //손해보험+@
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '손해보험', '생명보험'] 
                })
            }
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '손해보험', '라이프서비스'] 
                })
            }

            //생명보험+@
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '생명보험', '라이프서비스'] 
                })
            }


            //3개 false
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '손해보험', '생명보험', '라이프서비스'] 
                })
            }
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '생명보험', '라이프서비스'] 
                })
            }
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===false){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '손해보험', '라이프서비스'] 
                })
            }
            else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===false  && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value, '통신', '손해보험', '생명보험'] 
                })
            }

            


           //전부 true
           else if(e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true && state.약관동의.includes('개인정보처리 업무위탁')===true){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value ]  
                })
           }



           else if(e.target.value==='통신' &&  state.약관동의.includes('손해보험')===true  && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true && state.약관동의.includes('[선택] 제 3자 마케팅 활용동의서 전체동의')===false ){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value,  '[선택] 제 3자 마케팅 활용동의서 전체동의']  
                })
           }
           else if(e.target.value==='손해보험' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true &&  state.약관동의.includes('[선택] 제 3자 마케팅 활용동의서 전체동의')===false ){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value,  '[선택] 제 3자 마케팅 활용동의서 전체동의']  
                })
           }
           else if(e.target.value==='생명보험' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('손해보험')===true && state.약관동의.includes('라이프서비스')===true &&  state.약관동의.includes('[선택] 제 3자 마케팅 활용동의서 전체동의')===false ){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value,  '[선택] 제 3자 마케팅 활용동의서 전체동의']  
                })
           }
           else if(e.target.value==='라이프서비스' &&  state.약관동의.includes('통신')===true  && state.약관동의.includes('생명보험')===true && state.약관동의.includes('손해보험')===true &&  state.약관동의.includes('[선택] 제 3자 마케팅 활용동의서 전체동의')===false ){
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value,  '[선택] 제 3자 마케팅 활용동의서 전체동의']  
                })
           }           

           else{
                setState({
                    ...state,
                    약관동의: [...state.약관동의, e.target.value]
                })
           }   
        }




        else{ 
            let 약관동의 = [];  
            if( e.target.value==='[선택] 제 3자 마케팅 활용동의서 전체동의' ){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);  
                약관동의 = 약관동의.filter((item)=>item!=='통신');  
                약관동의 = 약관동의.filter((item)=>item!=='손해보험');  
                약관동의 = 약관동의.filter((item)=>item!=='생명보험');  
                약관동의 = 약관동의.filter((item)=>item!=='라이프서비스');  
                약관동의 = 약관동의.filter((item)=>item!=='개인정보처리 업무위탁');  
                setState({
                    ...state,
                    약관동의: 약관동의 
                })
            }

            else if(e.target.value==='통신' && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='[선택] 제 3자 마케팅 활용동의서 전체동의');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            else if(e.target.value==='통신' && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='개인정보처리 업무위탁');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            



            else if(e.target.value==='손해보험' && state.약관동의.includes('통신')===true && state.약관동의.includes('생명보험')===true && state.약관동의.includes('라이프서비스')===true){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='[선택] 제 3자 마케팅 활용동의서 전체동의');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            else if(e.target.value==='손해보험' && state.약관동의.includes('통신')===false && state.약관동의.includes('생명보험')===false && state.약관동의.includes('라이프서비스')===false){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='개인정보처리 업무위탁');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }



            else if(e.target.value==='생명보험' && state.약관동의.includes('통신')===true && state.약관동의.includes('손해보험')===true && state.약관동의.includes('라이프서비스')===true){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='[선택] 제 3자 마케팅 활용동의서 전체동의');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            else if(e.target.value==='생명보험' && state.약관동의.includes('통신')===false && state.약관동의.includes('손해보험')===false && state.약관동의.includes('라이프서비스')===false){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='개인정보처리 업무위탁');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }


            else if(e.target.value==='라이프서비스' && state.약관동의.includes('통신')===true && state.약관동의.includes('손해보험')===true && state.약관동의.includes('생명보험')===true){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='[선택] 제 3자 마케팅 활용동의서 전체동의');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            else if(e.target.value==='라이프서비스' && state.약관동의.includes('통신')===false && state.약관동의.includes('손해보험')===false && state.약관동의.includes('생명보험')===false){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='개인정보처리 업무위탁');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }


            else if(e.target.value==='개인정보처리 업무위탁'){
                약관동의 = state.약관동의.filter((item)=>item!==e.target.value);
                약관동의 = 약관동의.filter((item)=>item!=='통신');  
                약관동의 = 약관동의.filter((item)=>item!=='손해보험');  
                약관동의 = 약관동의.filter((item)=>item!=='생명보험');  
                약관동의 = 약관동의.filter((item)=>item!=='라이프서비스'); 
                약관동의 = 약관동의.filter((item)=>item!=='[선택] 제 3자 마케팅 활용동의서 전체동의');
                setState({
                    ...state,
                    약관동의: 약관동의  
                })
            }
            
            else{
                setState({
                    ...state,
                    약관동의: state.약관동의.filter((item)=>item!==e.target.value)
                })
            }
        }
    }

    React.useEffect(()=>{
        //선택동의항목 세부상자 on
        $('#userAgreeAll, #userAgree10, #userAgree15').change(function() {
            if ($(this).is(':checked')) {
              $('.sub-detail').addClass('on');              
            } 
            else {
              $('.sub-detail').removeClass('on');
            }
        });

        //세부상자 off
        $('.detail-chk').change(function(e) {
            if ($('.detail-chk:checked').length === 0) {
              $('.sub-detail').removeClass('on');
            }
        });

        //버튼활성화
        $('.btn-ctr').change(function() {
            if ($('.btn-ctr:checked').length === 7) {
                $('.btn-box button').addClass('on');
            }
            else{
                $('.btn-box button').removeClass('on');
            }
        });
        $('#userAgreeAll').change(function() {
            if ($(this).is(':checked')) {
                $('.btn-box button').addClass('on');
                let targetBox = $('.btn-box button');
                $('html, body').stop().animate({scrollTop: targetBox.offset().top}, 500);              
              } 
              else {
                $('.btn-box button').removeClass('on');
              }
        });

        
    })

   
    const agreePopup=()=>{            
        const fileName = './popup.html';
        const windowName = '필수 이용약관';
        const popupWidth = 750;
        const popupHeight = 800;
        const popupLeft = 0;
        const popupTop = 0;
        window.open(fileName, windowName,`width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`)            
    }

    const onClickAgreePopupOpen=(e)=>{
        e.preventDefault();
        agreePopup(); // 팝업창 열기
    }

     const onClickGotoSignup=(e)=>{
        e.preventDefault();

        window.location.pathname = '/signup';

    }




    return (
        <main id='agree'>
            <div className="container">
                <div className="gap">
                    <div className="title blind">
                        <h2>약관동의</h2>
                    </div>
                    <div className="content">
                        <form action="" name='agree_form' id='agreeForm' method='post'>
                            <div className='all-agree'>
                                <label>
                                    <input 
                                        onChange={onChangeAgreeAll}
                                        type="checkbox" 
                                        name='user_agree_all'
                                        id='userAgreeAll'
                                        value={'약관 전체 동의'}
                                        checked={state.약관동의.length===15}
                                    />
                                    약관 전체 동의
                                </label>
                            </div>
                            <div className='req-agree'>
                                <h2>인터파크 필수 동의 항목</h2>
                                <ul>
                                    <li>
                                        <label>
                                            <input 
                                                onChange={onChangeAgreeSelect}
                                                type="checkbox" 
                                                name='user_agree_1'
                                                id='userAgree1'
                                                value={'[필수] 이용약관'}
                                                checked={state.약관동의.includes('[필수] 이용약관')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 이용약관
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                onChange={onChangeAgreeSelect}
                                                type="checkbox" 
                                                name='user_agree_2'
                                                id='userAgree2'
                                                value={'[필수] 전자금융거래 이용약관'}
                                                checked={state.약관동의.includes('[필수] 전자금융거래 이용약관')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 전자금융거래 이용약관
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                onChange={onChangeAgreeSelect}
                                                type="checkbox" 
                                                name='user_agree_3'
                                                id='userAgree3'
                                                value={'[필수] 개인정보 수집동의서'}
                                                checked={state.약관동의.includes('[필수] 개인정보 수집동의서')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 개인정보 수집동의서
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input 
                                                onChange={onChangeAgreeSelect}
                                                type="checkbox" 
                                                name='user_agree_4'
                                                id='userAgree4'
                                                value={'[필수] 개인정보 제 3자 제공동의'}
                                                checked={state.약관동의.includes('[필수] 개인정보 제 3자 제공동의')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 개인정보 제 3자 제공동의
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className='com-req-agree'>
                            <h2>인터파크커머스 필수 동의 항목</h2>
                                <ul>
                                    <li>
                                        <label>
                                            <input 
                                                onChange={onChangeAgreeSelect}
                                                type="checkbox" 
                                                name='user_agree_5'
                                                id='userAgree5'
                                                value={'[필수] 이용약관2'}
                                                checked={state.약관동의.includes('[필수] 이용약관2')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 이용약관
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                onChange={onChangeAgreeSelect} 
                                                type="checkbox" 
                                                name='user_agree_6'
                                                id='userAgree6'
                                                value={'[필수] 개인정보 수집동의서2'}
                                                checked={state.약관동의.includes('[필수] 개인정보 수집동의서2')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 개인정보 수집동의서
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                onChange={onChangeAgreeSelect} 
                                                type="checkbox" 
                                                name='user_agree_7'
                                                id='userAgree7'
                                                value={'[필수] 개인정보 제 3자 제공동의2'}
                                                checked={state.약관동의.includes('[필수] 개인정보 제 3자 제공동의2')}
                                                className='btn-ctr'
                                                required
                                            />
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                [필수] 개인정보 제 3자 제공동의
                                                <img src="./img/join/icon_arrow_left.png" alt="./" />
                                            </a>
                                            
                                        </label>
                                    </li>                                    
                                </ul>
                            </div>
                            <div className='opt-agree'>
                                <h2>선택 동의 항목</h2>
                                <ul>
                                    <li>
                                        <label>
                                            <input
                                                onChange={onChangeAgreeSelect} 
                                                type="checkbox" 
                                                name='user_agree_8'
                                                id='userAgree8'
                                                value={'[선택] 개인정보 수집동의서'}
                                                checked={state.약관동의.includes('[선택] 개인정보 수집동의서')}
                                            />
                                            [선택] 개인정보 수집동의서
                                            
                                        </label>
                                        <div className='opt-agree-sub'>
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                <h3>인터파크<img src="./img/join/icon_arrow_left.png" alt="./" /></h3>
                                            </a>
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                <h3>커머스<img src="./img/join/icon_arrow_left.png" alt="./" /></h3>
                                            </a>
                                        </div>
                                    </li> 
                                    <li>
                                        <label>
                                            <input
                                                onChange={onChangeAgreeSelect} 
                                                type="checkbox" 
                                                name='user_agree_9'
                                                id='userAgree9'
                                                value={'[선택] 위치기반서비스 이용약관'}
                                                checked={state.약관동의.includes('[선택] 위치기반서비스 이용약관')}
                                            />
                                            [선택] 위치기반서비스 이용약관
                                            
                                        </label>
                                        <div className='opt-agree-sub'>
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                <h3>인터파크<img src="./img/join/icon_arrow_left.png" alt="./" /></h3>
                                            </a>
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                <h3>커머스<img src="./img/join/icon_arrow_left.png" alt="./" /></h3>
                                            </a>
                                            
                                        </div>
                                    </li> 
                                    <li>
                                        <label>
                                            <input
                                                onChange={onChangeAgreeSelect} 
                                                type="checkbox" 
                                                name='user_agree_10'
                                                id='userAgree10'
                                                value={'[선택] 제 3자 마케팅 활용동의서 전체동의'}
                                                checked={state.약관동의.includes('[선택] 제 3자 마케팅 활용동의서 전체동의')}
                                                className='select-toggle'
                                            />
                                            [선택] 제 3자 마케팅 활용동의서 전체동의
                                            
                                        </label>
                                        <div className='opt-agree-sub'>
                                            <h3><strong>쇼핑 2,000원 할인쿠폰 증정</strong></h3>
                                            <h3>맞춤서비스 제공을 위해 마케팅 활용에 동의하여 주신 고객님게 쇼핑 2천원 할인쿠폰을 드립니다.</h3>

                                            <div className='sub-detail'>
                                                <div className="sub-row1">
                                                    <h4>맞춤서비스를 위한 분야별 마케팅활용동의 선택</h4>
                                                </div>
                                                <div className="sub-row2">
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                <input
                                                                    onChange={onChangeAgreeSelect} 
                                                                    type="checkbox" 
                                                                    name='user_agree_11'
                                                                    id='userAgree11'
                                                                    value={'통신'}
                                                                    checked={state.약관동의.includes('통신')}
                                                                    className='detail-chk'
                                                                />
                                                                통신                                                                
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input
                                                                    onChange={onChangeAgreeSelect} 
                                                                    type="checkbox" 
                                                                    name='user_agree_12'
                                                                    id='userAgree12'
                                                                    value={'손해보험'}
                                                                    checked={state.약관동의.includes('손해보험')}
                                                                    className='detail-chk'
                                                                />
                                                                손해보험                                                                
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input
                                                                    onChange={onChangeAgreeSelect} 
                                                                    type="checkbox" 
                                                                    name='user_agree_13'
                                                                    id='userAgree13'
                                                                    value={'생명보험'}
                                                                    checked={state.약관동의.includes('생명보험')}
                                                                    className='detail-chk'
                                                                />
                                                                생명보험                                                                
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input
                                                                    onChange={onChangeAgreeSelect} 
                                                                    type="checkbox" 
                                                                    name='user_agree_14'
                                                                    id='userAgree14'
                                                                    value={'라이프서비스'}
                                                                    checked={state.약관동의.includes('라이프서비스')}
                                                                    className='detail-chk'
                                                                />
                                                                라이프서비스                                                                
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr />
                                                <div className="sub-row3">
                                                    <label>
                                                        <input
                                                            onChange={onChangeAgreeSelect} 
                                                            type="checkbox" 
                                                            name='user_agree_15'
                                                            id='userAgree15'
                                                            value={'개인정보처리 업무위탁'}
                                                            checked={state.약관동의.includes('개인정보처리 업무위탁')}
                                                        />
                                                        개인정보처리 업무 위탁                                                                
                                                    </label>
                                                    <p>본 동의문에는 전화,문자,손해보험,DM 등을 활용한 광고성 정보 수신동의 내용이 포함되어 있습니다.</p>
                                                    <p>할인쿠폰은 고객님의 아이디로 발급되며, 3만원 이상 구매시 발급일로부터 60일 이내 사용이 가능합니다.</p>
                                                    <p>파트너사는 참여회원 혜택(할인쿠폰 등)을 포함한 당사의 인프라 사용에 따라 광고 비용을 지급하고 있습니다.</p>
                                                    <p>본 동의를 거부할 권리가 있으며, 동의하지 않으실 경우, 쇼핑 2천원 할인쿠폰은 제공되지 않습니다. 또한 동의 완료 후 서비스를 원치 않으실경우 마이페이지 및 당사 고객센터(1588-1555)를 통해 철회를 요청하실 수 있습니다.</p>
                                                </div>
                                            </div>
                                            
                                            <a href="!#" onClick={onClickAgreePopupOpen}>
                                                <h3>인터파크 커머스<img src="./img/join/icon_arrow_left.png" alt="./" /></h3>
                                            </a>
                                            
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                            <div className="btn-box">
                                <button onClick={onClickGotoSignup} type='submit' to='/signup'>다음단계</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

AgreeComponent.defaultProps={
    이용약관동의: {
        이용약관:[
            "[필수] 이용약관",
            "[필수] 전자금융거래 이용약관",
            "[필수] 개인정보 수집동의서",
            "[필수] 개인정보 제 3자 제공동의",
            "[필수] 이용약관2",
            "[필수] 개인정보 수집동의서2",
            "[필수] 개인정보 제 3자 제공동의2",
            "[선택] 개인정보 수집동의서",
            "[선택] 위치기반서비스 이용약관",
            "[선택] 제 3자 마케팅 활용동의서 전체동의",
            "통신",
            "손해보험",
            "생명보험",
            "라이프서비스",
            "개인정보처리 업무위탁"
        ],
        약관동의:[]
    }
}

