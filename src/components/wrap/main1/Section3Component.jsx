import React from 'react';
import $ from 'jquery';
import Main1ModalComponent from '../modal/Main1ModalComponent';
import axios from 'axios';

export default function Section3Component(){
    const [state,setState]=React.useState({
        slide11:[],
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
                        slide11: res.data.slide11,
                        n: res.data.slide11.length
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

        const $slideWrap = $('#section3 .slide-wrap');
        const $pageBtn = $('#section3 .page-btn');
        let cnt=0;
        let setId=0;
        let n = state.n;

        $slideWrap.css({width: `${100 * n}%` });

        
        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 600, function(){
                if(cnt>n-3) cnt=0;
                if(cnt<0) cnt=n-3;
                $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 0)
            });
            pageNation();
            
        }
        

        function nextCount(){
            cnt++;
            
            mainSlide();
        }

        

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 4000);
        }
        

        function pageNation(){
            $pageBtn.removeClass(`on`);
            $pageBtn.eq(cnt>n-3? 0:cnt).addClass(`on`);
        }

        

        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    cnt=idx;
                    mainSlide();
                    autoTimer();

                }
                
            });
            
        });

        autoTimer();

        return () => {
            clearInterval(setId);
        };

    },[state.n]);





    return (

        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>비교불가! 나만을 위한 프로모션</h3>
                        <button onClick={onClickModal}>전체보기<span></span></button>
                        {
                            showModal && <Main1ModalComponent onCloseModal={onCloseModal} slide11={state.slide11}/>
                        }
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
{
                                        state.slide11.map((item, idx)=>{
                                            return(
                                                <li className='slide slide10' key={idx}><a href="!#"><img src={item.img} alt="" /></a></li>
                                            )
                                        })
}
                                    </ul>
                                </div>
                            </div>
                            <div className="page-btn-box">
                                <a href="!#" className='page-btn on'>1</a>
                                <a href="!#" className='page-btn'>2</a>
                                <a href="!#" className='page-btn'>3</a>
                                <a href="!#" className='page-btn'>4</a>
                                <a href="!#" className='page-btn'>5</a>
                                <a href="!#" className='page-btn'>6</a>
                                <a href="!#" className='page-btn'>7</a>
                                <a href="!#" className='page-btn'>8</a>
                                <a href="!#" className='page-btn'>9</a>
                                <a href="!#" className='page-btn'>10</a>
                            </div>
                        </div>
                        <div className="right-box">
                            <ul>
                                <li>
                                    <a href="!#"><img src="./img/main1/3a0afb3db9a04f2e85d0419cf2323148.jpg" alt="" /></a>
                                </li>
                                <li>
                                    <a href="!#"><img src="./img/main1/e8f7c48e6ea447c89967f730b728f0a0.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};