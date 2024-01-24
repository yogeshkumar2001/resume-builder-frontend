import React, { useState } from 'react'
import "./contact.css"
import detailForms from '../formConfig/FormConfig'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseStep } from '../../Redux/action'
function Details(props) {
    const [formStep, setformStep] = useState(props.step.value)

    let formToDisplay = detailForms[formStep]
    function nextFormHandler(e) {
        e.preventDefault();
        props.increaseStep({ value: (formStep + 1) })
        setformStep(formStep + 1)
    }
    console.log(props)
    function backFormHandler(e) {
        e.preventDefault();
        props.increaseStep({ value: (formStep - 1) })
        setformStep(formStep - 1)
    }
    return (
        <div className="container">
            <div className="d-flex">
                <span onClick={(e) => { backFormHandler(e) }}><i class="fa-solid fa-arrow-left"></i></span>

            </div>
            <div className="row">
                <div className="col">
                    <form class="form-card" >

                        <div className="row justify-content-between text-left">
                            {Object.entries(formToDisplay).map(([key, value]) => (
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">{value.label}<span className="text-danger"> *</span></label>
                                    <input
                                        type={value.type}
                                        id={key}
                                        name={key}
                                        placeholder={value.placeholder}
                                    // onBlur={() => handleInputChange({ target: { name: key, value: formData[key] } }, value.validation)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row justify-content-end">
                            <div className="w-100">
                                <button className="btn-block btn-primary w-100" onClick={(e) => { nextFormHandler(e) }}>Next</button>
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
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseStep
    }, dispatch)
}
function mapStateToProps(state) {
    return { TemplateData: state.choosedTemplate, step: state.detailsStep }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)