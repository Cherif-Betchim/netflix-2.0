import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";


const Login = () => {

    return (
        <main className={"min-h-screen py2"}
              style={{'background-image': 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/226e5fad-8b2f-47b6-bf0f-bc07efcd9a08/FR-fr-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg)'}}>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <img className={"w-1/5 h-12 m-1"} src={logo}/>

                    <div className="w-full md:block md:w-auto">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <select className={"text-white    bg-transparent rounded h-12 "}>
                                    <option className={"fill-gray-600"}>Arabic</option>
                                    <option className={"fill-gray-600"}>English</option>
                                    <option className={"fill-gray-600"}>French</option>
                                </select>
                            </li>
                            <li>
                                <button className="bg-netRed  text-white font-bold py-2 px-4 rounded   h-12">
                                    sing in
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"bg-black-600 bg-opacity-25 w-1/4 h-96 min-h-screen flex flex-col items-center justify-center py2"}>
                <div className={"flex flex-col py-16 pt-14 pb-10"}>
                    <div>
                        <h1 className={"text-white text-5xl font-bold  w-full mb-5 "}>Sing in</h1>
                    </div>
                    <div>
                        <input className={"rounded h-16  w-full"} type={"email"} placeholder={"Email or phone number"}/>
                    </div>

                    <div>
                        <input className={"mt-3 rounded h-16 w-full"} type={"password"} placeholder={"Password"}/>
                    </div>

                    <div className={"mb-5"}>
                        <button className={"mt-6 bg-netRed text-white font-bold py-2 rounded h-12 w-full "}
                                type={"submit"}> sing in
                        </button>
                    </div>
                    <div className={"flex flex-wrap relative mb-16"}>
                        <div>
                            <label className={"flex"}>
                                <input type="checkbox"/>
                                My Value
                            </label>
                            <p className={"text-footerText font-bold"}>New to Netflix? <a href={"foobar"}>Sing up now</a></p>
                        </div>

                    </div>
                    <p className={"text-footerText font-bold"}>This page is protected by Google reCAPTCHA to ensure you're not a
                        bot <a href={"foobar"}>Learn
                            more</a>
                    </p>
                </div>
            </div>


        </main>)

}


export default Login;