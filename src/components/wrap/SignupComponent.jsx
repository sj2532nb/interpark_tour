import React from 'react';
import './scss/reset.scss';
import './scss/signup.scss';
import './scss/confirm.scss';
import logo_interpark from './img/signup/logo_interpark.svg';
import $ from 'jquery';
import axios from 'axios';
import { ajax } from 'jquery';
import {Link, Outlet} from 'react-router-dom';

export default function SignupComponent({membership, timer, timerCountfn}){

    const {setId, minutes, seconds, msg, isEnd} = timer;

    const [state, setState] = React.useState(membership);

    const [member, setMember] = React.useState({
        id : '',
        pw : '',
        personal : '',
        name : '',
        email : '',
        hp : '',
        event_info : '',
        under_fourteen : '',
        parent_name : '',
        parent_email : '',
        parent_agree : ''
    })


    // 회원가입 정규표현식, onChange이벤트
    // 아이디
    const onChangeUserId=(e)=>{

        const {value} = e.target;
    
        let 아이디 = '';
        let isIdError = false;
        let isIdMsg = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const regExp2 = /^(.){6,20}$/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /[A-Za-z]+[0-9]*/g;
        const regExp5 = /\s/g;

    
        if(regExp1.test(value)===true || regExp2.test(value)===false  || regExp3.test(value)===true || regExp4.test(value)===false  ||  regExp5.test(value)===true ){
            isIdError = true;
            isIdMsg = '영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.';
        }
        else{
            isIdError = false;
            isIdMsg = '';

        }


        setState({
            ...state,
            아이디: value,
            isIdError : isIdError,
            isIdMsg: isIdMsg
        })

    }



    const onChangeUserPw=(e)=>{
        const {value} = e.target;
        let 비밀번호 = '';
        let isPwError = false;
        let isPwMsg = '';

        const regExp1 = /^(.){8,12}$/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[0-9]+)+/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /(\d)\1\1/g;
        const regExp5 = /(.)\1\1/g;

        if(regExp1.test(value)===false || regExp2.test(value)===false || regExp3.test(value)===true){
            isPwError = true;
            isPwMsg = '8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.';
        }
        else if(regExp4.test(value)===true || regExp5.test(value)===true){
            isPwError = true;
            isPwMsg = '동일한 문자를 연속으로 사용할 수 없습니다.';
        }
        else{
            isPwError = false;
            isPwMsg = '';
        }

        setState({
            ...state,
            비밀번호: value,
            isPwError: isPwError,
            isPwMsg: isPwMsg,

        })

    }

    // 비밀번호 보기 이벤트
    const [show, setShow] = React.useState({
        showMePw1: false
    })

    const onClickShowPw1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            showMePw1: true
        })
    }


    const onChangeUserPwConfirm=(e)=>{

        const {value} = e.target;
        let 비밀번호확인 = '';
        let isPwConfirmError = false;
        let isPwConfirmMsg = '';

        const regExp1 = /^(.){8,12}$/g;
        const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*\-_|;:'"/?]+)+|([`~!@#$%^&*\-_|;:'"/?]+[0-9]+)+/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /(\d)\1\1/g;
        const regExp5 = /(.)\1\1/g;        

        console.log(value);
        console.log(state.비밀번호);


        if(regExp1.test(value)===false || regExp2.test(value)===false || regExp3.test(value)===true){
            isPwConfirmError = true;
            isPwConfirmMsg = '8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.';
        }
        else if(regExp4.test(value)===true || regExp5.test(value)===true){
            isPwConfirmError = true;
            isPwConfirmMsg = '동일한 문자를 연속으로 사용할 수 없습니다.';
        }
        else if(value !== state.비밀번호){
            isPwConfirmError = true;
            isPwConfirmMsg = '비밀번호가 일치하지 않습니다. 다시 입력해주세요.';
        }
        else{
            isPwConfirmError = false;
            isPwConfirmMsg = '';
        }

        setState({
            ...state,
            비밀번호확인: value,
            isPwConfirmError: isPwConfirmError,
            isPwConfirmMsg: isPwConfirmMsg

        })

    }

    // 비밀번호 확인 보기 이벤트

    const [show2, setShow2] = React.useState({
        showMePw2: false
    })

    const onClickShowPw2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            showMePw2: true
        })
    }

    const onChangePersonal=(e)=>{
        e.preventDefault();

        const {value} = e.target;
        let 개인정보유효기간 = '';
        let personalYear = true;
        let personalForever = false;

        if(value === '탈퇴시까지'){
            personalYear = false;
            personalForever = true;
        }
        else{
            personalYear = true;
            personalForever = false;
        }
     
        setState({
            ...state,
            개인정보유효기간 : value,
            personalYear: personalYear,
            personalForever: personalForever
        })
    }


    const onChangeUserName=(e)=>{

        const {value} = e.target;
        let 이름 = '';
        let isNameError = false;
        let isNameMsg = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const regExp2 = /[0-9]/g;
        const regExp3 = /\s/g;

        if(regExp1.test(value)===true || regExp2.test(value)===true || regExp3.test(value)===true){
            isNameError = true;
            isNameMsg = '한글과 영문 대,소문자를 사용해주세요'
        }
        else{
            isNameError = false;
            isNameMsg = ''
        }

        setState({
            ...state,
            이름: value,
            isNameError: isNameError,
            isNameMsg: isNameMsg
        })     

    }



    const onChangeUserEmail=(e)=>{

        const {value} = e.target;
        let 이메일;
        let isEmailError = false;
        let isEmailMsg = '';

        const regExp1 = /^[a-z0-9]*@[a-z0-9]+\.[a-z]{2,3}$/gi;

        if(regExp1.test(value)===false){
            isEmailError = true;
            isEmailMsg = '이메일 주소 양식에 맞게 작성해주세요.';
        }
        else{
            isEmailError = false;
            isEmailMsg = '';
        }

        setState({
            ...state,
            이메일: value,
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg
        })



    }

    const onChangeEmailAddress=(e)=>{      

        const {value} = e.target;
        let 이메일;
        let front = state.이메일;
        let back = value;
        let isEmailError = false;
        let isEmailMsg = '';

        const regExp1 = /^[a-z0-9]*@[a-z0-9]+\.[a-z]{2,3}$/gi;

        if(regExp1.test(value)===false){
            isEmailError = true;
            isEmailMsg = '이메일 주소 양식에 맞게 작성해주세요.';
        }

        if(front===''){
            이메일 = back;
        }
        else if(front!==''){
            const atIndex = front.indexOf('@');
            if(atIndex !== -1){
                front = front.slice(0, atIndex);
            }
            이메일 = `${front}${back}`;
        }

        
        setState({
            ...state,
            이메일: 이메일,
            front: front,
            back: back,
            isEmailError: isEmailError,
            isEmailMsg: isEmailMsg
        });
        
    }


    const onChangeUserHp=(e)=>{

        const {value} = e.target;
        let 휴대폰 = '';
        let isHpError = false;
        let isHpMsg = '';

        const regExp1 = /[0-9]/g;
        const regExp2 = /^(.){11}$/g;
        const regExp3 = /^010[0-9]{4}[0-9]{4}$/g;

        휴대폰 = value.replace(regExp1, '');

        if(regExp2.test(value)===false || regExp3.test(value)===false){
            isHpError = true;
            isHpMsg = '점유인증을 하여 휴대폰 번호를 등록해주세요. 등록한 번호는 로그인 이후 변경 가능합니다.';
        }
        else{
            isHpError = false;
            isHpMsg = ''
        }

        setState({
            ...state,
            휴대폰: value,
            isHpError: isHpError,
            isHpMsg: isHpMsg
        })

    }

    // 휴대폰 인증번호 이벤트

    const onClickHpConfirm=(e)=>{
        e.preventDefault();

        let 휴대폰 = '';
        const regExp = /^010[0-9]{4}[0-9]{4}$/g;
        let num = 0;
        let 발송인증번호 = 0;
        let isConfirmModal = false;
        let confirmMsg = '';
        let sendNum = 'false';


        if(regExp.test(state.휴대폰) === false){
            isConfirmModal= true;
            confirmMsg= '번호를 확인 후 다시 시도해주세요.';           
      
        }
        else{
            num = Math.floor(Math.random()*900000+100000);

            발송인증번호 = num;
            isConfirmModal= true;
            confirmMsg= `발송인증번호가 발송되었습니다. ${num}`;   
            sendNum = true;   
            
            timerCountfn();

        }
        
        setState({
            ...state,
            num : num, 
            발송인증번호 : 발송인증번호, 
            isConfirmModal : isConfirmModal, 
            confirmMsg : confirmMsg,
            sendNum : sendNum

        })  
        
    }

    const onChangeHpComfirmNum=(e)=>{
        const {value} = e.target;

        setState({
            ...state,
            입력인증번호: value

        })
    }


    const onClickHpConfirmNum=(e)=>{
        e.preventDefault();
        
        let 발송인증번호 = state.발송인증번호;
        let confirmMsgTime = '';
        let inputConfirm = false;
        let isButtonActive = false;
        let isConfirmModal = false;
        let confirmMsg = '';

        if(state.발송인증번호 === Number(state.입력인증번호) ){

            // console.log(state.발송인증번호);
            // console.log(state.입력인증번호);
            isConfirmModal = true;
            confirmMsg = '인증되었습니다.';
            inputConfirm = true; // 인증번호 맞음
            
            clearInterval(timer.setId);
            isButtonActive = true;
        }
        else{
            isConfirmModal = true;        
            confirmMsg = '인증번호를 확인해주세요';
            inputConfirm = false; // 인증번호 틀림
        }

        setState({
            ...state,
            발송인증번호 : 발송인증번호,
            confirmMsgTime : confirmMsgTime,
            inputConfirm : inputConfirm,
            isButtonActive : isButtonActive,
            isConfirmModal : isConfirmModal,
            confirmMsg : confirmMsg
        })

    }

    const onChangeEventInfo=(e)=>{
        const {value} = e.target;
        let SMS_Email_info = '';
        
        setState({
            ...state,
            SMS_Email_info: value
        })

    }

    const onChangeUnderFourteen=(e)=>{
        const {value} = e.target;
        let under_fourteen = '';

        setState({
            ...state,
            under_fourteen: value
        })
    }




    // 14세 미만입니다 체크 시 글자 및 부모님 폼 출력 클릭이벤트

    React.useEffect(()=>{
        $('#checkBox14').change(function(){
            if($(this).is(':checked')){
                $('.h6under14').addClass('on');
            }
            else{
                $('.h6under14').removeClass('on');
            }
        })

        $('#checkBox14').change(function(){
            if($(this).is(':checked')){
                $('.teen').addClass('on');
            }
            else{
                $('.teen').removeClass('on');
            }
        })
    })



    const onChangeUserParentName=(e)=>{

        const {value} = e.target;
        let 부모님이름 = '';
        let isParentNameError = false;
        let isParentNameMsg = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;
        const regExp2 = /[0-9]/g;
        const regExp3 = /\s/g;

        if(regExp1.test(value)===true || regExp2.test(value)===true || regExp3.test(value)===true){
            isParentNameError = true;
            isParentNameMsg = '한글과 영문 대,소문자를 사용해주세요'
        }
        else{
            isParentNameError = false;
            isParentNameMsg = ''
        }

        setState({
            ...state,
            부모님이름: value,
            isParentNameError: isParentNameError,
            isParentNameMsg: isParentNameMsg
        })   

    }


    const onChangeUserParentEmail=(e)=>{
        
        const {value} = e.target;
        let 부모님이메일;
        let isParentEmailError = false;
        let isParentEmailMsg = '';

        const regExp1 = /^[a-z0-9]*@[a-z0-9]+\.[a-z]{2,3}$/gi;

        if(regExp1.test(value)===false){
            isParentEmailError = true;
            isParentEmailMsg = '이메일 주소 양식에 맞게 작성해주세요.';
        }
        else{
            isParentEmailError = false;
            isParentEmailMsg = '';
        }

        setState({
            ...state,
            부모님이메일: value,
            isParentEmailError: isParentEmailError,
            isParentEmailMsg: isParentEmailMsg
        })

    }


    const onClickConfirmModalClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isConfirmModal: false
        })
    }

    // 가입완료 버튼 이벤트
    const onSubmitSignupEvent=(e)=>{        
        e.preventDefault();


        //미입력 시 모달창 인터파크투어 기준으로 동작할 수 없음
        if(state.아이디=== ''){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '아이디를 입력해주세요'                
            })
        }
        else if(state.비밀번호=== ''){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '비밀번호를 입력해주세요'                
            })
        }
        else if(state.비밀번호확인=== ''){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '비밀번호확인을 입력해주세요'                
            })
        }
        else if(state.비밀번호 !== state.비밀번호확인){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '비밀번호가 일치하지 않습니다.'                
            })
        }
        else if(state.이름=== ''){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '이름을 입력해주세요'                
            })
        }
        else if(state.이메일=== ''){
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '이메일을 입력해주세요'                
            })
        }
        else if(state.휴대폰=== ''){
            console.log("휴대폰");
            setState({
                ...state,
                isConfirmModal: true,
                confirmMsg: '휴대폰번호를 입력해주세요'                
            })
        }
        else if(state.inputConfirm === false){
            console.log("인증번호");
            console.log(state.inputConfirm);
            setState({
                ...state,
                inputConfirm: state.inputConfirm,
                confirmMsg: '휴대폰 인증을 해주세요'                
            })
        }
        else{

            if(state.개인정보유효기간 === ''){
                state.개인정보유효기간 = '1년';
            }            
                
            alert('왔당'); 

            const formData = {
                "id": state.아이디,
                "pw": state.비밀번호,
                "personal": state.개인정보유효기간,
                "name": state.이름,
                "email": state.이메일,
                "hp": state.휴대폰,
                "event_info": state.SMS_Email_info,
                "under_fourteen": state.under_fourteen,
                "parent_name": state.부모님이름,
                "parent_email": state.부모님이메일            
            }
    
            console.log( formData);
    
            $.ajax({
                // url: 'http://127.0.0.1:8080/jsp/interpark/interpark/interpark_signup_action_useBean.jsp',
                // url: 'http://127.0.0.1:8080/jsp/interpark/interpark/interpark_signup_action_parameter.jsp',
                url: 'http://127.0.0.1:8080/jsp/interpark/interpark/interpark_signup_action.jsp',
                type: 'POST',
                data: formData,
                success(res){
                    console.log('AJAX 성공');
                    console.log(res);
                    console.log(JSON.parse(res));  
    
                    window.location.pathname = '/intro';
                },
                error(err){
                    console.log('AJAX 실패 : ' + err);
                }
            })


        }




        
    }






    return (
        <>
            <div id='signup'>
                <div className="head">
                    <div className="gap">
                        <span><img src={logo_interpark} alt="" /></span>
                        <h6>정보입력</h6>
                        <span></span>
                    </div>
                </div>

                <div className="sign">
                    <form onSubmit={onSubmitSignupEvent} name='interpark-sign' id='interparkSign' method='POST' action="./interpark_signup_action.jsp">
                        <ul>
                            <li>
                                <label htmlFor='userId'>아이디</label>
                                <input 
                                    name='user_id' 
                                    id='userId' 
                                    type="text" 
                                    placeholder='6~20자 영문, 숫자' 
                                    onKeyUp={onChangeUserId}
                                    // value={state.아이디}
                                    autoComplete='none'
                                />
                                <h6 className={`error-msg${state.isIdError?' on':''}`}>{state.isIdMsg}</h6>                          
                            </li>
                            <li>
                                <label htmlFor='userPw'>비밀번호</label>
                                <input 
                                    name='pw' 
                                    id='userPw' 
                                    type={`${state.showMePw1?'text':'password'}`}
                                    autoComplete='new-password' 
                                    placeholder='8~12자 영문, 숫자, 특수문자' 
                                    onChange={onChangeUserPw}
                                    value={state.비밀번호}
                                />
                                <a href="!#" onClick={onClickShowPw1}>보기</a>
                                <h6 className={`error-msg${state.isPwError?' on':''}`}>{state.isPwMsg}</h6>                         
                            </li>
                            <li>
                                <label htmlFor='pwComfirm'>비밀번호 확인</label>
                                <input 
                                    name='pw-comfirm' 
                                    id='pwComfirm' 
                                    type={`${state.showMePw2?'text':'password'}`}
                                    autoComplete='new-password'  
                                    placeholder='8~12자 영문, 숫자, 특수문자'
                                    onChange={onChangeUserPwConfirm}
                                    value={state.비밀번호확인}
                                />
                                <a href="!#" onClick={onClickShowPw2}>보기</a>   
                                <h6 className={`error-msg${state.isPwConfirmError?' on':''}`}>{state.isPwConfirmMsg}</h6>                   
                            </li>
                            <li className='personal-info'>
                                <label htmlFor='personal'>개인정보 유효기간</label>
                                <div className="radio-box">
                                    <label className='personal-label'><input onChange={onChangePersonal} className={`radio${state.personalForever?' on':''}`} name='personal' id='untilOut' type="radio" value='탈퇴시까지' /><span className='radio-txt'>탈퇴 시까지</span></label>
                                    <label className='personal-label'><input onChange={onChangePersonal} className={`radio${state.personalYear?' on':''}`} name='personal' id='untilYear' type="radio" value='1년' /><span className='radio-txt'>1년</span></label>
                                </div>
                                <h5>개인정보 유효기간 경과 이후 파기 또는 분리저장, 관리합니다.</h5>                     
                            </li>
                            <li>
                                <label htmlFor='userName'>이름</label>
                                <input 
                                    name='name' 
                                    id='userName' 
                                    type="text"  
                                    onChange={onChangeUserName}
                                    value={state.이름}
                                /> 
                                <h6 className={`error-msg${state.isNameError?' on':''}`}>{state.isNameMsg}</h6>                           
                            </li>
                            <li>
                                <label htmlFor='userEmail'>이메일</label>
                                <input 
                                    name='email' 
                                    id='userEmail'
                                    type="text" 
                                    onChange={onChangeUserEmail}
                                    value={state.이메일}
                                />
                                <select onChange={onChangeEmailAddress} value={state.메일박스}>
                                    <option value="">직접입력</option>
                                    <option value="@naver.com">@naver.com</option>
                                    <option value="@hanmail.net">@hanmail.net</option>
                                    <option value="@gmail.com">@gmail.com</option>
                                    <option value="@nate.com">@nate.com</option>
                                    <option value="@hotmail.com">@hotmail.com</option>
                                </select>   
                                <h6 className={`error-msg${state.isEmailError?' on':''}`}>{state.isEmailMsg}</h6>                      
                            </li>
                            <li>
                                <label htmlFor='userHp'>휴대폰</label>
                                <input 
                                    name='hp'  
                                    id='userHp'
                                    type="text"
                                    placeholder='010 1234 5678' 
                                    onChange={onChangeUserHp}                               
                                    value={state.휴대폰}
                                    maxLength={11}
                                />
                                <button onClick={onClickHpConfirm}>인증번호받기</button>
                                <h6 className={`error-msg${state.isHpError?' on':''}`}>{state.isHpMsg}</h6>
                            </li>
                            <div className="same-mem" >
                                    <i>동일 정보로 가입된 계정으로 로그인 하시겠습니까?</i>
                                    <a href="!#" >로그인하기</a>
                            </div>
                            <li className={`send-num${state.sendNum?' on':''}`}>
                                <label>인증번호</label>
                                <input 
                                    type="text"
                                    onChange={onChangeHpComfirmNum}
                                    value={state.입력인증번호}
                                    maxLength={6} 
                                />
                                <button onClick={onClickHpConfirmNum} className='hp-confirm-num'>확인</button>
                                <button className='hp-confirm-num'>재발송</button>
                                <h6 className='error-msg'>인증유효시간 {minutes}:{seconds}</h6>
                            </li>
                            <li className='check'>
                                <span><input onChange={onChangeEventInfo} name='checkbox-event-info' type="checkbox" value='SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)'/>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
                                <span>
                                    <input onChange={onChangeUnderFourteen} name='checkbox14' id='checkBox14' type="checkbox" value='14세 미만입니다.' />14세 미만입니다.
                                    <h6 className={`h6under14${state.under_fourteen_state?' on':''}`}>14세 미만 가입시 법정대리인 동의 필수입니다.</h6>
                                </span>
                                
                            </li>                       
                
                        </ul>

                        <div className="p-box">
                            <p>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입이 가능합니다.</p>   
                        </div>
                                         
                        <ul className={`teen${state.under_fourteen_state?' on':''}`}>
                            <li>
                                <label htmlFor='parentName'>이름</label>
                                <input 
                                    name='parent-name' 
                                    id='parentName' 
                                    type="text"  
                                    onChange={onChangeUserParentName}
                                    value={state.부모님이름}
                                />  
                                <h6 className={`error-msg${state.isParentNameError?' on':''}`}>{state.isParentNameMsg}</h6>                          
                            </li>
                            <li>
                                <label htmlFor='parentEmail'>이메일</label>
                                <input 
                                    name='parent-email' 
                                    id='parentEmail' 
                                    type="text"  
                                    onChange={onChangeUserParentEmail}
                                    value={state.부모님이메일}    
                                />
                                <select>
                                    <option value="직접입력">직접입력</option>
                                    <option value="@naver.com">@naver.com</option>
                                    <option value="@hanmail.net">@hanmail.net</option>
                                    <option value="@gmail.com">@gmail.com</option>
                                    <option value="@nate.com">@nate.com</option>
                                    <option value="@hotmail.com">@hotmail.com</option>
                                </select>  
                                <h6 className={`error-msg${state.isParentEmailError?' on':''}`}>{state.isParentEmailMsg}</h6>                       
                            </li>
                            <div className="agree">
                                <span>가입동의받기</span>
                                <button>법정대리인 본인 인증</button>
                            </div>
                        </ul>
                        <button className={`done${state.isButtonActive?' on':''}`} type='submit'>가입완료</button>
                    </form>
                </div>
                <div className="foot">                
                    <p>Copyright &copy; Interpark Corp. All rights reserved.</p>                
                </div>
            </div>

            {
                state.isConfirmModal && (                                        
                    <div id="confirmModal">
                        <div className="container">
                            <div className="content">
                                <div className="title-box">
                                    <h1>{state.confirmMsg}</h1>
                                </div>
                                <div className="button-box">
                                    <button onClick={onClickConfirmModalClose}>확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};


SignupComponent.defaultProps = {

    membership: {

        아이디:'',
        isIdError: false,
        isIdMsg: '',

        비밀번호:'',
        isPwError: false,
        isPwMsg: '',

        비밀번호확인:'',
        isPwConfirmError: false,
        isPwConfirmMsg: '',

        개인정보유효기간:'',
        personalYear: true,
        personalForever: false,

        이름:'',
        isNameError: false,
        isNameMsg: '',

        이메일:'',
        isEmailError: false,
        isEmailMsg: '',

        메일박스:'',

        휴대폰:'',
        isHpError: false,
        isHpMsg: '',

        발송인증번호:'',
        sendNum: false, // 인증번호가 발송되었는가?
        입력인증번호:'',
        inputConfirm: false, //인증번호를 맞게 입력했는가?
        confirmMsgTime:'',

        isNumber: true, //
        isNumOk: false,
        


        SMS_Email_info:'',
        under_fourteen:'',
        under_fourteen_state: false,


        부모님이름:'',
        isParentNameError: false,
        isParentNameMsg: '',

        부모님이메일:'',
        isParentEmailError: false,
        isParentEmailMsg: '',

        confirmMsg: '',
        isConfirmModal: false,

        isHpConfirm: false,

        isButtonActive: false
    }



}