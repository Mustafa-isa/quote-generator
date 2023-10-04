import "./App.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import share btns
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
EmailShareButton ,
EmailIcon
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  };
  const [Quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      Quote.author + " once said: " + Quote.content
    );
    // alert('copied')
    // instead of alert built in browser we will customize it

    toast.info("Copied", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{Quote.content}</p>
        <span>{Quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
      <div className="shareContainer">
        <FacebookShareButton url="https://timely-pie-f3118a.netlify.app/" quote={Quote.content + "" + Quote.author}>
          <FacebookIcon  size={40} round={true} style={{ backgroundColor: 'transparent',  }} />
        </FacebookShareButton>
        <EmailShareButton  url="https://timely-pie-f3118a.netlify.app/" quote={Quote.content + "" + Quote.author}>
          <EmailIcon  size={40} round={true} style={{ backgroundColor: 'transparent',  }} />
        </EmailShareButton>
        <TwitterShareButton  url="https://timely-pie-f3118a.netlify.app/"quote={Quote.content + "" + Quote.author}>
          <TwitterIcon  size={40} round={true} style={{ backgroundColor: 'transparent',  }} />
        </TwitterShareButton>
        <WhatsappShareButton  url="https://timely-pie-f3118a.netlify.app/"quote={Quote.content + "" + Quote.author}>
          <WhatsappIcon  size={40} round={true} style={{ backgroundColor: 'transparent',  }} />
        </WhatsappShareButton>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
