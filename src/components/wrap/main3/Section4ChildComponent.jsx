import React from 'react';
import './scss/Section4ChildComponent.scss';
import Sub3Modal from './modal/Sub3Modal';

export default function Section4ChildComponent() {

    const [showModal, setShowModal]=React.useState(false);
    const [selectImage, setSelectImage]=React.useState(null);

    const onClickModal=(img)=>{
        setShowModal(true);
        setSelectImage(img);

    }

    const onCloseModal=()=>{
        
        setShowModal(false);

    }

    const modalClose = () => {
        if (showModal) {
            onCloseModal();
        }
      };

      React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div id='section4Child' className={`${showModal ? 'on' : ''}`} onClick={modalClose}>
            <div className="container">
                <div className="gap">
                    <div className="title blind">괌 플라자 리조트 & 스파</div>
                    <div className="content">
                        <div className="img-box">
                            <div className="left-img">
                            {
                                showModal && <Sub3Modal onCloseModal={onCloseModal} selectImage={selectImage}/>
                            }
                                <img onClick={() => onClickModal("./img/sub3/main3sub/59bb1108_z.jpg")} src="./img/sub3/main3sub/59bb1108_z.jpg" alt="" />
                            </div>
                            <div className="right-img">
                                <ul>
                                    <li><img onClick={() => onClickModal("./img/sub3/main3sub/e6f0e8f9_z.jpg")} src="./img/sub3/main3sub/e6f0e8f9_z.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("./img/sub3/main3sub/a23f23d2_z.jpg")} src="./img/sub3/main3sub/a23f23d2_z.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("./img/sub3/main3sub/d4e34377_z.jpg")} src="./img/sub3/main3sub/d4e34377_z.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("./img/sub3/main3sub/dfff25bb_z.jpg")} src="./img/sub3/main3sub/dfff25bb_z.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-top">
                                <span>추천</span>
                                <div className="btn-box">
                                    <button><img src="./img/sub3/main3sub/icon_share_black.svg" alt="" /></button>
                                    <button><img src="./img/sub3/main3sub/icon_dib2_off.svg" alt="" /></button>
                                    
                                    <button><img src="./img/sub3/main3sub/icon_map.svg" alt="" /></button>
                                </div>
                            </div>
                            <div className="content-mid">
                                <div className="mid-title">
                                    <h3>Guam Plaza Resort & Spa</h3>
                                    <h2>괌 플라자 리조트 & 스파</h2>
                                </div>
                                <div className="mid-info">
                                    <ul>
                                        <li>
                                            <img src="./img/sub3/main3sub/icon_hotel.png" alt="" />
                                            <p>3성급/호텔/괌</p>
                                        </li>
                                        <li>
                                            <img src="./img/sub3/main3sub/icon_starOn.svg" alt="" />
                                            <p>8.4 리뷰(162)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-bot">
                                <button>객실선택</button>
                                <a href="!#" className='ad-link'>해외항공 예약시 해외호텔 7% 할인</a>
                                <a href="!#" className='banner'><img src="./img/sub3/main3sub/81963b6c70d5454982704a589dac8ef5.jpg" alt="" /></a>
                            </div>

                            
                        </div>
                        <div className="border"></div>
                        <div className="hotel-info">
                            <h2>호텔정보</h2>
                            <h3>전화번호</h3>
                            <h4>+1 671-646-7803</h4>
                        </div>
                        <div className="border"></div>
                        <div className="location">
                            <h2>위치정보</h2>
                            <h3>주소</h3>
                            <h4>1328 Pale San Vitores Rd, Tamuning, 96913</h4>
                        </div>
                        <div className="border"></div>
                    </div>
                </div>
            </div>
            <div className="bot-banner">
                <img src="./img/sub3/main3sub/638203670308129005.jpg" alt="" />
            </div>
        </div>
    );
}

