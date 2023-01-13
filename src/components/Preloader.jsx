import { Spin } from 'antd';
import React from 'react'


const Preloader = () => {
  return (
    <div className='preloader-wrapper'>
      <Spin size="large" />
    </div>
  )
}

export default Preloader;
