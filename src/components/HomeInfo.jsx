import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="
                sm:text-x1 
                sm:leading-snug 
                text-center 
                neo-brutalism-blue 
                py-4 
                px-8 
                text-white 
                mx-5">
            Hi, I'm <span className="font-semibold">Jay</span> 👋
            <br/>
            A software engineer from the UK
        </h1>
    ),
    2: (
        <InfoBox 
            text="With over 7 years experience in digital teams as a product manager & scrum master"
            link="https://jay-sparks.netlify.app/#experience"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="As a self-taught engineer I have built multiple projects along the way"
            link="https://jay-sparks.netlify.app/#projects"
            btnText="View Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a full-stack engineer?"
            link="https://jay-sparks.netlify.app/#contact"
            btnText="Get in touch"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo