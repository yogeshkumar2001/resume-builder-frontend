import React from 'react'
import "./img.css"
import UserImg from "../assests/images/default user.png"
import UserBg from "../assests/images/user-bg.png"

function ImgContainer() {
    return (
        <div className="card">
            <div className="card__img">
                <img src={UserBg} className='h-100 w-100' alt="" />
            </div>
            <div className="card__avatar border-round">
                <img src={UserImg} alt="" />
            </div>
            <div className="card__title">Cameron Williamson</div>
            <div className="card__subtitle">Web Development</div>
            <div className="card__wrapper">
                <button className="card__btn">Button</button>
                <button className="card__btn card__btn-solid">Button</button>
            </div>
        </div>
    )
}

export default ImgContainer