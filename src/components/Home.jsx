import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";

const Home = () => {


    return (
        <div>

            <main className={"min-h-screen py2  "} style={{'background-image':'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/226e5fad-8b2f-47b6-bf0f-bc07efcd9a08/FR-fr-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg)'}}>
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
                                        Login
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={"min-h-screen flex flex-col items-center justify-center "}>
                    <h1 className={"text-5xl items-center justify-center px-20 text-center text-white font-bold mt-4 mb-8 max-w-2xl"}>Unlimited movies, TV shows, and more. </h1>

                    <h3 className={"text-2xl text-white  my-4"}>Watch anywhere. Cancel anytime.</h3>
                    <p className={"text-1xl font-bold text-white "}>Ready to watch? Enter your email to create or
                        restart your membership.</p>

                    <div className={"flex mt-4"}>
                        <input className={"bg-white p-4 text-lg min-w-[400px]"} placeholder={"Email address"}/>
                        <button className={"font-bold bg-netRed text-white text-lg px-8"}>Get Started ></button>
                    </div>
                </div>

            </main>
        </div>

    )
}


export default Home;