import React from 'react';

export default function Main7ModalComponent({onCloseModal, slide71}) {

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
                                <h2>이벤트</h2>
                                <button onClick={onClickCloseModal}></button>
                            </div>
                            <div className="modal-main">
                                <ul>
                                    {
                                        slide71.map((item,idx)=>{
                                        return(
                                            <li key={idx}><img src={item.img} alt="" /></li>
                                        )
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
