import React from 'react';
import './scss/Sec4ImgComponent.scss';
import Sub3Modal from './modal/Sub3Modal';

export default function Sec6Img4Component() {

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
                    <div className="title blind">호시노 리조트 리조나레 괌 (ex.온워드 비치 리조트)(2박 이상 예약 가능)</div>
                    <div className="content">
                        <div className="img-box">
                            <div className="left-img">
                            {
                                showModal && <Sub3Modal onCloseModal={onCloseModal} selectImage={selectImage}/>
                            }
                                <img onClick={() => onClickModal("../img/sub3/sec6img/4_1.jpg")} src="../img/sub3/sec6img/4_1.jpg" alt="" />
                            </div>
                            <div className="right-img">
                                <ul>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec6img/4_2.jpg")} src="../img/sub3/sec6img/4_2.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec6img/4_3.jpg")} src="../img/sub3/sec6img/4_3.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec6img/4_4.jpg")} src="../img/sub3/sec6img/4_4.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec6img/4_5.jpg")} src="../img/sub3/sec6img/4_5.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="content-top">
                                <span>추천</span>
                                <div className="btn-box">
                                    <button><img src="../img/sub3/sec4img/icon_share_black.svg" alt="" /></button>
                                    <button><img src="../img/sub3/sec4img/icon_dib2_off.svg" alt="" /></button>
                                    
                                    <button><img src="../img/sub3/sec4img/icon_map.svg" alt="" /></button>
                                </div>
                            </div>
                            <div className="content-mid">
                                <div className="mid-title">
                                    <h3>Hoshino Resorts RISONARE Guam (ex.Onward Beach Resort)(2박 이상 예약 가능)</h3>
                                    <h2>호시노 리조트 리조나레 괌 (ex.온워드 비치 리조트)(2박 이상 예약 가능)</h2>
                                </div>
                                <div className="mid-info">
                                    <ul>
                                        <li>
                                            <img src="../img/sub3/sec4img/icon_hotel.png" alt="" />
                                            <p>4성급/호텔/괌</p>
                                        </li>
                                        <li>
                                            <img src="../img/sub3/sec4img/icon_starOn.svg" alt="" />
                                            <p>8.6 리뷰(188)</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-bot">
                                <button>객실선택</button>
                                <a href="!#" className='ad-link'>해외항공 예약시 해외호텔 7% 할인</a>
                                <a href="!#" className='banner'><img src="../img/sub3/sec4img/81963b6c70d5454982704a589dac8ef5.jpg" alt="" /></a>
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
                <img src="../img/sub3/sec4img/638203670308129005.jpg" alt="" />
            </div>
        </div>
        
    );
}

