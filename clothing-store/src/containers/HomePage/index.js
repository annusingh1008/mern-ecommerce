import React from 'react';
import Layout from '../../components/Layout';
import home1 from '../../images/homepage/home1.jpg';
import home2 from '../../images/homepage/home2.jpg';
import home3 from '../../images/homepage/home3.png';
import './style.css';

const HomePage = (props) => {
  return (
    <Layout>
      <div className=''>
        <div className='home1'>
          <img src={home1} />
        </div>
        <div className='home23 flexRow'>
          <div className='home2'>
            <img src={home2} />
          </div>
          <div className='home3'>
            <img src={home3} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
