import React from 'react'
import "./skin1.css"
function skin1(props) {
    let obj = props.userDetails;
    let skillsArr = props.userDetails.skills.split(",");
    let achievementArray = props.userDetails.achievement.split(",");
    console.log(props)
    return (
        <div className="container bg-white skin-container" id='content-id' ref={props.targetRef}>
            <div className="header main-header">
                <h1>{obj.fName}</h1>
                <p className='m-0'>{obj.profession}</p>
            </div>
            <div className="row m-0">
                <div className="col " style={{ backgroundColor: "#25354A" }}>
                    <div className="box">
                        <h5 className="main-heading">Professional experience</h5>
                        <div className="text-white">
                            {skillsArr.map((v) => {
                                return <p>{v}</p>
                            })}
                        </div>
                    </div>
                    <div className="box">
                        <h5 className="main-heading">Personal Skills</h5>
                        <div className="text-white">
                            <div className="text-white">
                                <div className="text-white">
                                    <p>skin1</p>
                                    <p>skin1</p>
                                    <p>skin1</p>
                                    <p>skin1</p>
                                    <p>skin1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h5 className="main-heading">Contact info</h5>
                        <div className="text-white">
                            <span><p>Email: {obj.email}</p></span>
                            <span><p>Phone No : {obj.phNumber}</p></span>
                        </div>
                    </div>
                    {/* <div className="box">
                        <h5 className="main-heading">references</h5>
                        <div className="text-white">
                            <p>skin1</p>
                            <p>skin1</p>
                        </div>

                    </div> */}
                </div>
                <div className="col">
                    <div className="box  ">
                        <h5 className="main-heading">Job Profile</h5>
                        <span><p>{obj.summary}</p></span>
                        <div className="d-flex justify-content-between">
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h6 className="main-heading">Experience</h6>
                        <span><h4>{obj.jobTitle}</h4></span>
                        <span><p>{obj.position}</p></span>
                        <span><p>{obj.aboutCompany}</p></span>
                        <div className="d-flex justify-content-between">
                            <p>{obj.workStarted}</p>
                            <p>{obj.workEndDate}</p>
                        </div>

                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h5 className="main-heading">Education</h5>
                        <h4>{obj.collegeName}
                        </h4>
                        <p>{obj.fieldOfStudy}</p>
                        <div className="d-flex justify-content-between">
                            <p>{obj.graduationStarted}</p>
                            <p>{obj.graduationDate}</p>
                        </div>  
                        <h4>{obj.collegeName}
                        </h4>
                        <p>{obj.fieldOfStudy}</p>
                        <div className="d-flex justify-content-between">
                            <p>{obj.graduationStarted}</p>
                            <p>{obj.graduationDate}</p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h5 className="main-heading">Awards</h5>
                        {achievementArray.map((v)=>{
                            return <p>{v}</p>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default skin1