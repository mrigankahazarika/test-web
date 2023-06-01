import React , { useState } from 'react'
import './App.css';
import img2 from "./assets/22.webp";
import img3 from "./assets/img1.jpg";
import img7 from "./assets/heart.png";
import newnew from "./assets/p-bg.webp"
import Settings2FillIcon from 'remixicon-react/Settings2FillIcon';
import Notification2FillIcon from 'remixicon-react/Notification2FillIcon';

function Profile() {

  return (
    <>
    <div className="maidn Home">
        <div className="profile">
            <div className="cover" style={{backgroundImage :`url(${newnew})` ,  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px',}}>
          <div className="top-navbar">
                <div className="back">
                  <p>back</p>
                  <p>Steve Johnson </p>
                  <p>Message</p>
                </div>
          </div>
                <div className="profile-card">
                  <div className="img">
                      <div className='d-flex'>
                          <img className='img-post' src={img3} alt="" />
                          <div className="name">
                            <h3>@Steve Johnson</h3>
                          </div>
                      </div>
                      <div className="follower">
                          <div className="count">
                            <h3>45</h3>
                            <h6>Following</h6>
                          </div>
                          <div className="count">
                            <h3>125.5m</h3>
                            <h6>Followers</h6>
                          </div>
                          <div className="count">
                            <h3>1.5k</h3>
                            <h6>Posts</h6>
                          </div>
                      </div>
                          <div className='btn-flo'>
                            <a className='btn btn-sign' href="">Follow</a>
                            <a href="">
                              <img src="https://static.vecteezy.com/system/resources/previews/007/225/136/non_2x/message-icon-outline-style-ui-ux-design-element-vector.jpg" alt="" />
                            </a>
                          </div>
                        
                    </div>
                </div>
            </div>
            <div>
                  <div className="breadcrum">
                      <div className="backgrnd">
                          <div className="item">
                              <h3> Photos</h3>
                          </div>
                          <div className="item">
                              <h3> Videos</h3>
                          </div>
                          <div className="item">
                              <h3> Tagged</h3>
                          </div>
                      </div>
                  </div>
                  <div className="phostst">
                      <div className="grid-base">
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                            <img src={newnew} alt="" />
                      </div>
                  </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile;
