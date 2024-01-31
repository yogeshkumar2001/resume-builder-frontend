import React from 'react'
import UserImg from "../assests/images/default user.png"
import skin from "../assests/images/skin1.png"
function Profile() {
    let containerCss = {
        width: " 150px",
        // height: "100%",
        margin: "2px",
        padding: "4px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    }

    let containerHtml = <div className="" style={{ ...containerCss }}>
        <img src={skin} alt="" />
    </div>
    return (
        <div className="container mt-5 ">
            <div className="row d-flex" style={{ height: "70vh" }}>
                <div className="col-3 bg-primary h-100">
                    <div class="text-center d-flex mt-5 justify-content-center">
                        <img src={UserImg} class="rounded" alt="..." />
                    </div>
                    <h1>Yogesh Kumar</h1>
                    {/* <ImgC></ImgC> */}
                </div>
                <div className="col-9 border h-100 p2">
                    <h1>Your selected templates</h1>
                    <div className="d-flex flex-wrap  overflow-auto" style={{ height: "70vh" }}>
                        {containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}{containerHtml}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile