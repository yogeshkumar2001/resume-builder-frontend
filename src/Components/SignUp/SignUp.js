import React, { useState } from 'react'
import { postCallAPI } from '../API/helper';
import { createUser } from '../API/ApiPaths';
// import "./signup.css"
function SignUp() {

   async function saveFormData(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formDatObj = {};
        formData.forEach((val,key)=>{
            formDatObj[key] = val;
        })
        console.log(formDatObj)
        if(formDatObj.password != formDatObj.confirmPassword) return "password not matched"
        let responseData = await callAPI(formDatObj); 
        console.log(responseData);
    }
    async function callAPI(data){
        let response  = await postCallAPI({path:createUser, Data:data});
        return response;
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create an account
                    </p>
                    <form onSubmit={(e) => { saveFormData(e) }}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Your Username
                            </label>
                            <input
                                placeholder="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="username"
                                type="text"
                                name="name"
                                required
                            />
                        </div><div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Your Email
                            </label>
                            <input
                                placeholder="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="username"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Confirm password
                            </label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="••••••••"
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                required
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                    type="checkbox"
                                    aria-describedby="terms"
                                    id="terms"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-light text-gray-500 text-gray-300">
                                    I accept the
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline text-primary-500 ml-1"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                            type="submit"
                        >
                            Create an account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp