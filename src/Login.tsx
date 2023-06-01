import React , { useState } from 'react'
import './App.css';
import img1 from "./assets/center.jpg";
import img2 from "./assets/22.webp";
import img3 from "./assets/img1.jpg";
import img4 from "./assets/p1.png";
import img5 from "./assets/p2.png";
import img6 from "./assets/sarah-parmenter.png";
import img7 from "./assets/heart.png";
import RiUserAddLine from 'remixicon-react/UserAddLineIcon';

function Login() {

  return (
    <>
    <div className="main">
      <div className="items">
          <div className="header">
              <h2>Best Social App To <br/> Make New Friends</h2>
              <h6>Find People WIth The Same <br/>Interests As you</h6>
          </div>
          <div className="body">
              <div className="outer">
                <div className="over-image">
                    <img className='absolute1' src={img3} alt="" />
                    {/* <img className='absolute2' src={img6} alt="" /> */}
                    <RiUserAddLine className='absolute2'  />
                </div>
                          
                  <div className="inner">
                      <div className="inner-image">
                            <img className='img-center' src={img1} alt="" />
                      </div>
                  </div>
                  <div className="over-image">
                    <img className='absolute1 left'  src={img7} alt="" />
                    <img className='absolute2 right' src={img6} alt="" />
                    {/* <ChatHeartLineIcon className='absolute1 left'  /> */}
                </div>
              </div>
          </div>
          <div className="footer">
              <a className='btn btn-login' href="/home">Log In</a>
              <a className='btn btn-sign' href="/home">Sign Up</a>
          </div>
      </div>
    </div>
    </>
  )
}

export default Login;
