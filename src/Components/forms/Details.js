import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"
import skinPng from "../assests/images/skin1.png"
import { contactForm } from '../formConfig/FormConfig'
function Details(prop) {
    
    return (
        <div className="container">
            <div className="d-flex">
            <span><i class="fa-solid fa-arrow-left"></i></span>
            
            </div>
            <div className="row">
                <div className="col">
                    <form class="form-card" onsubmit="event.preventDefault()">

                        <div className="row justify-content-between text-left">
                            {Object.entries(contactForm).map(([key, value]) => (
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
                                <button type="submit" className="btn-block btn-primary w-100">Next</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <div className="skin-image d-flex justify-content-center">
                        <div className="skin-img-container">
                            <img src={skinPng} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details