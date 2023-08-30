import React from 'react';
import $ from 'jquery';
import Main1ModalComponent2 from '../modal/Main1ModalComponent2';
import axios from 'axios';

export default function Section6Component({n}){
    const [state,setState]=React.useState({
        slide14:[],
        n:0
    })
    React.useEffect(()=>{
        axios({
            url:'./data/json/main1.json',
            method:'GET'
        })
        .then((res)=>{
                if(res.status===200){
                    console.log(res.data); 
                    setState({
                        ...state,
                        slide14: res.data.slide14,
                        n:res.data.slide14.length
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const [showModal, setShowModal] = React.useState(false);

    const onClickModal=()=>{
        setShowModal(true);
    }

    const onCloseModal=()=>{
        setShowModal(false);
    }

    React.useEffect(()=>{
        
        const $slideWrap = $('#section6 .slide-wrap');
        const $prevBtn = $('#section6 .left-arrow');
        const $nextBtn = $('#section6 .right-arrow');
        const $slide = $('#section6 .slide');
        const $currentNumber    = $('#section6 .current-number');
        const $totalNumber      = $('#section6 .total-number');
        let cnt = 0;
        let setId = 0;
        let n = state.n;

        
        // mainSlide();
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-50*cnt}%`}, 600, function(){
                if(cnt>=n-2) cnt=0;
                if(cnt<0) cnt=n-3;
                $slideWrap.stop().animate({left: `${-50*cnt}%`}, 0)
            });
            slidePageEvent();
        }

        function nextCount(){
            cnt++;
            
            mainSlide();
            
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 4000);
        }
        

        $nextBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                nextCount();
                autoTimer();
            }
        });

        $prevBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                prevCount();
                autoTimer();
            }
        });

        function slidePageEvent(){
            $currentNumber.html( cnt+1===(n-1) ? 1 : (cnt+1===0 ? n-2 : cnt+1) );
            
          }
        $slideWrap.css({width: `${50 * n}%` });

        autoTimer();

        return ()=>{
            clearInterval(setId);
        };
    },[state.n])

    return (
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>다양한 혜택으로 이제 떠나요!</h3>
                        <div className="all-view">
                            <span className='page-count-box'>
                                <em className='current-number'>1</em>
                                <i>/</i>     
                                <em className='total-number'>16</em>
                            </span>
                            <button onClick={onClickModal}>전체보기<span></span></button>
                            {
                                showModal && <Main1ModalComponent2 onCloseModal={onCloseModal} slide14={state.slide14}/>
                            }
                        </div>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
{
                                    state.slide14.map((item, idx)=>{
                                        return(
                                            <li className='slide slide15' key={idx}>
                                                <a href="!#">
                                                    <img src={item.img} alt="" />
                                                </a>
                                            </li>
                                        )
                                    })                          
}
                                </ul>
                            </div>
                        </div>
                    </div>                   
                    <span className='left-arrow'><a href="!#"><img src="./img/main1/slide-arrow.png" alt="" /></a></span>
                    <span className='right-arrow'><a href="!#"><img src="./img/main1/slide-arrow.png" alt="" /></a></span>
                </div>
            </div>
        </section>
    );
};