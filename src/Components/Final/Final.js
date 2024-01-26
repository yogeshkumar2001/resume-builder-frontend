import React, { useRef } from 'react';
import Skin1 from '../Skins/Skin1';
import "./final.css";
import { connect } from 'react-redux';
import generatePDF, { usePDF } from 'react-to-pdf';
import { toPng } from 'html-to-image';
function Final(props) {
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
    // const pdfRef = useRef();
    const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf', options: options });
    const getTargetElement = () => document.getElementById('content-id');
    
    function Handler(){
        // toPng(pdfRef.current, { cacheBust: true, })
        // .then((dataUrl) => {
        //   const link = document.createElement('a')
        //   link.download = 'my-image-name.png'
        //   link.href = dataUrl
        //   link.click()
        // })
        // .catch((err) => {
        //   console.log(err)
        // })
    }
    return (
        <div className="resume-page">
            <div className="resume-buttons">
                <button className="btn-success" onClick={() => { toPDF() }}>
                    Download
                </button>
                <button className="btn btn-primary">
                    Save
                </button>
            </div>
            <div className="resume-template card mt-2">
                <Skin1 userDetails={props.userDetails} targetRef={targetRef} ></Skin1>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails };
}

export default connect(mapStateToProps, null)(Final);