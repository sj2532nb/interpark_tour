import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function Section5Component({setViewProduct}){

    const onClickProductList=(e, item)=>{
        e.preventDefault();
          let obj={
            img: item.img,
            text1: item.text1,
            text2: item.text2,
            price: item.price,
            저장일시: new Date().getTime()
        }
        setViewProduct(obj);
    }


    React.useEffect(()=>{
        
        $('#section5 .title .btn-box >ul >li button').click(function(e) {
            e.preventDefault();
            $(this).addClass('on');
            $('.select-area').addClass('on');
        });

        $('.select-area >ul >li').click(function(e) {
            e.preventDefault();
            $('.select-area').removeClass('on');
            $('#section5 .title .btn-box >ul >li >button').removeClass('on');

            let index = $(this).index();
            $('.btn-box >ul >li').removeClass('on');             
            $('.btn-box >ul >li').eq(index).addClass('on');

            
            $('#section5 .content >ul >li').removeClass('on');
            $('#section5 .content >ul >li').eq(index).addClass('on');
        });
    });

    const [state,setState]=React.useState({
        slide131:[],
        slide132:[],
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
                        slide132: res.data.slide132,
                        slide131: res.data.slide131
                    })
                }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className='btn-box'>
                            <ul>
                                <li className='on'>
                                    <button>김포 <img src="./img/main1/icon-down-arrow.png" alt="" /></button> 
                                    <span>에서 떠나는 국내 최저가</span>
                                </li>
                                <li>
                                    <button>제주 <img src="./img/main1/icon-down-arrow.png" alt="" /></button> 
                                    <span>에서 떠나는 국내 최저가</span>
                                </li>
                            </ul>                            
                        </div>                        
                        <div className='select-area'>
                            <ul>
                                <li className='on'>김포</li>
                                <li>제주</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            <li className='on'>
{
                                state.slide132.map((item, idx)=>{
                                    return(
                                        <div className="tripcity-box 1" key={idx}>
                                            <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                <figure><img src={item.img} alt="" /></figure>
                                                <h3>{item.text1}</h3>
                                                <h5>{item.text2}</h5>
                                                <h2>{item.price}</h2>
                                            </a>
                                        </div>
                                    )
                                })
}
                            </li>
                            <li>
                            {
                                state.slide131.map((item, idx)=>{
                                    return(
                                        <div className="tripcity-box 1" key={idx}>
                                            <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                                <figure><img src={item.img} alt="" /></figure>
                                                <h3>{item.text1}</h3>
                                                <h5>{item.text2}</h5>
                                                <h2>{item.price}</h2>
                                            </a>
                                        </div>
                                    )
                                })
}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};