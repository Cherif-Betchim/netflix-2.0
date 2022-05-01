import React from "react";

const MainContent = () => {


    return (
        // eslint-disable-next-line react/style-prop-object
        <div className="bg-local h-960"
             style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/226e5fad-8b2f-47b6-bf0f-bc07efcd9a08/FR-fr-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg)`}}>
            <h1 className={"text-5xl text-white font-bold text-center"}>Unlimited movies, TV </h1>
            <h1 className={"text-5xl text-white font-bold text-center"}>shows, and more.</h1>

            <h3 className={"text-2xl text-white font-bold text-center"}>Watch anywhere. Cancel anytime.</h3>
            <h5 className={"text-1xl text-white font-bold text-center"}>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>

    )
}


export default MainContent;