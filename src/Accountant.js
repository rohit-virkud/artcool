import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { useWindowSize } from "./WindowSize";

const GlobalStyle = createGlobalStyle`

:root {
  --blue: #031222;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
html, body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    
}
a{
    text-decoration: none;
    color: black;
}
h1,p{
    word-break: break-word;
}

/*Loader*/

.loader-div {
width: 100%;
height: 100%;
position: fixed;
background:#031222;
text-align: center;
z-index: 999;


}

.loader-div h1 {
margin: 0;
padding: 0;

font-weight: 300;
font-size: 4vw;
color:#E4B464;
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
}

.loader-div h1 span {
position: relative;
top: 0.63em;  
display: inline-block;
text-transform: uppercase;  
opacity: 0;
transform: rotateX(-90deg);

}

.loader-div h1  .let1 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.2s;
}

.loader-div h1  .let2 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.3s;
}

.loader-div h1  .let3 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.4s;
}

.loader-div h1  .let4 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.5s;

}

.loader-div h1  .let5 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.6s;
}

.loader-div h1  .let6 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.7s;
}

.loader-div h1 .let7 {
animation: drop 1.2s ease-in-out infinite;
animation-delay: 1.8s;
}

@keyframes drop {
    10% {
        opacity: 0.5;
    }
    20% {
        opacity: 1;
        top: 3.78em;
        transform: rotateX(-360deg);
    }
    80% {
        opacity: 1;
        top: 3.78em;
        transform: rotateX(-360deg);
    }
    90% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
        top: 6.94em
    }
}



/**/


.card-wrapper
{
    
    position: relative;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    opacity: 1;
    
}
.card-wrapper-anim
{
    animation: bgInOut 5s;
      z-index: 2;
}
@keyframes bgInOut {
     0% {
         transform: rotate(-45deg) scale(1.5);
         animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        
    }
     33% {
         transform: rotate(0deg);
         
    }
     50% {
         transform: rotate(0deg);
        
    }
    100% {
         transform: rotate(0deg) scale(1);
         animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
          
    }
    
}
.hero-section
{
    width: 100%;
    min-height: 35vh;

    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.logo-wrapper
{
   
   
   background-size: contain;
   background-position: center;
  
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-shrink: 0;
   overflow: hidden;
  
   box-sizing: border-box;

   

}
.logo
{
    background-size: contain;
    width: min(14vw,7vh);
}
.name
{
    width: 90%;
    
  
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-weight: 700;
    
    /*word-break: break-all;
      */

    text-align: center;

}
.first
{
   
}

.tag
{
    width: 90%;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.1em;
   
   
    /*word-break: break-all;*/

}
.save-btn
{
    
    border: 4px solid #EFB658;
    box-sizing: border-box;
    padding-top: min(2vw,1vh);
    padding-bottom: min(2vw,1vh);
    padding-left: min(4vw,2vh);
    padding-right: min(4vw,2vh);
    
    
    font-style: normal;
    font-weight: 400;
    background: #EFB658;
    color:#03182D;
    font-size: min(4vw,2vh);
    text-decoration: none;
    margin-top: min(5vw,2vh);
    border-radius: min(6vw,3vh);
    box-shadow: 0px 5px 30px rgb(0 0 0 / 65%);

}
.social-wrapper
{
    width: 100%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    
}

.social-section
{
    display: flex;
    flex-shrink: 0;
    justify-content: space-evenly;
    align-items: center;
}
.social-section img
{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
.social-section a
{
    
    width: 100%;
    height: 100%;
}
.contact-section
{
    width: 100%;
    
    display: flex;
    justify-content: center;
}
.contact-box
{
    width: 80%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
}
.contact-container
{
    width: 80%;
    display: flex;
   
    flex-shrink: 0;
   
    align-items: center;
}
.contact-container p
{
    font-weight: 300;
    
}


.share-btn
{
   
    position: absolute;
    top: 3%;
    right: 7%;


}
.share-btn img
{
   
}

.reviews-section
{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
}
.review-icons
{
    
    width: 32%;
    display: flex;
    justify-content: space-evenly;
    flex-shrink: 0;
    align-items: center;
}

.sub-title
{
    width: 90%;
    color: white;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-weight: 700;
   
    /*word-break: break-all;
      */
}
.subscribe-section
{
    display: flex;
    flex-direction: column;
    width: 90%;
   
}
.input-title, .input-button
{
   
    background: #FFFFFF;
    border-radius: 4px;
    
    border: none;
    width: 80%;
    border-radius: 1.5vw;
}
.input-button
{
  
    border: none;
    border-radius: 4px;
    
    
    border-radius: 5px;
   
    box-shadow: 0px 4px 20px rgba(86, 84, 84, 0.15);
   color: white;
   
    font-weight: 500;
    border-radius: 1.5vw;

   
    

}


/*arrow animation*/

@keyframes bounce {
0%, 20%, 50%, 80%, 100% {
transform: translateY(0);
}
40% {
transform:translateY(-30px);
}
60% {
transform:translateY(-15px);
}
}

.arrow {
position: fixed;
bottom: 5%;
right: 5%;
width: 5vw;
height: 5vw;
object-fit: contain;
}

.bounce {
animation : bounce 2s infinite;
}

/**/

/* round move */
@keyframes float {
0% {
box-shadow: 0 5px 45px  0px rgb(0 0 0 / 1);


transform: translatey(0px);
}
50% {
box-shadow: 0 25px 45px 0px rgb(0 0 0 / 0.2);

transform: translatey(-45px);
}
100% {
box-shadow: 0 5px 45px 0px rgb(0 0 0 / 1);
transform: translatey(0px);
}
}


@keyframes float-light {
    0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-45px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}




/*logo round move animation ENDS*/

/*after loader animation*/
.untitled__shutters {
 position: absolute;
 height: 150vmax;
 width: 150vmax;
 left: calc(50% - 75vmax);
 top: calc(50% - 75vmax);
 pointer-events: none;
 z-index: 5;
 animation: rotateFrame 8s linear;
}
.untitled__shutters:before, .untitled__shutters:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    transform: translate3d(50%, 0, 0);
   /* background-color: #031222;*/
   background-color: var(--blue);
    pointer-events: auto;
}

.untitled__shutters:before {
     bottom: 50%;
     animation: openTop 5s;
}
@keyframes rotateFrame 
{
     0% {
         transform: rotate(0deg);
    }
     100% {
         transform: rotate(180deg);


    }
}


@keyframes openTop {
0% {
 transform: translate3d(-50%, 0, 0);
 animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
}
40% {
 transform: translate3d(-50%, -65vmax, 0);
 animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
100% {
 transform: translate3d(-50%, -65vmax, 0);
 animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

}


.untitled__shutters:after {
top: 50%;
animation: openBottom 5s;
}

@keyframes openBottom {
0% {
 transform: translate3d(-50%, 0, 0);
 animation-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
}
40% {
 transform: translate3d(-50%, 65vmax, 0);
 animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
100% {
 transform: translate3d(-50%, 65vmax, 0);
 animation-timing-functon: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

}

/*after loader animation ENDS*/


/*share slide0*/

/*share slide*/







 



 .share-slide
{
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
    mix-blend-mode: normal;
    backdrop-filter: blur(30px);
    z-index: -1;
    opacity: 0;
    
}

.close-icon
{
    position: absolute;
    top:4%;
    right: 7%;
    width: min(5vw,3vh);
    height: min(5vw,3vh); 
    
    opacity: 0;
    transition: 0.2s;
 
   
    
}
.share-slide-share-icons
{

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    position: fixed;
    top: 50%;
    left: 50%; 
    /* bring your own prefixes */
    transform: translate(-50%, -55%);
   
}
.share-headline 
{
    font-size: min(5vw,2.5vh);
    color: #EFB658;
    margin-bottom:  min(4vw,3vh);
  
    opacity: 0;
    transition: 0.1s;
    

    
}
.scan-and-save-txt
{
    font-size: min(5vw,2.5vh);
    color: #EFB658;
    margin-bottom:  min(4vw,4vh);
    margin-top: 30%;
   
    opacity: 0;
    transition: 0.1s;
    
}



.icon-grid
{
    display: grid;
    width: 100%;
    grid-template-columns: 11vw 11vw 11vw 11vw;
    grid-gap: min(2vw,1vh);
    
    justify-content: center;
   
    opacity: 0;
    transition: 0.1s;
   
    
}
.icon-grid a
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.icon-grid img
{
    width: min(11vw,5vh);
    height: min(11vw,5vh);
}

.qr-code-wrapper
{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: #1D4B7A;
    align-items: center;
}
.qr-code-container
{
    
    opacity: 0;
    transition: 0.1s;
    
}
.qr-code-container img
{ 
    width: min(30vw,20vh);
    height: min(30vw,20vh);
   
   
}

.open{
    z-index: 2;
    opacity: 1;
   
}

.openx{
     z-index: 1;
     opacity: 1;
   

}
.closeAnim
{
    transition:  transform 1s ease-out;
    transform: rotateZ(180deg);
    z-index: 1;

   
}
.none
{
    display: none;
}

@keyframes zoomLoop {
  0% {

    transform: scale(1);
    
  }
  50%{
    transform: scale(1.1);
  }
  
  100% {
  transform: scale(1);

  }
}

`;
const Accountant = () => {
  const size = useWindowSize();

  const getSize = (width, heightPercentage) => {
    return `min(${width}vw, ${(size.height * heightPercentage) / 100}px)`;
  };

  const [firstName, setFirstName] = useState("George");
  const [lastName, setLastName] = useState("Maksimov");
  const [email, setEmail] = useState("info@artcoolcards.gr");
  const [address, setAddress] = useState(
    "Lisikratous 88, Kallithea, 17674 Athens, Greece"
  );
  const [mobile, setMobile] = useState("+30 6936503000");
  const [landline, setLandline] = useState("+30 6936503000");
  const [website, setWebsite] = useState("www.artcoolcards.gr");
  const [profession, setProfession] = useState("ACCOUNTANT");

  const [reviewTitle, setReviewTitle] = useState("Our Reviews");
  const [subTitle, setSubTitle] = useState("Subscribe");

  const [facebook, setFacebook] = useState("https://artcoolcards.gr/");
  const [instagram, setInstagram] = useState("https://artcoolcards.gr/");
  const [linkedin, setLinkedin] = useState("https://artcoolcards.gr/");
  const [youtube, setYoutube] = useState("https://artcoolcards.gr/");
  const [twitter, setTwitter] = useState("https://artcoolcards.gr/");
  const [tiktok, setTiktok] = useState("https://artcoolcards.gr/");
  const [telegram, setTelegram] = useState("https://artcoolcards.gr/");
  const [profile, setProfile] = useState(
    "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/circleup.png"
  );
  const [darkMode, setDarkMode] = useState(true);

  const [tripadvisor, setTripadvisor] = useState("https://artcoolcards.gr/");
  const [booking, setBooking] = useState("https://artcoolcards.gr/");

  const [enableFacebook, setEnableFacebook] = useState(true);
  const [enableYoutube, setEnableYoutube] = useState(true);
  const [enableTelegram, setEnableTelegram] = useState(true);
  const [enableTwitter, setEnableTwitter] = useState(true);
  const [enableTiktok, setEnableTiktok] = useState(true);
  const [enableInstagram, setEnableInstagram] = useState(true);
  const [enableLinkedin, setEnableLinkedin] = useState(true);

  const [enableBooking, setEnableBooking] = useState(true);
  const [enableTripadvisor, setEnableTripadvisor] = useState(true);

  const [enableEmail, setEnableEmail] = useState(true);
  const [enableAddress, setEnableAddress] = useState(true);
  const [enableMobile, setEnableMobile] = useState(true);
  const [enableLandline, setEnableLandline] = useState(true);
  const [enableWebsite, setEnableWebsite] = useState(true);
  const [enableReviewName, setEnableSubsribe] = useState(true);

  const [enableReviews, setEnableReviews] = useState(true);
  const [enableSocial, setEnableSocial] = useState(true);
  const [enableProfession, setEnableProfession] = useState(true);

  useEffect(() => {
    //eslint-disable-next
    if (!darkMode) {
      $("#shutters").css("--blue", "white");
    }
    $(".untitled__shutters:after").css("background-color", "white");
    $(".untitled__shutters").fadeOut("fast");
    setTimeout(function () {
      $(".loader-div").fadeOut();
    }, 2000);

    setTimeout(function () {
      $(".untitled__shutters").fadeIn("fast");
    }, 1800);

    setTimeout(function () {
      $(".untitled__shutters").fadeOut("fast");
    }, 2800);

    setTimeout(function () {
      $(".card-wrapper").addClass("card-wrapper-anim");
    }, 1900);
  }, []);

  function saveClicked() {
    var audio = document.getElementById("save");
    audio.play();
  }

  function openSlide() {
    $(".untitled__shutters").fadeIn("slow");
    $(".arrow").css("opacity", "0");
    $(".card-wrapper").removeClass("card-wrapper-anim");
    $(".share-slide").addClass("open");
    var audio = document.getElementById("share");
    audio.play();

    setTimeout(function () {
      $(".share-slide").addClass("card-wrapper-anim");
      $(".icon-grid").addClass("openx");
      $(".share-headline").addClass("openx");
      $(".scan-and-save-txt").addClass("openx");
      $(".qr-code-container").addClass("openx");
      $(".close-icon").addClass("openx");
    }, 470);

    setTimeout(function () {
      $(".close-icon").removeClass("closeAnim");
      $(".untitled__shutters").fadeOut("fast");
    }, 1000);
  }

  function closeSlide() {
    var audio = document.getElementById("share");
    audio.play();
    $(".share-slide").removeClass("card-wrapper-anim");
    $(".untitled__shutters").fadeIn("fast");

    setTimeout(function () {
      $(".share-slide").removeClass("open");
    }, 350);

    setTimeout(function () {
      $(".card-wrapper").addClass("card-wrapper-anim");
      $(".arrow").css("opacity", "1");
    }, 300);

    $(".icon-grid").removeClass("openx");
    $(".share-headline").removeClass("openx");
    $(".scan-and-save-txt").removeClass("openx");
    $(".qr-code-container").removeClass("openx");
    $(".close-icon").addClass("closeAnim").delay(1000);

    setTimeout(function () {
      $(".close-icon").removeClass("openx");
      $(".untitled__shutters").fadeOut("fast");
    }, 1000);
  }

  return (
    <Fragment>
      <GlobalStyle />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: darkMode ? "#03182D" : "#ffffff",
        }}
      >
        <div
          className="arrow bounce"
          style={{
            background: darkMode
              ? "url('https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/arrow-dark.svg') no-repeat"
              : "url('https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/arrow.svg') no-repeat",

            zIndex: "4",
          }}
        ></div>

        <div
          className="loader-div"
          style={{
            backgroundColor: darkMode ? "#03182D" : "#ffffff",
          }}
        >
          <h1
            style={{
              color: darkMode ? "#E4B464" : "#000000",
            }}
          >
            <span className="let1">l</span>
            <span className="let2">o</span>
            <span className="let3">a</span>
            <span className="let4">d</span>
            <span className="let5">i</span>
            <span className="let6">n</span>
            <span className="let7">g</span>
          </h1>
        </div>

        <div
          className="slide-wrapper"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <audio
            id="save"
            src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/savecontact.mpeg"
          ></audio>
          <audio
            id="share"
            src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/sharescreen.mpeg"
          ></audio>

          <div
            className="share-slide"
            id="share-slide"
            style={{
              background: darkMode
                ? "linear-gradient(184.47deg, #041D36 1.42%, #010C16 110.86%)"
                : "linear-gradient(192.05deg, #FFFFFF -0.96%, #F1ECF6 96.26%)",
              mixBlendMode: "normal",
              backdropFilter: "blur(30px)",
            }}
          >
            <img
              src={
                darkMode
                  ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/closeicon-dark.png"
                  : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/closeicon.png"
              }
              alt="close-icon"
              className="close-icon"
              onClick={(e) => {
                e.preventDefault();
                closeSlide();
              }}
            />
            <div className="share-slide-share-icons">
              <h2
                className="share-headline"
                style={{
                  color: darkMode ? "#EFB658" : "#000000",
                }}
              >
                SHARE MY CARD
              </h2>
              <div className="icon-grid">
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/sms.png"
                    alt="sms-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/cs.png"
                    alt="cs-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/whatsapp.png"
                    alt="whatsapp-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/dropbox 187.png"
                    alt="dropbox-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/fb-share.png"
                    alt="fb-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/telegram 191.png"
                    alt="tel-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/twitter-share.png"
                    alt="twit-img"
                  />
                </a>
                <a href="#!">
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/linkedin-share.png"
                    alt="linkedin-img"
                  />
                </a>
              </div>
              <h2
                className="scan-and-save-txt"
                style={{
                  color: darkMode ? "#EFB658" : "#000000",
                }}
              >
                SCAN AND SAVE
              </h2>
              <div className="qr-code-container">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/qr.png"
                  alt="qr-img"
                />
              </div>
            </div>
          </div>

          <div
            className="card-wrapper"
            style={{
              overflow: "hidden",
              position: "relative",
              background: darkMode
                ? "linear-gradient(184.47deg, #041D36 1.42%, #010C16 110.86%)"
                : "linear-gradient(192.05deg, #FFFFFF -0.96%, #F1ECF6 96.26%)",
            }}
          >
            <div
              className="share-btn"
              style={{
                width: getSize(10, 5),
                height: getSize(10, 5),
              }}
              onClick={(e) => {
                e.preventDefault();
                openSlide();
              }}
            >
              <img
                src={
                  darkMode
                    ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/share-dark.png"
                    : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/share.png"
                }
                alt="share"
                style={{
                  width: getSize(10, 5),
                  height: getSize(10, 5),
                }}
              />
            </div>

            <div className="hero-section">
              <div
                className="logo-wrapper"
                style={{
                  marginTop: getSize(8, 4),
                  height: getSize(35, 17.5),
                  width: getSize(35, 17.5),
                  background: `url('${profile}') no-repeat`,
                  backgroundSize: "contain",
                  border: "3px solid white",
                  animation: darkMode
                    ? "float 6s ease-in-out infinite"
                    : "float-light 6s ease-in-out infinite",
                }}
              ></div>

              <h1
                className="name first "
                style={{
                  fontSize: getSize(7.2, 3.3),
                  lineHeight: getSize(8, 3.5),
                  marginTop: getSize(5, 2.5),
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {firstName}
              </h1>
              <h1
                className="name"
                style={{
                  fontSize: getSize(7.2, 3.3),
                  lineHeight: getSize(8, 3.5),
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {lastName}
              </h1>

              {enableProfession && (
                <p
                  className="tag"
                  style={{
                    fontSize: getSize(3, 1.5),
                    marginTop: getSize(2.5, 1),
                    color: darkMode ? "#E4B464" : "#5F5F5F",
                  }}
                >
                  {profession}
                </p>
              )}

              <a
                href="#!"
                className="save-btn"
                onClick={(e) => {
                  e.preventDefault();
                  saveClicked();
                }}
                style={{
                  borderColor: darkMode ? "#EFB658" : "#ffffff",
                  backgroundColor: darkMode ? "#EFB658" : "#99F3FF",
                  boxShadow: darkMode
                    ? "0px 5px 30px rgb(0 0 0 / 65%)"
                    : "0px 4px 30px rgb(86 84 84 / 15%)",
                }}
              >
                Save contact
              </a>
            </div>
            {enableSocial && (
              <div
                className="social-wrapper"
                style={{
                  marginTop: getSize(1, 0.5),
                  marginBottom: getSize(1.5, 0.8),
                }}
              >
                <div
                  className="social-section"
                  style={{
                    width: "70%",
                    height: getSize(12, 6),
                    marginTop: getSize(3, 1.5),
                  }}
                >
                  {enableFacebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/fb-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/fb.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableInstagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/insta-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/insta.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableYoutube && (
                    <a href={youtube} target="_blank" rel="noopener noreferrer">
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/yt-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/yt.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableTelegram && (
                    <a
                      href={telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/tel-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/tel.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableTwitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/twit-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/twit.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableTiktok && (
                    <a href={tiktok} target="_blank" rel="noopener noreferrer">
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/tiktok-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/tiktok.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}

                  {enableLinkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/linkedin-dark.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/linkedin.png"
                        }
                        alt="social"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="contact-section">
              <div
                className="contact-box"
                style={{
                  marginTop: getSize(3, 1.5),
                  paddingTop: getSize(3, 1.5),
                  paddingBottom: getSize(10, 6),

                  borderRadius: getSize(6, 3),
                  background: darkMode ? "#03182D" : "#FFFFFF",
                  boxShadow: darkMode
                    ? "0px 5px 30px rgba(0, 0, 0, 0.25)"
                    : "0px 4px 30px rgb(86 84 84 / 15%)",
                }}
              >
                {enableMobile && (
                  <a
                    href={`tel:${mobile}`}
                    className="contact-container"
                    style={{
                      marginTop: getSize(6.5, 3),
                      fontSize: getSize(6, 2),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/phone-icon-dark.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/phone-icon.png"
                      }
                      alt="social"
                      style={{
                        width: getSize(8, 4),
                        height: getSize(8, 4),
                      }}
                    />
                    <p
                      style={{
                        marginLeft: getSize(4, 2),
                        fontSize: getSize(3.8, 2.3),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {mobile}
                    </p>
                  </a>
                )}

                {enableLandline && (
                  <a
                    href={`tel:${landline}`}
                    className="contact-container"
                    style={{
                      marginTop: getSize(6.5, 3),
                      fontSize: getSize(6, 2),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/home-icon-dark.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/home-icon.png"
                      }
                      alt="social"
                      style={{
                        width: getSize(8, 4),
                        height: getSize(8, 4),
                      }}
                    />
                    <p
                      style={{
                        marginLeft: getSize(4, 2),
                        fontSize: getSize(3.8, 2.3),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {landline}
                    </p>
                  </a>
                )}

                {enableEmail && (
                  <a
                    href={`mailto:${email}`}
                    className="contact-container"
                    style={{
                      marginTop: getSize(6.5, 3),
                      fontSize: getSize(6, 2),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/msg-icon-dark.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/msg-icon.png"
                      }
                      alt="social"
                      style={{
                        width: getSize(8, 4),
                        height: getSize(8, 4),
                      }}
                    />
                    <p
                      style={{
                        marginLeft: getSize(4, 2),
                        fontSize: getSize(3.8, 2.3),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {email}
                    </p>
                  </a>
                )}

                {enableAddress && (
                  <a
                    href={`https://maps.google.com/?q=${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-container"
                    style={{
                      marginTop: getSize(6.5, 3),
                      fontSize: getSize(6, 2),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/location-icon-dark.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/location-icon.png"
                      }
                      alt="social"
                      style={{
                        width: getSize(8, 4),
                        height: getSize(8, 4),
                      }}
                    />
                    <p
                      style={{
                        marginLeft: getSize(4, 2),
                        fontSize: getSize(3.8, 2.3),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {address}
                    </p>
                  </a>
                )}

                {enableWebsite && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-container"
                    style={{
                      marginTop: getSize(6.5, 3),
                      fontSize: getSize(6, 2),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/web-icon-dark.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/web-icon.png"
                      }
                      alt="social"
                      style={{
                        width: getSize(8, 4),
                        height: getSize(8, 4),
                      }}
                    />
                    <p
                      style={{
                        marginLeft: getSize(4, 2),
                        fontSize: getSize(3.8, 2.3),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      {website}
                    </p>
                  </a>
                )}
              </div>
            </div>
            {enableReviews && (
              <div className="reviews-section">
                {enableReviewName && (
                  <h1
                    className="name"
                    style={{
                      marginTop: getSize(7.5, 3.5),
                      fontSize: getSize(6.5, 3),
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  >
                    {reviewTitle}
                  </h1>
                )}

                <div
                  className="review-icons"
                  style={{
                    marginTop: getSize(3.5, 2.5),
                  }}
                >
                  {enableTripadvisor && (
                    <a
                      href={tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/Tripadvisor.png"
                        alt="review"
                        style={{
                          width: getSize(10, 5),
                          height: getSize(10, 5),
                        }}
                      />
                    </a>
                  )}

                  {enableBooking && (
                    <a href={booking} target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/accountant-dark/main/booking-com.png"
                        alt="review"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}

            <form
              className="subscribe-section"
              style={{
                marginBottom: getSize(8, 4),
              }}
            >
              <h1
                className="sub-title"
                style={{
                  marginTop: getSize(12, 6),
                  marginLeft: getSize(15, 8),
                  fontSize: getSize(6.5, 3),
                  lineHeight: getSize(8, 3.5),
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {subTitle}
              </h1>
              <input
                type="text"
                name="name"
                className="input-title"
                placeholder="Name"
                style={{
                  marginTop: getSize(4, 2.5),
                  marginLeft: getSize(15, 7.5),
                  padding: getSize(4, 2),
                  fontSize: getSize(3, 1.5),
                }}
              />
              <input
                type="email"
                name="name"
                className="input-title"
                placeholder="Email"
                style={{
                  marginTop: getSize(4, 2.5),
                  marginLeft: getSize(15, 7.5),
                  padding: getSize(4, 2),
                  fontSize: getSize(3, 1.5),
                }}
              />
              <input
                type="submit"
                name="submit"
                className="input-button"
                style={{
                  marginLeft: getSize(15, 8),
                  marginTop: getSize(4, 2.5),
                  padding: getSize(3, 1.5),
                  width: getSize(30, 15),
                  fontSize: getSize(4, 2),
                  marginBottom: getSize(5, 2.5),
                  color: "ffffff",
                  background: darkMode ? "#E4B464" : "#39B8FF",
                }}
              />
            </form>
          </div>

          <div className="untitled__shutters" id="shutters"></div>
        </div>
      </div>

      {/* body ends  */}
    </Fragment>
  );
};

export default Accountant;
