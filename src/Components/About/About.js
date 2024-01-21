import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import check from '../assests/images/check.png';
import cv from '../assests/images/cv.png';
import d1 from '../assests/images/d1.png';
import d2 from '../assests/images/d2.png';
import d3 from '../assests/images/d3.png';

const About = () => {
    return (
        <div className="container">
            <div className="row about-us-container">
                <div className="col-md-12 about-bg text-center">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className=" text-start whoWe-section">
                <div className="col-md-6 whoWe-left-col">
                    <div className="dream-dots">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h4 >We Deliver The Best</h4>

                    <div className="side-feature-list-item">
                        <img src={check} className="check-mark-icon" alt="" />
                        <div className="foot-c-info">Proven CV Templates to increase Hiring Chance</div>
                    </div>
                    <div className="side-feature-list-item">
                        <img src={check} className="check-mark-icon" alt="" />
                        <div className="foot-c-info">Creative and Clean Templates Design</div>
                    </div><div className="side-feature-list-item">
                        <img src={check} className="check-mark-icon" alt="" />
                        <div className="foot-c-info">Free to use. Developed by hiring professionals.</div>
                    </div><div className="side-feature-list-item">
                        <img src={check} className="check-mark-icon" alt="" />
                        <div className="foot-c-info">Fast Easy CV and Resume Formatting</div>
                    </div>
                    <div className="side-feature-list-item">
                        <img src={check} className="check-mark-icon" alt="" />
                        <div className="foot-c-info">Recruiter Approved Phrases.</div>
                    </div>
                    {/* Add more side-feature-list-items as needed */}
                </div>

                <div className="col-md-6 whoWe-right-col ">
                    <div className="welcome-meter wow fadeInUp mt-s text-center" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp", marginTop: "-2%" }}>
                        <img src={cv} className="center-block img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div className="row choose-us text-start">
                <div className="col-md-6 choose-us-left">
                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src={d1} alt="" />
                            </div>
                            <h3><a href="#">Easy Online Resume Builder</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                        </div>
                    </div>
                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src={d2} alt="" />
                            </div>
                            <h3><a href="#">Step By Step Expert Tips</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                        </div>
                    </div>
                    <div className="services-block-four">
                        <div className="inner-box">
                            <div className="icon-img-box">
                                <img src={d3} alt="" />
                            </div>
                            <h3><a href="#">Recruiter Approved Phrases</a></h3>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 choose-us-right">
                    <div className="who-we-contant mt-s">
                        <div className="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4 style={{ fontSize: "2.5rem" }}>Why Choose Our Platform?</h4>
                        <p className="contant-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                        <p className="contant-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!</p>
                        <Link className="btn dream-btn mt-30" to="/templates">Let's build your CV</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

