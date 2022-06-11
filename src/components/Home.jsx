import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";
import plusIcon from "../assets/icons8-plus-50.png"

const Home = () => {


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
                <div className={"min-h-screen flex flex-col items-center justify-center border-b-blue-200"}>
                    <h1 className={"text-5xl items-center justify-center px-20 text-center text-white font-bold mt-4 mb-8 max-w-2xl"}>Unlimited
                        movies, TV shows, and more. </h1>

                    <h3 className={"text-2xl text-white  my-4"}>Watch anywhere. Cancel anytime.</h3>
                    <p className={"text-1xl font-bold text-white "}>Ready to watch? Enter your email to create or
                        restart your membership.</p>

                    <div className={"flex mt-4"}>
                        <input type={"email"} className={"bg-white p-4 text-lg min-w-[400px]"}
                               placeholder={"Email address"}/>
                        <button className={"font-bold bg-netRed text-white text-lg px-8"}>Get Started ></button>
                    </div>
                </div>


            </main>

            <div className={'border-y-8 border-blackBorder items-center justify-center  flex flex-wrap'}>
                <div>
                    <h1 className={"text-5xl font-bold text-white mb-8"}>Enjoy on your TV.</h1>
                    <p className={"text-2xl font-bold text-white break-words max-w-md"}>Watch on Smart TVs, Playstation,
                        Xbox,
                        Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div>
                    <img className={"items-center justify-center"}
                         src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"}>
                        {/*<video>*/}
                        {/*    <source*/}
                        {/*        src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"} type={"video/mp4"}/>*/}
                        {/*</video>*/}
                    </img>
                </div>
            </div>


            <div
                className={"mb-20 border-b-8 border-blackBorder items-center justify-center grid grid-cols-2  flex flex-wrap relative"}>
                <div>
                    <img
                        src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}/>
                    <div
                        className="bg-black border-blackBorder mx-32 bottom-5 mx-1/2 items-center absolute h-32 w-96 p-4 border-4 rounded-lg flex flex-wrap">
                        <img className={"h-24 "}
                             src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"}/>
                        <p className={"text-center items-center px-4 py-8 text-white font-bold"}>Downloading...</p>
                        <img className={"h-16 w-16 absolute right-0 my-3"}
                             src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"}/>
                    </div>
                </div>

                <div className={" items-center justify-center"}>
                    <h1 className={"text-5xl font-bold text-white max-w-xl "}>Download your shows to watch offline.</h1>
                    <p className={"text-2xl text-white"}>Save your favorites easily and always have something to
                        watch.</p>

                </div>
            </div>
            <div className={"border-b-8 border-blackBorder mb-20"}>
                <div className={" items-center justify-center grid grid-cols-2 flex flex-wrap mx-auto max-w-screen-lg"}>
                    <div className={"flex flex-wrap"}>
                        <h1 className={"text-5xl font-bold text-white py-3"}>Watch everywhere.</h1>
                        <p className={"text-2xl text-white max-w-xl"}>Stream unlimited movies and TV shows on your
                            phone, tablet, laptop, and TV without paying more.</p>
                    </div>
                    <div className={""}>
                        <img
                            src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"}/>
                    </div>

                </div>
            </div>

            <div className={"border-b-8 border-blackBorder mb-20"}>
                <div className={"items-center justify-center grid grid-cols-2 flex flex-wrap gap-5"}>
                    <div className={"relative"}>
                        <img className={"w-6/12 ml-80 left-0 "}
                             src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"}/>
                    </div>
                    <div>
                        <h1 className={"text-5xl text-white font-bold py-3"}>Create profiles for kids.</h1>
                        <p className={"text-white text-2xl max-w-xl"}>Send kids on adventures with their favorite
                            characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>

            <div className={"text-white  items-center justify-center max-w-fit"}>
                <h1 className={"text-6xl font-bold mb-5 text-center"}> Frequently asked questions</h1>
                <div className={"flex flex-wrap justify-center items-center "}>
                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap bg-ddcorlor pt-5 mt-5 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>What is Netflix?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap bg-ddcorlor mt-2 pt-3 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>How much does Netflix cost?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap mt-2 bg-ddcorlor pt-3 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>Where can i watch?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap bg-ddcorlor mt-2 pt-3 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>How do i cancel?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap mt-2 bg-ddcorlor pt-3 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>What can i watch on Netflix?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                    <div
                        className={"bg-netRed w-3/5 flex flex-wrap mt-2 bg-ddcorlor pt-3 pr-9 pb-3 pl-5 mb-px relative"}>
                        <h1 className={"text-4xl"}>Is Netflix good for kids?</h1>
                        <img className={"absolute top-1/2 right-4"} src={plusIcon} width={"30px"}/>
                    </div>

                </div>


            </div>
            <div>
                <div className={"text-white justify-center text-center mt-9"}>
                    <p className={"text-2xl "}>Ready to watch? Enter your email to create or restart your
                        membership.</p>
                    <div className={"flex flex-wrap justify-center items-center mt-9"}>
                        <input type={"email"} className={"bg-white p-4 text-lg h-[70px] min-w-[500px]"}
                               placeholder={"Email address"}/>
                        <button className={"bg-netRed text-white font-bold py-2 px-4  h-[70px]  h-12m "}>Get started
                        </button>
                    </div>
                </div>
                <div className={"border-y-8 border-blackBorder mt-9 mb-9"}/>
            </div>

            <p className={"text-footerText text-2xl mb-9 pl-96"}>Questions? Call (+33) 0805-543-064</p>

            <div className={"flex text-footerText gap-y-2.5 gap-28"}>
                <div className={"pl-96 "}>
                    <div>FAQ</div>
                    <div>Investor Relations</div>
                    <div>Ways to watch</div>
                    <div>Corporate Informations</div>
                    <div>Legal Notices</div>

                </div>

                <div className={"mt"}>
                    <div>Help Center</div>
                    <div>Jobs</div>
                    <div>Term of Use</div>
                    <div>Contact us</div>
                    <div>Only on Netflix</div>
                </div>

                <div>
                    <div>Account</div>
                    <div>Redeem Gift Cards</div>
                    <div>Privacy</div>
                    <div>Speed Test</div>
                </div>

                <div>
                    <div>Media Center</div>
                    <div>Buy Gift Cards</div>
                    <div>Cookie Preferences</div>
                    <div>Legal Guarantee</div>
                </div>


            </div>
            <div className={"mt-9 pl-80"}>
                <li>
                    <select className={"text-white    bg-transparent rounded h-12  "}>
                        <option className={"fill-gray-600"}>Arabic</option>
                        <option className={"fill-gray-600"}>English</option>
                        <option className={"fill-gray-600"}>French</option>
                    </select>
                </li>
            </div>

            <p className={"text-footerText text-2xl mb-9 pl-96"}>Netflix France</p>


        </div>

    )
}


export default Home;