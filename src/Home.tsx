import React , { useState } from 'react'
import './App.css';
import img2 from "./assets/22.webp";
import img3 from "./assets/img1.jpg";
import img7 from "./assets/heart.png";

import Settings2FillIcon from 'remixicon-react/Settings2FillIcon';
import Notification2FillIcon from 'remixicon-react/Notification2FillIcon';

function HomePage() {

  return (
    <>
    <div className="maidn Home">
      <div className="stuff">
        <div className="header">
            <div className="logo">
                <h1>Piqobe</h1>
            </div>
              <div className="icon">
                      <Settings2FillIcon size={35} className='header-icon'  />
                      <div >
                        <p></p>
                      <Notification2FillIcon  size={35} className='header-icon' />
                      </div>
              </div>
        </div>
        <div className="stories">
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
                <div>
                    <span>+</span>
                </div>
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
          <div className='card'>
            <div className="s-card one">
                <img className='story-image' src={img2} alt="" />
            </div>
                <small>You</small>
          </div>
        </div>

        <div className="posts">
          <div className="post-card">
            <a href="/profile">
              <div className="bg-grey">
                  <div className="bg-white">
                      <div className="p-header">
                          <div className="img">
                            <div className='d-flex'>
                                <img className='img-post' src={img3} alt="" />
                                <div className="name">
                                  <h3>Steve Johnson</h3>
                                  <small>30 Sec Ago</small>
                                </div>
                            </div>
                              <div className="icons">
                                  <p>...</p>
                              </div>
                          </div>

                      </div>
                      <div className="p-body">
                          <div className="posts-stuff">
                              <img className='story-image post' src={img2} alt="" />
                          </div>
                          <div>
                              <div className="footerrr">
                                  <div className="interect">
                                    <img className='interecticon'  src={img7} alt="" />
                                    <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                    <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                  </div>
                                  <div className="save">

                                    <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                  </div>
                              </div>
                                <p>5636363 Liked By Afshint2y</p>
                          </div>
                      </div>
                  </div>
              </div>
            </a>
          </div>
          <div className="post-card">
            <div className="bg-grey">
                <div className="bg-white">
                    <div className="p-header">
                        <div className="img">
                          <div className='d-flex'>
                              <img className='img-post' src={img3} alt="" />
                              <div className="name">
                                <h3>Steve Johnson</h3>
                                <small>30 Sec Ago</small>
                              </div>
                          </div>
                            <div className="icons">
                                <p>...</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-body">
                        <div className="posts-stuff">
                            <img className='story-image post' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="footerrr">
                                <div className="interect">
                                  <img className='interecticon'  src={img7} alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                </div>
                                <div className="save">

                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                </div>
                            </div>
                              <p>5636363 Liked By Afshint2y</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="post-card">
            <div className="bg-grey">
                <div className="bg-white">
                    <div className="p-header">
                        <div className="img">
                          <div className='d-flex'>
                              <img className='img-post' src={img3} alt="" />
                              <div className="name">
                                <h3>Steve Johnson</h3>
                                <small>30 Sec Ago</small>
                              </div>
                          </div>
                            <div className="icons">
                                <p>...</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-body">
                        <div className="posts-stuff">
                            <img className='story-image post' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="footerrr">
                                <div className="interect">
                                  <img className='interecticon'  src={img7} alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                </div>
                                <div className="save">

                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                </div>
                            </div>
                              <p>5636363 Liked By Afshint2y</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="post-card">
            <div className="bg-grey">
                <div className="bg-white">
                    <div className="p-header">
                        <div className="img">
                          <div className='d-flex'>
                              <img className='img-post' src={img3} alt="" />
                              <div className="name">
                                <h3>Steve Johnson</h3>
                                <small>30 Sec Ago</small>
                              </div>
                          </div>
                            <div className="icons">
                                <p>...</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-body">
                        <div className="posts-stuff">
                            <img className='story-image post' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="footerrr">
                                <div className="interect">
                                  <img className='interecticon'  src={img7} alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                </div>
                                <div className="save">

                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                </div>
                            </div>
                              <p>5636363 Liked By Afshint2y</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="post-card">
            <div className="bg-grey">
                <div className="bg-white">
                    <div className="p-header">
                        <div className="img">
                          <div className='d-flex'>
                              <img className='img-post' src={img3} alt="" />
                              <div className="name">
                                <h3>Steve Johnson</h3>
                                <small>30 Sec Ago</small>
                              </div>
                          </div>
                            <div className="icons">
                                <p>...</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-body">
                        <div className="posts-stuff">
                            <img className='story-image post' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="footerrr">
                                <div className="interect">
                                  <img className='interecticon'  src={img7} alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                </div>
                                <div className="save">

                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                </div>
                            </div>
                              <p>5636363 Liked By Afshint2y</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="post-card">
            <div className="bg-grey">
                <div className="bg-white">
                    <div className="p-header">
                        <div className="img">
                          <div className='d-flex'>
                              <img className='img-post' src={img3} alt="" />
                              <div className="name">
                                <h3>Steve Johnson</h3>
                                <small>30 Sec Ago</small>
                              </div>
                          </div>
                            <div className="icons">
                                <p>...</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-body">
                        <div className="posts-stuff">
                            <img className='story-image post' src={img2} alt="" />
                        </div>
                        <div>
                            <div className="footerrr">
                                <div className="interect">
                                  <img className='interecticon'  src={img7} alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />
                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png" alt="" />
                                </div>
                                <div className="save">

                                  <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/6165/6165217.png" alt="" />
                                </div>
                            </div>
                              <p>5636363 Liked By Afshint2y</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      <div className="nav-bot">
          <div className="items">
              <img className='interecticon'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMIs1_HnWg95eQji7byPtP0f13qP__xTLAvd7L9Jg3w&s" alt="" />
              <img className='interecticon'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlMuOOiczsrXj5k9lFTvyYqvN5kOZCRJFwyByz_wTmg&s" alt="" />
              <div>
                <span className=''>+</span>
              </div>
              <img className='interecticon'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWXSoATsN-Vim--fmySVJgXPLVZ1iATGaO2pMzxiJQceQLgpXitgtZ70PZ_mx8LFMoAM&usqp=CAU" alt="" />
              <a href="/profile">
                <img className='interecticon'  src="https://cdn-icons-png.flaticon.com/512/51/51256.png" alt="" />
              </a>

          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default HomePage;
