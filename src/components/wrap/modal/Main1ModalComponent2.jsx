import React from 'react';

export default function Main1ModalComponent2({onCloseModal, slide14}) {

    const onClickCloseModal=()=>{
        
        onCloseModal();

    }

    return (
        
        <div id='modal'>
            <div className="container">
                <div className="gap">                    
                    <div className="content">
                        <div className='allview'>
                            <div className="modal-header">
                                <h2>프로모션 전체보기</h2>
                                <button onClick={onClickCloseModal}></button>
                            </div>
                            <div className="modal-main">
                                <ul>
                                    {
                                        slide14.map((item,idx)=>{
                                            if(idx===0 || idx===slide14.length-1){
                                                
                                                return null;
                                            }
                                            else{
                                                return(                                                
                                                    <li key={idx}><img src={item.img} alt="" /></li>
                                                )
                                            }                                            
                                        })
                                    }
                                    
                                </ul>
                            </div>                           
                        </div>     
                    </div>
                </div>
            </div>
        </div>
        
    );
}

