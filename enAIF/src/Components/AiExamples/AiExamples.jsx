import React from "react";
import "./AiExamples.scss";
import chatbot from "../../assets/chatbot-img.png";
import imageai from "../../assets/imageai.png";
import videoai from "../../assets/text-to-video.png";

const AiExamples = () => {
  return (
    <div className="ai-examples">
      <div className="chatbot">
        <div className="chatbot-header">
          <h1>What is Chatbot? </h1>
        </div>
        <div className="chatbot-body">
          <img src={chatbot} alt="" />
          <p>
            A chat bot, short for chat robot, is a software application designed
            to engage in conversation with users, usually via text or voice
            inputs. It operates based on predefined rules or artificial
            intelligence algorithms, allowing it to interpret user messages,
            analyze context, and generate appropriate responses. Chat bots are
            commonly used in various applications, such as customer service,
            virtual assistants, information retrieval, and entertainment. They
            can range from simple, rule-based systems to sophisticated AI-driven
            platforms capable of understanding natural language, learning from
            interactions, and adapting their responses over time.
          </p>
        </div>
      </div>
      <div className="chatbot">
        <div className="chatbot-header">
          <h1>What is Text-to-Image AI's? </h1>
        </div>
        <div className="chatbot-body">
          <p>
          Text-to-image AI refers to a branch of artificial intelligence focused on generating visual content from textual descriptions. It utilizes advanced machine learning techniques, including deep neural networks and natural language processing algorithms, to understand and interpret the meaning of text and transform it into meaningful images. This technology has applications across various domains, such as design automation, content creation, virtual environments, and visual storytelling. Text-to-image AI systems can range from basic models that generate simple images based on textual prompts to more sophisticated architectures capable of producing detailed and realistic visual representations that closely align with the provided descriptions. These systems often require large datasets for training and are continuously improving in their ability to generate accurate and diverse imagery based on textual input.
          </p>
          <img src={imageai} alt="" />
        </div>
      </div>
      <div className="chatbot">
        <div className="chatbot-header">
          <h1>What is Text-to-Video AIs? </h1>
        </div>
        <div className="chatbot-body">
          <img src={videoai} alt="" />
          <p>
          Text-to-video AI is an innovative technology that leverages artificial intelligence algorithms to transform textual descriptions into video content. Through natural language processing and deep learning techniques, these systems analyze the input text, extract key concepts, and generate corresponding visual scenes, animations, or video clips. By understanding the semantics and context of the text, text-to-video AI can produce dynamic and coherent video content that aligns with the given descriptions. This technology finds applications in various fields such as video production, content creation, education, and marketing, offering a streamlined and efficient way to generate engaging visual content from written instructions or narratives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiExamples;
