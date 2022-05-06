
import React,{useState} from 'react';
import {Modal, Button} from 'antd';

export default function AppWorks() {
    const[isModalVisible,setIsModalVisible] = useState(false);

    const showModal = () =>{
        setIsModalVisible(true);
    };

    const onCancel = () =>{
        setIsModalVisible(false);
    }

  return (
    <div id="works" className='block worksBlock'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>How it works</h2>
                <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
            </div>

            <div className='contentHolder'>
            <Button size="large" onClick={showModal}>
        <i className='fas fa-play'></i>
      </Button>
      <Modal 
      title="Basic Modal"
      visible={isModalVisible} 
      onCancel={onCancel} 
      footer={null}
      >
     <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
      </Modal>
      </div> 
    </div>
    </div>
  )
}
