import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default function Section4Component({setViewProduct}){

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


    const [state, setState] = React.useState({
        slide121:[],
        slide122:[],
        slide123:[],
        slide124:[],
        slide125:[],
        slide126:[]
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
                    slide121: res.data.slide121,
                    slide122: res.data.slide122,
                    slide123: res.data.slide123,
                    slide124: res.data.slide124,
                    slide125: res.data.slide125,
                    slide126: res.data.slide126
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    React.useEffect(()=>{
        
        $('#section4 .btn-box button').click(function(e) {
            e.preventDefault();
            $('#section4 .btn-box button').removeClass('on');
            $(this).addClass('on');

            let index = $(this).index();
            $('#section4 .content >ul >li').removeClass('on');             
            $('#section4 .content >ul >li').eq(index).addClass('on');
        });
    });

    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h3>해외 인기도시 최저가</h3>
                        <div className="btn-box">
                            <button className='on'>일본</button>
                            <button>중국</button>
                            <button>아시아</button>
                            <button>대양주</button>
                            <button>유럽</button>
                            <button>미주/캐나다</button>
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                        <li className='on'>
{
                                state.slide121.map((item, idx)=>{
                                    return(
                                        <div className="tripcity-box 1"  key={idx}>
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
                                state.slide122.map((item, idx)=>{
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
                                state.slide123.map((item, idx)=>{
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
                                state.slide124.map((item, idx)=>{
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
                                state.slide125.map((item, idx)=>{
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
                                state.slide126.map((item, idx)=>{
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
                    <p>총 예상 요금은 항공편 선택 이전으로 선택 후 경유 도시/발권일/환율에 따라 변동될 수 있습니다.</p>
                </div>
            </div>
        </section>
    );
};