import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";


const Login = () => {

    return (
        <div>
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
                <div className={"grid grid-cols-8 gap-4"}>

                    <div
                        className={"col-start-4 col-end-6 items-center justify-center rounded px-16 pt-16 pb-10  bg-black bg-opacity-75 "}>
                        <h1 className={"text-5xl text-white font-bold"}>Sing In</h1>
                        <input className={"rounded bg-ddcorlor mt-9 h-14 min-w-full"} type={"email"} placeholder={"Email or phone number"}/>
                        <input className={"rounded bg-ddcorlor mt-6 h-14 min-w-full"} type={"password"} placeholder={"Password"}/>
                        <button className={" rounded font-bold bg-netRed mt-9 h-14 text-white text-lg min-w-full "} type={"submit"}>Sing In</button>
                        <div className={"flex"}>
                            <input
                                className="flex justify-start h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-gray-500 checked:border-none focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"/>
                                <label className="flex justify-end form-check-label inline-block text-gray-800"
                                       htmlFor="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            <p>Need help?</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Login;