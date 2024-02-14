import React, { useCallback, useRef, useState } from 'react';
import Skin1 from '../Skins/Skin1';
import Skin2 from '../Skins/Skin2';
// import Skin3 from '../Skins/Skin4';
import Skin4 from '../Skins/Skin4';
// import Skin5 from '../Skins/Skin5';
// import Skin6 from '../Skins/Skin6';
// import Skin7 from '../Skins/Skin7';
// import Skin8 from '../Skins/Skin8';
import "./final.css";
import { connect } from 'react-redux';
import generatePDF, { usePDF } from 'react-to-pdf';
import { toPng } from 'html-to-image';
import { postCallAPI } from "../API/helper"
import { saveResumePath } from '../API/ApiPaths';
import { notify } from '../Notify/notify';
import Loading from "../Loading/Loading"
import { getResumeTemplate } from '../Helper/helper';
import { useEffect } from 'react';
function Final(props) {

    const [resumeImgUrl, setResumeImageUrl] = useState(null)
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
    const pdfRef = useRef();
    const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf', options: options });

    
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

    const onButtonClick = () => {
        let ele = document.getElementById(props.templateInfo.id);
        console.log(ele)
        if (ele === null) {
            notify("something went wrong , please try again later", "error")
            return;
        }

        toPng(ele, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'resume.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    
    let SkinContainer = <Loading />
    SkinContainer = getResumeTemplate(props.templateInfo.id, props, targetRef);
    console.log(props.userData.auth)
    if (!props.userData.auth) {
        window.location = "/login";
        return;
    }

    let isMobile = window.matchMedia("(max-width:500px)").matches
    return (
        <div className="resume-page">
            <div className="resume-buttons">
                <button className="btn-success btn border-0" onClick={() => { toPDF() }}>
                    Download
                </button>
                <button className="btn-success btn border-0" onClick={() => { onButtonClick() }}>
                    Download Png
                </button>
                <button className="btn btn-primary" onClick={saveResumeHandler}>
                    Save
                </button>
            </div>
            <div className="resume-template card-final mt-2 " >

                {SkinContainer}

            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails, templateInfo: state.choosedTemplate, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, null)(Final);