import React, { useEffect, useRef } from 'react';
import Skin1 from '../Skins/Skin1';
// import "./final.css";
import { connect } from 'react-redux';
import generatePDF, { usePDF } from 'react-to-pdf';
import { toPng } from 'html-to-image';
import { getCallAPI, postCallAPI } from "../API/helper"
import { getSelectedResumesById, saveResumePath } from '../API/ApiPaths';
import { notify } from '../Notify/notify';
import Loading from '../Loading/Loading';
import { getResumeTemplate } from '../Helper/helper';
function ViewResume(props) {
    const[userData,setUserData] = React.useState(null);
   React.useEffect(()=>{
        callAPI()
   },[])
    const options = {
        // default is `save`
        method: 'open',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        // resolution: Resolution.HIGH,
        page: {
            // margin is in MM, default is Margin.NONE = 0
            margin: 0,
            format: 'letter',
            // default is 'portrait'
        },

    };
    
    const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf', options: options });
   
    async function callAPI(){
        console.log("ergerg")
        let response  = await getCallAPI({path:getSelectedResumesById.replace("replace_id" , props?.templateInfo?.resumeId)});
        setUserData(JSON.parse(response.data.data.userDetails))
        console.log(JSON.parse(response.data.data.userDetails))
    }
    async function deleteResumeHandler() {

    }
    console.log(props)
    if (!props.userData.auth) {
        window.location = "/login";
        return;
    }
    let userDataObj = {
        userDetails:userData,templateInfo:{id:props?.templateInfo?.resumeId}
    }
    let skinContainer =<Loading></Loading>
    skinContainer = userData && getResumeTemplate(props.templateInfo.id,userDataObj,targetRef)
   
    return (
        <div className="resume-page">
            <div className="resume-buttons">
                <button className="btn-success btn border-0" onClick={() => { toPDF() }}>
                    Download
                </button>
                <button className="btn btn-danger" onClick={deleteResumeHandler}>
                    Delete
                </button>
            </div>
            <div className="resume-template card-final mt-2">
                {skinContainer }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails, templateInfo: state.choosedTemplate, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, null)(ViewResume);