import React from 'react'
import skin1 from "../assests/images/skin1.png"
import skin2 from "../assests/images/skin2.png"
import skin3 from "../assests/images/skin3.svg"
import skin4 from "../assests/images/skin4.svg"
import skin5 from "../assests/images/skin5.svg"
import skin6 from "../assests/images/skin6.svg"
import skin7 from "../assests/images/skin7.svg"
import skin8 from "../assests/images/skin8.svg"
import { Link } from 'react-router-dom'
import "./template.css"
import { updateTemplateData } from '../../Redux/action'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
function Template({updateTemplateData,TemplateData}) {
    console.log(TemplateData)
    let skinsArr = [
        { id: "skin1", path: skin1 },
        { id: "skin2", path: skin2 },
        { id: "skin3", path: skin3 },
        { id: "skin4", path: skin4 },
        { id: "skin5", path: skin5 },
        { id: "skin6", path: skin6 },
        { id: "skin7", path: skin7 },
        { id: "skin8", path: skin8 },]


    function updateTemplateDataHandler(e){
        e.preventDefault();
        console.log(e);
        updateTemplateData(1);
    }    
    return (
        <div className="templates-container">
            <div className="templates-welcome">
                <div className="temp-wel-cont">
                    <h1>Our Templates</h1>
                </div>
            </div>
            <div className="templates">
                {skinsArr.map((skin) => (
                    <div key={skin.id} className="template">
                        <div className="template-image">
                            <img src={skin.path} alt="" />
                        </div>
                        <Link onClick={(e)=>{updateTemplateDataHandler(e)}}>
                            <div
                                className="choose-template btn btn-primary"
                                id={skin.id}
                                path={skin.path}
                            // onClick={(e) => handleChooseTemplate(e)}
                            >
                                Choose Template
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateTemplateData
    },dispatch)

}
function mapStateToProps(state) {
    return {TemplateData:state}
}
export default connect(mapStateToProps,mapDispatchToProps)(Template)