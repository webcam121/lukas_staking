import React from 'react';
import Header from '../components/header/HeaderStyle2';
import ItemContent from '../components/layouts/home/ItemContent';
import SideBar from '../components/layouts/home/SideBar';

const Home = () => {
  return (
    <div className='home-8'>
        <Header />
        <section className="tf-item tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-box-17">
                            <SideBar />
                        </div>
                        
                        <div className="col-box-83">
                            <ItemContent />
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}

export default Home;