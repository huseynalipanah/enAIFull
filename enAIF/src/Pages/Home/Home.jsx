import React from "react";
import { Helmet } from "react-helmet-async";
import BestAiSection from "../../Components/BestAiSection/BestAiSection";
import HomeHeader from "./../../Components/HomeHeader/HomeHeader";
import AiExamples from './../../Components/AiExamples/AiExamples';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EnAI - Home</title>
      </Helmet>
      <HomeHeader />
      <BestAiSection />
      <AiExamples />
      
    </div>
  );
};

export default Home;
