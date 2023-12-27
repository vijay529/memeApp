import React, { useState } from 'react';
import './Navbar.css';
import search_button from '../../assets/icons8-search.svg';
import { Link } from 'react-router-dom';


const Nabar = () => {
  const [visible, setVisible] = useState(false);
  const [activespan, setActivespan] = useState(1)
  const spanArray = ['Trending', 'Latest', 'Most Watched'];

  return (
    <>
        <div className="navbar">
            <div className="nav_container">
              <div className="nav_left">
                <ul className="nav_left_items">
                  <li><Link to="/">Home</Link></li>
                </ul>
              </div>
              <div className="nav_mid">
                <div className="nav_search">
                  <input autoComplete='off' type="search" name="search" id="search_button" placeholder='search...'/>
                  <button><img src={search_button} alt="search" /></button>
                </div>
              </div>
              <div className="nav_right">
                <div className={visible?"nav_filter menu_bar":"nav_filter"} onClick={()=>{
                  visible?setVisible(false):setVisible(true)
                }}>
                  <li></li>
                  <li></li>
                  <li></li>
                </div>
              </div>
            </div>
        </div>
        <div className={visible?"navFloat":"navFloat navFloat_hide"}>
          <div className="navFloat_container">
            <div className="navFloat_head">
              <span>Filter :</span>
            </div>
            <div className="navFloat_content">
              {spanArray.map((span,index)=>{
                return <span key={index} className={index===activespan?'navFloat_content_active':''} onClick={()=>{setActivespan(index)}}>{span}</span>
              })}
            </div>
          </div>
        </div>
    </>
  )
}

export default Nabar