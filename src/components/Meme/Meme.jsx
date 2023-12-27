import React from 'react';
import './Meme.css';
import playButton from '../../assets/play-button-svgrepo-com.svg';
import downloadLogo from '../../assets/download-svgrepo-com.svg';
import viewsLogo from '../../assets/103796_view_icon.png';
import { Link } from 'react-router-dom';

const Meme = (props) => {
  return (
    <>
      <div className='meme'>
        <div className="meme_head">
          <div className="meme_head_thumbnail">
            <img src={props.thumbnail} alt="thumbnail" />
          </div>
          <div className="meme_head_play">
            <Link to={`/meme/${props.vidId}`}><img src={playButton} alt="play" /></Link>
          </div>
        </div>
        <div className="meme_content">
          <div className='meme_content_title'>
            <h4>{props.title}</h4>
          </div>
          <div className="meme_content_details">
          <div >
            {props.time}
          </div>
          <div className='meme_content_details_download'>
            <img src={downloadLogo} alt="download" />
          </div>
          <div className='meme_content_details_views'>
            <span>{props.views}</span>
            <img src={viewsLogo} alt='views'/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Meme