import React from 'react';
import './scss/quickmenu.scss';
import quick_menu_img from'./img/quickmenu/quick_menu_img.png';
import quick_menu from'./img/quickmenu/quick_menu.png';
import nav_arrow from'./img/quickmenu/nav_arrow.svg';
import $ from 'jquery';

export default function QuickMenuComponent({product, isIntro}){

    const [state, setState] = React.useState({
        isFixed: false,
        isViewProduct: true
    });

    const [viewData, setViewData] = React.useState([]);

    const getLocalStorage=()=>{
        let key = 'INTERPARK_VIEW_PRODUCT';
        if(localStorage.getItem(product.key)!==null){
            let viewData = JSON.parse(localStorage.getItem(key));
            setViewData(viewData);
        }
    }

    React.useEffect(()=>{
        getLocalStorage();
    },[]);

    React.useEffect(()=>{
        getLocalStorage();
    },[product.sign]);


    React.useEffect(()=>{

        let quickMenu = $(`#quickmenu`);

        let isFixed = false;

        $(window).scroll(function(){
            isFixed = false;
            if($(window).scrollTop()>200){
                isFixed = true;
                quickMenu.css({marginTop: -quickMenu.height()/2});
            }
            else{
                isFixed = false;
                quickMenu.css({marginTop: 0});
            }
            setState({
                ...state,
                isFixed: isFixed
            })
        })

    },[state.isFixed]);


    const refList = React.useRef();
    const [cnt, setCnt] = React.useState(0);

    const listMainSlide=()=>{
        refList.current.style.transition = 'all 0.3s ease-in-out';
        refList.current.style.transform = `translateY(${-100*cnt}px)`;
    }

    React.useEffect(()=>{
        listMainSlide();
    },[cnt]);



    const onClickUpEvent=(e)=>{
        e.preventDefault();

        if(cnt <= viewData.length-6){
            setCnt(cnt=>cnt+1);
        }
    }

    const onClickDownEvent=(e)=>{
        e.preventDefault();
        if(cnt>0){
            setCnt(cnt=>cnt-1);
        }
    }


    return (
        <div id="quickmenu" className={`${isIntro?'intro':''} ${state.isFixed?' on':''}`}>
            <div className="container">
                <ul>
                    <li>
                    <a href="!#"><img src={quick_menu} alt="" /></a>
                    </li>
                    <li>
                        <h3>최근 본 상품</h3>
                    </li>
                    <li className='view-product'>
                        {
                            state.isViewProduct && (
                            <div>
                                <span><a onClick={onClickUpEvent} href="!#"><img className='prev-btn' src={nav_arrow} alt="" /></a></span>
                                <div className='view-box'>
                                    <ul className='view-wrap' ref={refList}>
                                        {
                                            viewData.map((item, idx)=>{
                                                return(
                                                    <li key={idx}><a href="!#"><img src={item.img} alt="" /></a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <span><a onClick={onClickDownEvent} href="!#"><img className='next-btn' src={nav_arrow} alt="" /></a></span>
                            </div>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};