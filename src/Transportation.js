import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import $ from "jquery";
import { useWindowSize } from "./WindowSize";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}


.loader-div {
width: 100%;
height: 100%;
position: fixed;
background: black;
text-align: center;
z-index: 999;


}

.loader-div h1 {
margin: 0;
padding: 0;
font-weight: 100;
font-size: 4vw;
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


.swiper-container {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
}

.swiper-slide {
overflow: hidden;
}

.slide-inner {
position: absolute;
width: 100%;
height: 100%;
left: 0;
top: 0;
background-size: cover;
background-position: center;
}


a{
text-decoration: none;
color: inherit;
}

/*first slide*/
.slide-01,.slide-02,.slide-03
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    background-color: #050918;
   
}
.container
{
    width: 80%;
    height: 100%;
    z-index: 2;
   
}

.logo
{
   
    
    background-size: contain;
 
   
}
.heading-name,.heading-sirname
{
   
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    
    width: 100%;
    color:white;
    
}

.tag
{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
}
.line
{
    
    
    background: url('https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/gold-textured-background.png') no-repeat;
    background-size: cover;
    background-position: center;

}

.contact-container
{
    
    width: 100%;
    display: flex;
    align-items: center;
}

.contact-txt
{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
   
    width: 70%;
    color: white;
;
   
}
.primary-btn
{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    
    background: url(https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/gold-textured-background.png) no-repeat;
    background-size: cover;
    background-position: center;
    border: none;
    display: inline-block;

}

.share-btn
{
    position: absolute;
    
    top: 3%;
    right: 0%;
    left: auto;
    bottom: auto;
    

}



.lottie-anim
{
    position: fixed;
    bottom: 1.5%;
 
    
}


.firstSlideArrow
{
    position:absolute;
   
    top: auto;
    bottom: 2%;
    right: 6%;
    left: auto;
    position: fixed;
    z-index: 22;
}



/**/
/**/

.slide-02
{
;
    color: white;

}
.image-container
{
    
    width: 100%;
    height: 70%;
    overflow: hidden;
    background-color: black;
    border-radius: 0px 0px 0px 100px;
}
.image
{
    background:  url('https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image-02.png')no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    transition:  transform 5s ease-in-out;
    
}



.heading-name02
{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
   
    color: #ffffff;
}
.heading02-p{
   
    width: 100%;
    color:#ffffff;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    
    line-height: 163.15%;
    
   
   
    
    
}


.secondSlideArrow
{
    position:absolute;
    
    top: auto;
    bottom: 2%;
    left: 6%;
    z-index: 1;
    position: fixed;
    
}


.slide-03
{
    background: black;
    flex-direction: column;
}

.image-top
{
    width: 100%;
    height: 40%;
    overflow: hidden;
    top: 0;
    left: 0;
    border-radius: 0px 0px 0px 100px;


}
 .imgT
{
     width: 100%;
     height: 100%;
     background: url('https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image1.png')no-repeat;
     background-size: cover;
     background-position: center;
     transform: scale(1.1);
     transition: transform 5s ease-in-out;

}
.image-bottom
{
    width: 100%;
    height: 40%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-radius: 0px 100px 0px 0px;


}
.imgB
{
     width: 100%;
     height: 100%;
     background: url('https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image3.png')no-repeat;
     background-size: cover;
     background-position: center;
     transform: scale(1.1);
     transition: transform 5s ease-in-out;

}
.container-03-quote
{
    width: 82%;
    height: 40%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
.linex
{

    
    background: url('https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/gold-textured-background.png') no-repeat;
    background-size: cover;
    background-position: center;

}


.container-03
{
    width: 82%;
    height: 100%;
}

.social-icons a img
{
    

}
.heading-name-03
{
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    
    color: white;
}
.mg-lt
{
    margin-left: min(2vw,1vh);
}

.swiper-slide
{
    transition: 0.5s ease-in;
}



/**/
.slide-04
{
  
   width: 100%;
   height: 100%;
   background: #181E2A;
   display: flex;
   flex-direction: column;
 
}
.input
{

font-family: Roboto;
font-style: normal;
font-size: min(3.405vw,1.8vh);
line-height: min(5.085vw,3vh);
background: #FFFFFF;
/* Light Grey */
border: 2px solid #BBC8D4;
box-sizing: border-box;
border-radius: 4px;

border-radius: min(0.852vw,0.4vh);

}

.form
{
   display: flex;
   flex-shrink: 0;
   flex-direction: column;
   width: 85%;
}

/* extra icons */
.extra-icons
{
    
    width: 100%;
    background: #E7E7E7;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    
}
.extra-container
{
    width: 87%;
    font-weight: 700;
}
.round-icons-wrapper
{
    width: 100%;
    padding: 10px 0px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    
}
.round-icons-container
{
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: center;
    
}
.round
{

    max-width: min(25vw,15vh);
    flex: 1 0 35vw;
    margin-top: min(4vw,1vh);
    margin-bottom: min(4vw,1vh);
    margin-left: min(5vw,2.5vh);
    margin-right: min(5vw,2.5vh);
    height: min(25vw,15vh);
    /* overflow: hidden; */
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #FFFFFF;
    border-radius: 50%;

}
.round img
{
    object-fit: contain;
    max-width: 50%;
    max-height: 20vw;
}


 /*share slide*/
 .share-slide
{
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #FFFFFF;
    mix-blend-mode: normal;
    backdrop-filter: blur(30px);
    z-index: 222;
    transform: translateX(-100%); 
    transition:  transform 1s ease-out;
}

.share-slide .close-icon
{
    position: absolute;
    top:4%;
    right: 7%;
    
   
    
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
   
    color: #1D3138;
    transform: translateX(-80%);
    transition:  transform 1s ease-out;

    
}
.scan-and-save-txt
{
   
    color: #1D3138;
    margin-top: 30%;
    transform: translateX(-80%);
    transition:  transform 1s ease-out;
}



.icon-grid
{
    display: grid;
    width: 100%;
    grid-template-columns: 11vw 11vw 11vw 11vw;
    grid-gap: min(2vw,1vh);
    
    justify-content: center;
    transform: translateX(-40%);
    transition:  transform 1s ease-out;
    
}
.icon-grid a
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
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
    transform: translateX(-80%);
    transition:  transform 1s ease-out;
}

.open{
    transform: translateX(0%);
}
.closeAnim
{
    transition:  transform 0.5s ease-out;
    transform: rotateZ(180deg);
   
}


.swiper-slide
{
    transition:  transform 1s ease-out;
}
/* .swiper-slide-prev
{

 filter: brightness(0.5) invert(0.001);
 transition:  transform 0.5s all;
 
}*/

.swiper-slide
{
   overflow-y: scroll;
   overflow-x: hidden;
}



 .zoomOut
  {
    transform: scale(1);
  }
  .screenfirst
  {
    transform: translateX(0%);
    opacity: 1;
    transition: 1s transform ease-out;
  }
  .screen01anim
  {
    transform: translateX(100%);
    opacity: 0;
  }
  .socialmax
  {
    height: auto;
  }



`;

const Transportation = () => {
  const size = useWindowSize();

  const getSize = (width, heightPercentage) => {
    return `min(${width}vw, ${(size.height * heightPercentage) / 100}px)`;
  };

  const [firstName, setFirstName] = useState("Elena");
  const [lastName, setLastName] = useState("Bezoz");
  const [email, setEmail] = useState("info@artcoolcards.gr");
  const [address, setAddress] = useState(
    "Lisikratous 88, Kallithea, 17674 Athens, Greece"
  );
  const [mobile, setMobile] = useState("+30 6936503000");
  const [landline, setLandline] = useState("+30 6936503000");
  const [website, setWebsite] = useState("www.artcoolcards.gr");
  const [profession, setProfession] = useState("REAL ESTATE CONSULTANT");

  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
  );

  const [partnerLink1, setPartnerLink1] = useState("https://artcoolcards.gr/");
  const [partnerLink2, setPartnerLink2] = useState("https://artcoolcards.gr/");
  const [partnerLink3, setPartnerLink3] = useState("https://artcoolcards.gr/");
  const [partnerLink4, setPartnerLink4] = useState("https://artcoolcards.gr/");

  const [facebook, setFacebook] = useState("https://artcoolcards.gr/");
  const [instagram, setInstagram] = useState("https://artcoolcards.gr/");
  const [linkedin, setLinkedin] = useState("https://artcoolcards.gr/");
  const [youtube, setYoutube] = useState("https://artcoolcards.gr/");
  const [twitter, setTwitter] = useState("https://artcoolcards.gr/");
  const [tiktok, setTiktok] = useState("https://artcoolcards.gr/");
  const [tripadvisor, setTripadvisor] = useState("https://artcoolcards.gr/");
  const [booking, setBooking] = useState("https://artcoolcards.gr/");
  const [telegram, setTelegram] = useState("https://artcoolcards.gr/");

  const [image1, setImage1] = useState(
    "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image-02.png"
  );
  const [image2, setImage2] = useState(
    "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image2.png"
  );
  const [image3, setImage3] = useState(
    "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Image3.png"
  );

  const [logo, setLogo] = useState(
    "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/logo.png"
  );

  const [aboutTitle, setAboutTitle] = useState("About Us");
  const [reviewTitle, setReviewTitle] = useState("Our Reviews");
  const [followTitle, setFollowTitle] = useState("Follow Us");
  const [partnerTitle, setPartnerTitle] = useState("Our Partners");
  const [subTitle, setSubTitle] = useState("Subscribe");
  const [quote, setQuote] = useState(
    "There is always room for a story that can tranport people to another place"
  );

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    //eslint-disable-next
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      speed: 1200,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      navigation: { nextEl: ".next", prevEl: ".prev" },
    });

    setInterval(function () {
      if (swiper.activeIndex === 1) {
        $(".image").addClass("zoomOut");
      } else {
        $(".image").removeClass("zoomOut");
      }

      if (swiper.activeIndex === 2) {
        $(".imgT").addClass("zoomOut");
        $(".imgB").addClass("zoomOut");
      } else {
        $(".imgT").removeClass("zoomOut");
        $(".imgB").removeClass("zoomOut");
      }
    });

    $(document).ready(function () {
      setTimeout(function () {
        $(".loader-div").fadeOut();
        $(".screenfirst").removeClass("screen01anim");
      }, 2000);
    });

    /*image zoom in animations*/
  }, []);

  function openSlide() {
    $(".share-slide").addClass("open");
    $(".icon-grid").addClass("open").delay(500);
    $(".share-headline").addClass("open").delay(500);
    $(".scan-and-save-txt").addClass("open").delay(500);
    $(".qr-code-container").addClass("open").delay(500);
    $(".close-icon").removeClass("closeAnim");
  }

  function closeSlide() {
    $(".share-slide").removeClass("open");
    $(".icon-grid").removeClass("open").delay(500);
    $(".share-headline").removeClass("open").delay(500);
    $(".scan-and-save-txt").removeClass("open").delay(500);
    $(".qr-code-container").removeClass("open").delay(500);
    $(".close-icon").addClass("closeAnim").delay(1000);
  }

  function play() {
    var audioElement = document.getElementById("audio");
    if (audioElement.paused) {
      /* Audio link for notification */
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  return (
    <Fragment>
      <GlobalStyle />

      <div style={{ backgroundColor: darkMode ? "#000000" : "#ffffff" }}>
        <div
          className="loader-div"
          style={{ backgroundColor: darkMode ? "#000000" : "#ffffff" }}
        >
          <h1 style={{ color: darkMode ? "#ffffff" : "#000000" }}>
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
          className="share-slide"
          id="share-slide"
          style={{
            backgroundColor: darkMode ? "#000000" : "#ffffff",
          }}
        >
          <img
            src={
              darkMode
                ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/closeicon.png"
                : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/closeicon-light.png"
            }
            alt="close-icon"
            className="close-icon"
            style={{
              width: getSize(5, 3),
              height: getSize(5, 3),
            }}
            onClick={(e) => {
              e.preventDefault();
              closeSlide();
            }}
          />
          <div className="share-slide-share-icons">
            <h2
              className="share-headline"
              style={{
                fontSize: getSize(5, 2.5),
                marginBottom: getSize(4, 3),
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              SHARE MY CARD
            </h2>
            <div
              className="icon-grid"
              style={{
                gridGap: getSize(2, 1),
              }}
            >
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/sms.png"
                  alt="sms-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/cs.png"
                  alt="cs-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/whatsapp.png"
                  alt="whatsapp-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/dropbox 187.png"
                  alt="dropbox-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/fb9.png"
                  alt="fb-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/telegram 191.png"
                  alt="tel-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/twitter8.png"
                  alt="twit-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/linkedin3.png"
                  alt="linkedin-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
            </div>
            <h2
              className="scan-and-save-txt"
              style={{
                fontSize: getSize(5, 2.5),
                marginBottom: getSize(4, 4),
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              SCAN AND SAVE
            </h2>
            <div className="qr-code-container">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/qr.png"
                alt="qr-img"
                style={{
                  width: getSize(30, 20),
                  height: getSize(30, 20),
                }}
              />
            </div>
          </div>
        </div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide s1"
              style={{
                background: darkMode ? "#050918" : "#FFFFFF",
              }}
            >
              <audio id="audio">
                <source
                  src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/intro.mpeg"
                  type="audio/mpeg"
                />
              </audio>
              <div className="slide-inner">
                <div
                  className="slide-01"
                  style={{
                    background: darkMode ? "#050918" : "#FFFFFF",
                  }}
                >
                  <div className="container screenfirst screen01anim">
                    <div
                      className="logo"
                      style={{
                        background: `url('${logo}') no-repeat`,
                        backgroundSize: "contain",
                        width: getSize(29.298, 15),
                        height: getSize(13.801, 7),
                        marginTop: getSize(13.801, 7),
                      }}
                    ></div>

                    <div
                      className="share-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        openSlide();
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/share-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/share-icon-light.png"
                        }
                        style={{
                          width: getSize(10.896, 6),
                          height: getSize(10.896, 6),
                        }}
                        alt="share"
                      />
                    </div>

                    <h1
                      className="heading-name"
                      style={{
                        marginTop: getSize(10.169, 5),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                        color: darkMode ? "#ffffff" : "#181E2A",
                      }}
                    >
                      {firstName}
                    </h1>
                    <h1
                      className="heading-sirname"
                      style={{
                        marginTop: getSize(1.695, 0.8),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                        color: darkMode ? "#ffffff" : "#181E2A",
                      }}
                    >
                      {lastName}
                    </h1>
                    <p
                      className="tag"
                      style={{
                        marginTop: getSize(3.148, 1.8),
                        fontSize: getSize(2.906, 1.5),
                        lineHeight: getSize(3.39, 1.8),
                        color: darkMode ? "#FFFFFF" : "#181E2A",
                      }}
                    >
                      {profession}
                    </p>

                    <div
                      className="line"
                      style={{
                        marginTop: getSize(6.053, 3.5),
                        width: getSize(35.835, 18),
                        height: getSize(0.121, 0.6),
                        left: getSize(10.896, 6),
                        top: getSize(65.133, 33),
                      }}
                    ></div>

                    <a
                      href={`tel:${mobile}`}
                      className="contact-container cc-top"
                      style={{
                        marginTop: getSize(10.291, 5.5),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/phone-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/phone-icon-light.png"
                        }
                        alt="phone"
                        className="contact-icon"
                        style={{
                          width: getSize(6.78, 4),
                          height: getSize(6.78, 4),
                        }}
                      />
                      <p
                        className="contact-txt"
                        style={{
                          marginLeft: getSize(4.116, 2.5),
                          fontSize: getSize(3.39, 1.8),
                          lineHeight: getSize(3.874, 1.8),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {mobile}
                      </p>
                    </a>

                    <a
                      href={`tel:${landline}`}
                      className="contact-container"
                      style={{
                        marginTop: getSize(5.569, 3.2),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/home-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/home-icon-light.png"
                        }
                        alt="phone"
                        className="contact-icon"
                        style={{
                          width: getSize(6.78, 4),
                          height: getSize(6.78, 4),
                        }}
                      />
                      <p
                        className="contact-txt"
                        style={{
                          marginLeft: getSize(4.116, 2.5),
                          fontSize: getSize(3.39, 1.8),
                          lineHeight: getSize(3.874, 1.8),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {landline}
                      </p>
                    </a>

                    <a
                      href={`mailto:${email}`}
                      className="contact-container"
                      style={{
                        marginTop: getSize(5.569, 3.2),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/msg-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/msg-icon-light.png"
                        }
                        alt="phone"
                        className="contact-icon"
                        style={{
                          width: getSize(6.78, 4),
                          height: getSize(6.78, 4),
                        }}
                      />
                      <p
                        className="contact-txt"
                        style={{
                          marginLeft: getSize(4.116, 2.5),
                          fontSize: getSize(3.39, 1.8),
                          lineHeight: getSize(3.874, 1.8),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {email}
                      </p>
                    </a>

                    <a
                      href={`https://maps.google.com/?q=${address}`}
                      className="contact-container"
                      style={{
                        marginTop: getSize(5.569, 3.2),
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/location-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/location-icon-light.png"
                        }
                        alt="location"
                        className="contact-icon"
                        style={{
                          width: getSize(6.78, 4),
                          height: getSize(6.78, 4),
                        }}
                      />
                      <p
                        className="contact-txt"
                        style={{
                          marginLeft: getSize(4.116, 2.5),
                          fontSize: getSize(3.39, 1.8),
                          lineHeight: getSize(3.874, 1.8),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {address}
                      </p>
                    </a>

                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-container"
                      style={{
                        marginBottom: getSize(12.107, 6.5),
                        marginTop: getSize(5.569, 3.2),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/web-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/web-icon-light.png"
                        }
                        alt="phone"
                        className="contact-icon"
                        style={{
                          width: getSize(6.78, 4),
                          height: getSize(6.78, 4),
                        }}
                      />
                      <p
                        className="contact-txt"
                        style={{
                          marginLeft: getSize(4.116, 2.5),
                          fontSize: getSize(3.39, 1.8),
                          lineHeight: getSize(3.874, 1.8),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {website}
                      </p>
                    </a>

                    <a
                      href="#!"
                      className="primary-btn"
                      style={{
                        paddingTop: getSize(3.39, 1.8),
                        paddingBottom: getSize(3.39, 1.8),
                        paddingLeft: getSize(3.668, 1.8),
                        paddingRight: getSize(3.668, 1.8),
                        borderRadius: getSize(0.852, 0.4),
                        fontSize: getSize(3.405, 1.8),
                        lineHeight: getSize(5.085, 3),
                        color: darkMode ? "#181E2A" : "#FFFFFF",
                      }}
                    >
                      Save My Contacts
                    </a>

                    <lottie-player
                      src={
                        darkMode
                          ? "https://assets1.lottiefiles.com/packages/lf20_Sc0OC3.json"
                          : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/hj.json"
                      }
                      background="transparent"
                      speed="1"
                      class="lottie-anim"
                      onClick={() => {
                        play();
                      }}
                      loop
                      autoplay
                      style={{
                        cursor: "pointer",
                        zIndex: "999",
                        width: "6vw",
                        height: "6vw",
                      }}
                    ></lottie-player>

                    <a
                      href="#!"
                      className="firstSlideArrow"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow-light.png"
                        }
                        alt="left-arrow"
                        className="next left-arrow"
                        style={{
                          width: getSize(2.6, 1.3),
                          height: getSize(4.542, 2.5),
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="swiper-slide s2"
              style={{ backgroundColor: darkMode ? "#050918" : "#FFFFFF" }}
            >
              <div className="slide-inner">
                <div
                  class="slide-02"
                  style={{
                    flexDirection: "column",
                    overflowY: "scroll",
                    backgroundColor: darkMode ? "#050918" : "#FFFFFF",
                  }}
                >
                  <div className="image-container">
                    <div
                      className="image"
                      style={{
                        background: `url('${image1}') no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className="container" style={{ height: "40%" }}>
                    <h1
                      className="heading-name02"
                      style={{
                        fontSize: getSize(7.264, 3.5),
                        lineHeight: getSize(8.475, 4.2),
                        marginTop: getSize(9.443, 4.8),
                        color: darkMode ? "#FFFFFF" : "#181E2A",
                      }}
                    >
                      {aboutTitle}
                    </h1>

                    <div className="vertical-slider">
                      <p
                        className="heading02-p"
                        style={{
                          fontSize: getSize(3.632, 1.8),
                          marginTop: getSize(6, 3),
                          marginBottom: getSize(5, 2.5),
                          color: darkMode ? "#FFFFFF" : "#181E2A",
                        }}
                      >
                        {about}
                      </p>
                    </div>
                  </div>

                  <a
                    href="#!"
                    className="secondSlideArrow"
                    style={{
                      width: getSize(2.6, 1.3),
                      height: getSize(4.542, 2.5),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow-light.png"
                      }
                      alt="left-arrow"
                      className="prev left-arrow"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    />
                  </a>

                  <a href="#!" className="firstSlideArrow">
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/right-arrow.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/right-arrow-dark.png"
                      }
                      alt="left-arrow"
                      className="next left-arrow"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-slide s3">
              <div className="slide-inner">
                <div
                  className="slide-03"
                  style={{
                    background: darkMode ? "#050918" : "#FFFFFF",
                  }}
                >
                  <div className="image-top">
                    <div
                      className="imgT"
                      style={{
                        background: `url('${image2}') no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>

                  <div className="container-03-quote">
                    <div
                      className="linex"
                      style={{
                        marginTop: getSize(6.053, 3.5),
                        marginBottom: getSize(6.053, 3.5),
                        width: getSize(35.835, 18),
                        height: getSize(0.3, 0.1),
                        left: getSize(10.896, 6),
                        top: getSize(65.133, 33),
                      }}
                    ></div>
                    <br></br>
                    <h1
                      className="heading-name"
                      style={{
                        textAlign: "center",
                        marginTop: 0,
                        fontSize: getSize(5, 2.5),
                        textTransform: "uppercase",
                        width: "70%",
                        color: darkMode ? "#FFFFFF" : "#050918",
                      }}
                    >
                      "{quote}"
                    </h1>

                    <br></br>
                    <div
                      className="linex"
                      style={{
                        marginTop: getSize(6.053, 3.5),
                        marginBottom: getSize(6.053, 3.5),
                        width: getSize(35.835, 18),
                        height: getSize(0.3, 0.1),
                        left: getSize(10.896, 6),
                        top: getSize(65.133, 33),
                      }}
                    ></div>
                  </div>

                  <a
                    href="#!"
                    className="secondSlideArrow"
                    style={{
                      width: getSize(2.6, 1.3),
                      height: getSize(4.542, 2.5),
                    }}
                  >
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow-light.png"
                      }
                      alt="left-arrow"
                      className="prev left-arrow"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    />
                  </a>

                  <a href="#!" className="firstSlideArrow">
                    <img
                      src={
                        darkMode
                          ? "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/right-arrow.png"
                          : "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/right-arrow-dark.png"
                      }
                      alt="left-arrow"
                      className="next left-arrow"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    />
                  </a>

                  <div className="image-bottom">
                    <div
                      className="imgB"
                      style={{
                        background: `url('${image3}') no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide s4">
              <div
                className="slide-inner slide-04"
                style={{
                  overflowY: "scroll",
                  background: darkMode ? "#050918" : "#FFFFFF",
                }}
              >
                <div
                  className="container-03 socialmax"
                  style={{
                    marginLeft: getSize(8, 4),
                    marginTop: getSize(8, 4),
                  }}
                >
                  <h1
                    className="heading-name-03"
                    style={{
                      color: darkMode ? "#FFFFFF" : "#050918",
                      marginTop: getSize(8, 4),
                      fontSize: getSize(7.264, 3.5),
                      lineHeight: getSize(8.475, 4.2),
                    }}
                  >
                    {followTitle}
                  </h1>
                  <div
                    className="social-icons"
                    style={{
                      marginTop: getSize(5, 2.5),
                    }}
                  >
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/fb.png"
                        alt="fb"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/insta.png"
                        alt="insta"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/youtube.png"
                        alt="youtube"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/telegram.png"
                        alt="telegram"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/twitter.png"
                        alt="twitter"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/tiktok.png"
                        alt="tiktok"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/linkedin.png"
                        alt="linkedin"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>
                  </div>
                  <h1
                    className="heading-name-03"
                    style={{
                      color: darkMode ? "#FFFFFF" : "#050918",
                      marginTop: getSize(8, 4),
                      fontSize: getSize(7.264, 3.5),
                      lineHeight: getSize(8.475, 4.2),
                    }}
                  >
                    {reviewTitle}
                  </h1>
                  <div
                    className="social-icons"
                    style={{
                      marginTop: getSize(5, 2.5),
                    }}
                  >
                    <a
                      href={tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/Tripadvisor.png"
                        alt="fb"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href={booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mg-lt"
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/bookingcom.png"
                        alt="insta"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>
                  </div>
                </div>

                <h1
                  class="heading-name-03"
                  style={{
                    marginTop: getSize(12, 6),
                    marginLeft: getSize(8, 4),
                    fontSize: getSize(7.264, 3.5),
                    lineHeight: getSize(8.475, 4.2),
                    color: darkMode ? "#FFFFFF" : "#050918",
                  }}
                >
                  {subTitle}
                </h1>
                <form
                  method="post"
                  class="form"
                  style={{
                    marginTop: getSize(4, 3),
                    marginLeft: getSize(8, 4),
                  }}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    class="input"
                    style={{
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    class="input"
                    style={{
                      marginTop: getSize(4, 2),
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                    }}
                  />
                  <div class="button-wrapper">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      class="primary-btn"
                      style={{
                        marginTop: getSize(4, 2),
                        width: "30%",
                        backgroundColor: "#FFDFA1",
                        color: darkMode ? "#050918" : "#FFFFFF",
                        marginBottom: getSize(6, 3),
                        border: "none",
                        paddingTop: getSize(3.39, 1.8),
                        paddingBottom: getSize(3.39, 1.8),
                        paddingLeft: getSize(3.668, 1.8),
                        paddingRight: getSize(3.668, 1.8),
                        borderRadius: getSize(0.852, 0.4),
                        fontSize: getSize(3.405, 1.8),
                        lineHeight: getSize(5.085, 3),
                      }}
                    />
                  </div>
                </form>
                <div
                  className="extra-icons"
                  style={{
                    marginTop: getSize(7.299, 3.6),
                    paddingBottom: getSize(7, 3.5),
                    borderRadius: "100px 0px 0px 0px",
                    background: "#F1E7D8",
                  }}
                >
                  <div className="extra-container">
                    <h1
                      className="heading-name"
                      style={{
                        marginBottom: "0",
                        color: "#181E2A",
                        marginTop: getSize(10.169, 5),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                      }}
                    >
                      {partnerTitle}
                    </h1>

                    <div
                      className="round-icons-wrapper"
                      style={{
                        marginTop: getSize(2, 1),
                      }}
                    >
                      <div
                        className="round-icons-container"
                        style={{
                          width: getSize(90, 45),
                        }}
                      >
                        <a
                          href={partnerLink1}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="round"
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: "#ffffff",
                          }}
                        >
                          <img
                            src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/logo.png"
                            alt="lg-extra"
                            className="extra-icon"
                          />
                        </a>
                        <a
                          className="round"
                          href={partnerLink2}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: "#ffffff",
                          }}
                        >
                          <img
                            src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/logo.png"
                            alt="lg-extra"
                            className="extra-icon"
                          />
                        </a>

                        <a
                          className="round"
                          href={partnerLink3}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: "#ffffff",
                          }}
                        >
                          <img
                            src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/logo.png"
                            alt="lg-extra"
                            className="extra-icon"
                          />
                        </a>

                        <a
                          className="round"
                          href={partnerLink4}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: "#ffffff",
                          }}
                        >
                          <img
                            src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/logo.png"
                            alt="lg-extra"
                            className="extra-icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#!" className="secondSlideArrow">
                  <img
                    src={
                      "https://raw.githubusercontent.com/rohit-virkud/transportation-dark/main/left-arrow-black.png"
                    }
                    alt="left-arrow"
                    className="prev left-arrow"
                    style={{
                      width: getSize(2.6, 1.3),
                      height: getSize(4.542, 2.5),
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Transportation;
