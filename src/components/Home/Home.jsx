import React from 'react';
import './Home.css';
import Meme from '../Meme/Meme.jsx'

const Home = () => {

  let cardInfo = [
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"This is card 1", views:3000, time:"today",vidUrl:"https://memes.co.in/meme/video/1009/confused-black-dog-meme-download",id:'memevid9024'}, 
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"this is card2", views:30000, time:"today",vidUrl:"video url"},
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"this is card3", views:300000, time:"today",vidUrl:"video url"},
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"this is card3", views:300000, time:"today",vidUrl:"video url"},
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"this is card3", views:300000, time:"today",vidUrl:"video url"},
    {thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM239mDYc9HbF3te0WUKNgpe8qp_-cgP-5YEWs_RrPaLqYetgoItXQ9cY3ZFH3sSgN-Q&usqp=CAU", title:"this is card3", views:3000000, time:"today",vidUrl:"video url"}
]

  return (
    <div className='home'>
        <div className="home_intro">
          <span>heading</span>
        </div>
        <div className='home_container'>
            <div className="home_content">
              {
                cardInfo.map((obj,index)=>{
                  return <Meme thumbnail={obj.thumbnail} vidUrl={obj.vidUrl} title={obj.title} views={obj.views} time={obj.time} vidId={obj.id}  key={index}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Home