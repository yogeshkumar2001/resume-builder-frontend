import React, { useState } from 'react';
import "./contact.css";
import detailForms from '../formConfig/FormConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseStep, setUserFormData } from '../../Redux/action';

function Details(props) {
    const [formStep, setformStep] = useState(props.step.value);
    const [formData, setFormData] = useState(props.userDetails);
    console.log(props)
    let formToDisplay = detailForms[formStep];

    function nextFormHandler(e) {
        console.log(formData)
        e.preventDefault();
        if (formStep < detailForms.length - 1) {
            props.increaseStep({ value: formStep + 1 });
            setformStep(formStep + 1);
            props.setUserFormData(formData)
        }
    }

    function backFormHandler(e) {
        e.preventDefault();
        if (formStep > 0) {
            props.increaseStep({ value: formStep - 1 });
            setformStep(formStep - 1);
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    return (
        <div className="container">
            <div className="d-flex">
                <span onClick={(e) => { backFormHandler(e) }}><i className="fa-solid fa-arrow-left"></i></span>
            </div>
            <div className="row">
                <div className="col">
                    <form className="form-card" onSubmit={(e) => { nextFormHandler(e) }}>

                        <div className="row justify-content-between text-left">
                            {Object.entries(formToDisplay).map(([key, value]) => (
                                
                                <div className="form-group col-sm-6 flex-column d-flex" key={key}>
                                    <label className="form-control-label px-3">{value.label}<span className="text-danger"> *</span></label>
                                    <input
                                        type={value.type}
                                        id={key}
                                        name={key}
                                        defaultValue={props?.userDetails[key] != undefined ? props.userDetails[key] : "" }
                                        placeholder={value.placeholder}
                                        onBlur={handleInputChange}
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row justify-content-end">
                            <div className="w-100">
                                <button type="submit" className="btn-block btn-primary w-100" >Next</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <div className="skin-image d-flex justify-content-center">
                        <div className="skin-img-container">
                            <img src={props?.TemplateData.path} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseStep, setUserFormData
    }, dispatch);
}

function mapStateToProps(state) {
    return { TemplateData: state.choosedTemplate, step: state.detailsStep, userDetails: state.userFormDetails };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);