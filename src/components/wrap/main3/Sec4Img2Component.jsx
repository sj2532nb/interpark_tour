import React from 'react';
import './scss/Sec4ImgComponent.scss';
import Sub3Modal from './modal/Sub3Modal';

export default function Sec4Img2Component() {

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
                    <div className="title blind">퍼시픽 아일랜드 클럽 괌 (PIC 괌)</div>
                    <div className="content">
                        <div className="img-box">
                            <div className="left-img">
                            {
                                showModal && <Sub3Modal onCloseModal={onCloseModal} selectImage={selectImage}/>
                            }
                                <img onClick={() => onClickModal("../img/sub3/sec4img/0c8a87c6_z.jpg")} src="../img/sub3/sec4img/0c8a87c6_z.jpg" alt="" />
                            </div>
                            <div className="right-img">
                                <ul>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec4img/34379aa8_z.jpg")} src="../img/sub3/sec4img/34379aa8_z.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec4img/1000017582_02_b469x335.jpg")} src="../img/sub3/sec4img/1000017582_02_b469x335.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec4img/1000017582_04_b469x335.jpg")} src="../img/sub3/sec4img/1000017582_04_b469x335.jpg" alt="" /></li>
                                    <li><img onClick={() => onClickModal("../img/sub3/sec4img/1000017582_05_b469x335.jpg")} src="../img/sub3/sec4img/1000017582_05_b469x335.jpg" alt="" /></li>
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
                                    <h3>Pacific Islands Club Guam</h3>
                                    <h2>퍼시픽 아일랜드 클럽 괌 (PIC 괌)</h2>
                                </div>
                                <div className="mid-info">
                                    <ul>
                                        <li>
                                            <img src="../img/sub3/sec4img/icon_hotel.png" alt="" />
                                            <p>5성급/호텔/괌</p>
                                        </li>
                                        <li>
                                            <img src="../img/sub3/sec4img/icon_starOn.svg" alt="" />
                                            <p>8.7 리뷰(46)</p>
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

