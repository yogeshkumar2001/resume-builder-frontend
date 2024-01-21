import React from 'react'
import { Link } from "react-router-dom";
import banner from "../assests/images/banner2.png"
function HomePage() {
    return (
        <div class="home-page">
            <div class="container text-center">
                <div class="row align-items-start p-0 ">
                    <div class="col p-5">
                        <h1 className="text-start " style={{ "color": "#13287e" }}>Online Resume Builder with creative Templates</h1>
                        <p className="text-start" style={{ "color": "#8888a7" }}>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                        <div class="row align-items-start justify-content-between">
                            <div class="col btn btn-primary m-2">Choose Template</div>
                            <div class="col btn btn-primary m-2">About us</div>
                        </div>
                    </div>
                    <div class="col"><img src={banner} alt="" class="w-100" /></div>
                </div>
            </div>
        </div>

    )
}

export default HomePage