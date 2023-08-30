import React from 'react';
import './scss/gotop.scss';
import icon_top from './img/gotop/icon_top.svg';
import $ from 'jquery';
import { useEffect } from 'react';

export default function GotopComponent(){


    // const onClickGoTop=(e)=>{
    //     e.preventDefault();        
      
    //     let pageY = window.pageYOffset;        

    //     if(pageY>0){
    //         window.scrollTo({top:0, behavior:'smooth'});
    //     }

    // }



    return (
        <div id='gotop'>
            <a href="#wrap" /* onClick={onClickGoTop} */><img src={icon_top} alt="" /></a>
        </div>
    );
    

};
