import React from 'react';
import './scss/Sub3Modal.scss';

export default function Sub3Modal({onCloseModal, selectImage, showModal}) {
    const onClickCloseModal=()=>{
        
        onCloseModal();

    }

    
    return (
        <div id='sub3Modal' >
            <div className="container">
                <div className="gap">                    
                    <div className="content">
                        <div className='allview'>
                            <div className="modal-header">
                                <img  onClick={onClickCloseModal} src={selectImage} alt="" />
                            </div>                           
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    );
}

