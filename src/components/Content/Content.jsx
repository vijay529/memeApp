import React from 'react';
import './Content.css';
import ReactPlayer from 'react-player';
import memeVideo from '../../assets/meme-video.mp4';

const Content = () => {
  return (
    <>
        <div className='content'>
            <div className="content_container">
                <div className="content_head">
                    <div className="content_vidContainer">
                        <ReactPlayer url={memeVideo}
                            controls />
                            
                    </div>
                    <div className="content_head_details">
                        <div className="content_details_title">
                            <h1>
                                this is video title
                            </h1>
                        </div>
                        <div className="content_details_other">
                            <span>Uploaded: today</span>
                            <span>Views: 3000</span>
                        </div>
                    </div>
                </div>
                <div className="content_download">
                    <button>Download</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Content