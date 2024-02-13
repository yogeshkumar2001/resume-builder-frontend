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
    useEffect(async () => {
        let response  = await getCallAPI({path:getSelectedResumesById.replace("replace_id" , props?.templateInfo?.resumeId)});
        setUserData(JSON.parse(response.data.data.userDetails))
    }, [])
    async function apiCall(obj) {
        let response = await postCallAPI({ path: saveResumePath, Data: obj })
        return response
    }
    async function saveResumeHandler() {

        let postData = {
            skinId: props.templateInfo.id,
            skinPath: props.templateInfo.path,
            userDetails: JSON.stringify(props.userDetails),
            userId: props.userData.id
        }
        let resObj = await apiCall({ path: saveResumePath, Data: postData });
        let message = resObj.status == 200 ? "Resume Saved Successfully" : "Failed to save resume, Please try again in sometimes."
        let type = resObj.status == 200 ? "success" : "error"
        notify(message, type)
    }
    let skinContainer = getResumeTemplate(props.templateInfo.id,props,targetRef)

    return (
        <div className="resume-page">
            <div className="resume-buttons">
                <button className="btn-success btn border-0" onClick={() => { toPDF() }}>
                    Download
                </button>
                <button className="btn btn-primary" onClick={saveResumeHandler}>
                    Save
                </button>
            </div>
            <div className="resume-template card-final mt-2">
                {userData !=  null ? skinContainer : <Loading/>}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails, templateInfo: state.choosedTemplate, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, null)(ViewResume);