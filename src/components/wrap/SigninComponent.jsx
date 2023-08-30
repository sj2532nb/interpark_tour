import React from 'react';
import './scss/signin.scss';
import $ from 'jquery';
import { ajax } from 'jquery';

export default function SigninComponent({loginmember}){

    const [log, setLog] = React.useState(loginmember);

    const [state, setState] = React.useState({
        member: true,
        notMember: false
    })

    const onClickIsMember=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            member: true,
            notMember: false
        })
    }

    const onClickIsNotMember=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            member: false,
            notMember: true
        })
    }

    const onChangeUserId=(e)=>{
        const {value} = e.target;
        setState({
            ...state,
            아이디: value
        })
    }

    const onChangeUserPw=(e)=>{
        const {value} = e.target;
        setState({
            ...state,
            비밀번호: value
        })
    }


    // 로그인 이벤트
    const onSubmitSignupEvent=(e)=>{
        e.preventDefault();

        const formData = {
            "id": state.아이디,
            "pw": state.비밀번호
        }

        console.log(formData);
        
        $.ajax({
            url: 'http://127.0.0.1:8080/jsp/interpark/interpark/interpark_signin_action.jsp',
            type: 'POST',
            data: formData,
            seccess(res){
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



    return (
        <div id='signin'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="state">
                            <a href="!#" className={`${state.member?' on':''}`} onClick={onClickIsMember}>회원</a>
                            <a href="!#" className={`${state.notMember?' on':''}`} onClick={onClickIsNotMember}>비회원</a>
                        </div> 

                        <div className={`form-box${state.member?' on':''}`}>
                            <form name='signin' id='signIn' method='POST' action="./interpark_signup_action.jsp">
                                <input name='user_id' id='userId' type="text" placeholder='아이디'/>
                                <input name='pw' id='userPw' type="password" placeholder='비밀번호'/>

                                <button type='submit' onClick={onSubmitSignupEvent}>로그인</button>

                                <div className="login">
                                    <label ><input type="checkbox" /> 자동로그인</label>
                                    <label ><input type="checkbox" /> 아이디저장</label>
                                </div>

                                <p>개인정보 보호를 위해 공용 PC에서 사용 후 SNS 계정의 로그아웃</p>
                                <p>상태를 반드시 확인해주세요.</p>
                                <hr />
                                <div className="search">
                                    <a href="!#">아이디 찾기</a>
                                    <span>|</span>
                                    <a href="!#">비밀번호 찾기</a>
                                    <span>|</span>
                                    <a href="!#">회원가입</a>
                                </div>
                                
                            </form>
                        </div>


                        {/* 비회원 */}
                        <div className={`form-box${state.notMember?' on':''}`}>
                            <form name='bemem' id='beMem' method='POST' action="">
                                <h5>비회원으로 <i>예약 시 입력하신 정보로</i> 로그인해 주세요.</h5>
                                <input name='name' id='userName' type="text" placeholder='이름'/>
                                <div className="signin-hp">
                                    <input name='hp' id='userHp' type="text" placeholder='휴대폰번호(-없이 입력)'/>
                                    <button className="right">인증번호 전송</button>
                                </div>
                                <div className="signin-hp">
                                    <input name='com-num' id='comNum' type="text" placeholder='인증번호'/>
                                    <div className="right">미인증</div>
                                </div>                            

                                <h4>· 3분 이내로 인증번호(4자리)를 입력하셔야 합니다.</h4>
                                <h4>· 인증실패 시 "재전송"버튼을 눌러 주시기 바랍니다.</h4>
                                <button type='submit'>비회원 로그인</button>

                                
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

SigninComponent.defaultProps = {
    loginmember:{

        아이디:'',
        isIdError: false,
        isIdMsg: '',

        비밀번호:'',
        isPwError: false,
        isPwMsg: '',
    }
}
