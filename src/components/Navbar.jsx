import React from "react";
import {BeakerIcon} from '@heroicons/react/solid'
import logo from '../assets/Netflix_2015_logo.svg'

const Navbar = () => {

    return (

        <div className="screen/2 object-cover w-full    h-2/3	"
             style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/226e5fad-8b2f-47b6-bf0f-bc07efcd9a08/FR-fr-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg)`}}>
            <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <img className={"w-1/5 h-12 m-1"} src={logo}/>

                    <div className="w-full md:block md:w-auto">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <select className={"text-white   bg-transparent rounded h-12 "}>
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
            <h1 className={"text-5xl text-white font-bold text-center"}>Unlimited movies, TV </h1>
            <h1 className={"text-5xl text-white font-bold text-center"}>shows, and more.</h1>

            <h3 className={"text-2xl text-white font-bold text-center"}>Watch anywhere. Cancel anytime.</h3>
            <h5 className={"text-1xl text-white font-bold text-center"}>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>





    )
}

export default Navbar;