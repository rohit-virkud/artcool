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
textarea, input { outline: none; }
body{
  background-color: #F6F6F6;
 
}
.body::-webkit-scrollbar {
  display: none;
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
width: 100%;
height: 100%;

}

.slide-inner {
position: absolute;
width: 100%;
min-height: 100%;
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
  flex-shrink: 0;
  background-color: #F6F6F6;
 
}
.container
{
  width: 80%;
  height: 100%;
  z-index: 2;
 
}
.slideOnePattern
{

  position: absolute;
  top: auto;
  bottom: 8%;
  right: 0;
  left: auto;
  z-index: 1;
}
.logo
{
  
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/logo.png') no-repeat;
  background-size: contain;
}
.heading-name,.heading-sirname
{
 
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  
  width: 100%;
  
  
}

.tag
{
  
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:#34413B;

}


.contact-container
{
  
  width: 100%;
  display: flex;flex-shrink: 0;
  align-items: center;
}

.contact-txt
{
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  width: 70%;
  color: #34413B;
 
}
.primary-btn
{
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #FFFFFF;;
  background-color: #34413B;
  /*box-shadow: 0px 2px 4px 50px rgba(255, 223, 161, 0.1);*/
  display: inline-block;

}

.share-btn
{
  position: absolute;
  width: min(10.896vw,6vh);
  height:min(10.896vw,6vh);
  top: 3%;
  right: 6%;
  left: auto;
  bottom: auto;
}

.share-btn img
{
  width: min(10.896vw,6vh);
  height:min(10.896vw,6vh);
}

.lottie-anim
{
  position: fixed;
  bottom: 1.5%;
 
}


.firstSlideArrow
{
  position:absolute;
  bottom: 2%;
  
  right: 6%;
  
}


/**/

.slide-02
{
  background: #E8E4D9;
}
.image-container
{
  
  width: 100%;
  overflow: hidden;
}
.image
{
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Image-02.png')no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  transform: scale(1.1);
  transition:  transform 5s ease-in-out;
  
}

.zoomOut
{
  transform: scale(1);
}

.heading-name02
{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #000000;
}
.heading02-p{
 
  width: 100%;
  color:#000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 163.15%;
  margin-bottom: 20%;

}
.slide02pattern
{
  position: absolute;
  left: 0;
  top: auto;
  bottom: 4%; 
  z-index: 1;
}
.slide02patternSmall
{
  position: absolute;
  right: 0;
  left: auto;
  top: 35%;
  bottom: auto; 
  z-index: 1;

}

.secondSlideArrow
{
  position:absolute;
  top: auto;
  bottom: 2%;
  left: 6%;
  z-index: 1;
  
}


.grid
{
  
  width: 100%;
  display: grid;flex-shrink: 0;
  grid-template-columns: 1fr 1fr;
 
}

.image01
{
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Image1.png')no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  
}
.image02
{
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Image2.png')no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
 

}
.image03
{
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Image3.png')no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;


}
.image04
{
  background: url('https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Image4.png')no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  

}
.container-03
{
  width: 82%;
  height: 100%;
}


.heading-name-03
{
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #000000;
}
.mg-lt
{
 
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
 display: flex;flex-shrink: 0;
 flex-direction: column;
 justify-content: center;
}
.input
{

font-family: Roboto;
font-style: normal;
font-weight: bold;

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
  flex: 1 0 35vw;
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

  margin-top: 30%;
  color: #1D3138;
  transform: translateX(-80%);
  transition:  transform 1s ease-out;
}



.icon-grid
{
  display: grid;
  width: 100%;
  grid-template-columns: 11vw 11vw 11vw 11vw;
  
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
/*.swiper-slide-prev
{
filter: brightness(0.5) invert(0.001);
transition:  transform 0.5s all;
}*/
.swiper-slide
{
  overflow-y: scroll;
  overflow-x: hidden;
   
}
.left-arrow
{
  z-index:1;
}

.overlaywrapper1,.overlaywrapper2,.overlaywrapper3,.overlaywrapper4
       {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity:0;
        transition: 0.5s all ease-out;
       }
    

       .overlay
       {
           
           opacity: 1;
           background:rgba(0, 0, 0, 0.50);
       }


`;

const Realestate = () => {
  const size = useWindowSize();

  const getSize = (width, heightPercentage) => {
    return `min(${width}vw, ${(size.height * heightPercentage) / 100}px)`;
  };

  const [firstName, setFirstName] = useState("Elena");
  const [lastName, setLastName] = useState("Papadopoulou");
  const [email, setEmail] = useState("info@artcoolcards.gr");
  const [address, setAddress] = useState(
    "Lisikratous 88, Kallithea, 17674 Athens, Greece"
  );
  const [mobile, setMobile] = useState("+30 6936503000");
  const [landline, setLandline] = useState("+30 6936503000");
  const [website, setWebsite] = useState("www.artcoolcards.gr");
  const [profession, setProfession] = useState("REAL ESTATE CONSULTANT");

  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis doloreeum iriure dolor in hendrerit in."
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

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    //eslint-disable-next
    var swiperOptions = {
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheelControl: true,
      keyboardControl: true,
      parallax: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      on: {
        progress: function (progress) {
          var swiper = this;
          /*stop first slide movement*/
          if (swiper.activeIndex === 0) {
            swiper.allowSlidePrev = false;
          } else {
            swiper.allowSlidePrev = true;
          }
          /**/

          for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides[i];
            var translate, boxShadow, boxShadowOpacity;
            progress = slide.progress;

            if (progress > 0) {
              translate = progress * swiper.width;
              boxShadowOpacity = 0;
            } else {
              translate = 0;
              // boxShadowOpacity = 1  - Math.min(Math.abs(progress),1);
            }
            $(slide).css({
              boxShadow: "0px 0px 10px rgba(0,0,0," + boxShadowOpacity + ")",
              transform: "translate3d(" + translate + "px,0,0)",
            });
          }
        },
        touchStart: function () {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (sli, speed) {
          var swiper = this;
          console.log(speed);
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    /*image zoom in animations*/
    setInterval(function () {
      if (swiper.activeIndex === 1) {
        $(".image").addClass("zoomOut");
      } else {
        $(".image").removeClass("zoomOut");
      }

      if ($(".s1").hasClass("swiper-slide-prev")) {
        $(".overlaywrapper1").addClass("overlay");
      } else {
        $(".overlaywrapper1").removeClass("overlay");
      }

      if ($(".s2").hasClass("swiper-slide-prev")) {
        $(".overlaywrapper2").addClass("overlay");
      } else {
        $(".overlaywrapper2").removeClass("overlay");
      }

      if ($(".s3").hasClass("swiper-slide-prev")) {
        $(".overlaywrapper3").addClass("overlay");
      } else {
        $(".overlaywrapper3").removeClass("overlay");
      }

      if ($(".s4").hasClass("swiper-slide-prev")) {
        $(".overlaywrapper4").addClass("overlay");
      } else {
        $(".overlaywrapper4").removeClass("overlay");
      }
    }, 500);
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

  console.log();

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
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: darkMode ? "#1D3138" : "#F6F6F6",
        }}
      >
        <div
          className="share-slide"
          id="share-slide"
          style={{
            backgroundColor: darkMode ? "#ffffff" : "#F6F6F6",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/closeicon.png"
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
                color: darkMode ? "#1D4B7A" : "#1D3138",
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
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/sms.png"
                  alt="sms-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/cs.png"
                  alt="cs-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/whatsapp.png"
                  alt="whatsapp-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/dropbox 187.png"
                  alt="dropbox-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/fb9.png"
                  alt="fb-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/telegram 191.png"
                  alt="tel-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/twitter8.png"
                  alt="twit-img"
                  style={{
                    width: getSize(11, 5),
                    height: getSize(11, 5),
                  }}
                />
              </a>
              <a href="#!">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/linkedin3.png"
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
                color: darkMode ? "#1D4B7A" : "#1D3138",
              }}
            >
              SCAN AND SAVE
            </h2>
            <div className="qr-code-container">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/qr.png"
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
                background: darkMode ? "#1D3138" : "#F6F6F6",
              }}
            >
              <img
                src={
                  darkMode
                    ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/slide-01.png"
                    : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/slide-01.png"
                }
                alt="slide-01-pattern"
                className="slideOnePattern"
                style={{
                  width: getSize(25.424, 18),
                  height: getSize(50.847, 35),
                }}
              />

              <audio id="audio">
                <source
                  src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/intro.mpeg"
                  type="audio/mpeg"
                />
              </audio>
              <div className="slide-inner">
                <div
                  className="slide-01"
                  style={{
                    background: darkMode ? "#1D3138" : "#F6F6F6",
                  }}
                >
                  <div className="overlaywrapper1"></div>
                  <div className="container">
                    <div
                      className="logo"
                      style={{
                        width: getSize(29.298, 15),
                        height: getSize(13.801, 7),
                        marginTop: getSize(13.801, 7),
                      }}
                      data-swiper-parallax="-300"
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
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/share-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/share-icon.png"
                        }
                        alt="share"
                      />
                    </div>

                    <h1
                      className="heading-name"
                      style={{
                        marginTop: getSize(10.169, 5),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                        color: darkMode ? "#ffffff" : "#34413B",
                      }}
                      data-swiper-parallax="-300"
                    >
                      {firstName}
                    </h1>
                    <h1
                      className="heading-sirname"
                      style={{
                        marginTop: getSize(1.695, 0.8),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                        color: darkMode ? "#ffffff" : "#34413B;",
                      }}
                      data-swiper-parallax="-300"
                    >
                      {lastName}
                    </h1>
                    <p
                      className="tag"
                      style={{
                        marginTop: getSize(3.148, 1.8),
                        fontSize: getSize(2.906, 1.5),
                        lineHeight: getSize(3.39, 1.8),
                        color: darkMode ? "#FFFFFF" : "#34413B",
                      }}
                      data-swiper-parallax="-300"
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
                        background: darkMode ? "#FFDFA1" : "#34413B",
                      }}
                      data-swiper-parallax="-250"
                    ></div>

                    <a
                      href={`tel:${mobile}`}
                      className="contact-container cc-top"
                      style={{
                        marginTop: getSize(10.291, 5.5),
                      }}
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/phone-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/phone-icon.png"
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
                          color: darkMode ? "#FFFFFF" : "#34413B",
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
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/home-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/home-icon.png"
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
                          color: darkMode ? "#FFFFFF" : "#34413B",
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
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/msg-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/msg-icon.png"
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
                          color: darkMode ? "#FFFFFF" : "#34413B",
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
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/location-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/location-icon.png"
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
                          color: darkMode ? "#FFFFFF" : "#34413B",
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
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/web-icon.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/web-icon.png"
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
                          color: darkMode ? "#FFFFFF" : "#34413B",
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
                        color: darkMode ? "#1D3138" : "#FFFFFF",
                        backgroundColor: darkMode ? "#FFDFA1" : "#34413B",
                      }}
                      data-swiper-parallax="-280"
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
                        width: "10vw",
                        height: "10vw",
                      }}
                      data-swiper-parallax="-250"
                    ></lottie-player>

                    <a
                      href="#!"
                      className="firstSlideArrow"
                      data-swiper-parallax="-250"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/left-arrow.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/left-arrow.png"
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
              style={{
                background: darkMode
                  ? "linear-gradient(184.93deg, #3A6574 1.88%, #24424E 96.03%)"
                  : "#E8E4D9",
              }}
            >
              <img
                src={
                  darkMode
                    ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/slide2patternSmall.png"
                    : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/slide2patternSmall.png"
                }
                alt="slide-02"
                className="slide02patternSmall"
                style={{
                  width: getSize(15.254, 7.5),
                  height: getSize(30.266, 16),
                }}
              />
              <div className="slide-inner">
                <div
                  className="slide-02"
                  style={{
                    background: darkMode ? "transparent" : "#E8E4D9",
                  }}
                >
                  <div className="overlaywrapper2"></div>
                  <img
                    src={
                      darkMode
                        ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/slide2pattern.png"
                        : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/slide2pattern.png"
                    }
                    alt="slide-02"
                    className="slide02pattern"
                    style={{
                      width: getSize(14.77, 7.2),
                      height: getSize(29.782, 15.2),
                    }}
                  />
                  <div className="container">
                    <div
                      className="image-container"
                      style={{
                        height: getSize(50.121, 30),
                        marginTop: getSize(12.833, 7),
                      }}
                      data-swiper-parallax="-350"
                    >
                      <div
                        className="image"
                        style={{
                          height: getSize(50.121, 30),
                        }}
                      ></div>
                    </div>

                    <h1
                      className="heading-name02"
                      style={{
                        fontSize: getSize(7.264, 3.5),
                        lineHeight: getSize(8.475, 4.2),
                        marginTop: getSize(9.443, 4.8),
                        color: darkMode ? "#FFFFFF" : "#000000",
                      }}
                      data-swiper-parallax="-350"
                    >
                      About Us
                    </h1>

                    <p
                      className="heading02-p"
                      style={{
                        fontSize: getSize(3.632, 1.8),
                        marginTop: getSize(9.201, 4.5),
                        color: darkMode ? "#FFFFFF" : "#000000",
                      }}
                      data-swiper-parallax="-250"
                    >
                      {about}
                    </p>

                    <a
                      href="#!"
                      className="secondSlideArrow"
                      data-swiper-parallax="-250"
                      style={{
                        width: getSize(2.6, 1.3),
                        height: getSize(4.542, 2.5),
                      }}
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/left-arrow.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/left-arrow.png"
                        }
                        alt="left-arrow"
                        className="prev left-arrow"
                        style={{
                          width: getSize(2.6, 1.3),
                          height: getSize(4.542, 2.5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="firstSlideArrow"
                      data-swiper-parallax="-250"
                    >
                      <img
                        src={
                          darkMode
                            ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/right-arrow.png"
                            : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/right-arrow.png"
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
              className="swiper-slide s3"
              style={{ background: darkMode ? "#1D3138" : "#CAC3B1" }}
            >
              <img
                src={
                  darkMode
                    ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/slide-01.png"
                    : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/slide-03-light.png"
                }
                alt="slide-03"
                className="slideOnePattern"
                style={{
                  width: getSize(25.424, 18),
                  height: getSize(50.847, 35),
                }}
              />

              <div className="slide-inner">
                <div
                  className="slide-03"
                  style={{ background: darkMode ? "#1D3138" : "#CAC3B1" }}
                >
                  <div className="overlaywrapper3"></div>
                  <div className="container-03">
                    <h1
                      className="heading-name"
                      style={{
                        marginTop: getSize(16, 8),
                        color: darkMode ? "#ffffff" : "#000000",
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                      }}
                      data-swiper-parallax="-300"
                    >
                      Gallery
                    </h1>
                    <div
                      className="grid"
                      style={{
                        marginTop: getSize(8, 4),
                        gridColumnGap: getSize(3.623, 1.6),
                        gridRowGap: getSize(3.623, 1.6),
                      }}
                      data-swiper-parallax="-350"
                    >
                      <div
                        className="image01"
                        style={{
                          height: getSize(30.1, 16),
                        }}
                      ></div>
                      <div
                        className="image02"
                        style={{
                          height: getSize(30.1, 16),
                        }}
                      ></div>
                      <div
                        className="image03"
                        style={{
                          height: getSize(30.1, 16),
                        }}
                      ></div>
                      <div
                        className="image04"
                        style={{
                          height: getSize(30.1, 16),
                        }}
                      ></div>
                    </div>

                    <h1
                      className="heading-name-03"
                      style={{
                        marginTop: getSize(8, 4),
                        fontSize: getSize(7.264, 3.5),
                        lineHeight: getSize(8.475, 4.2),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                      data-swiper-parallax="-250"
                    >
                      Follow Us
                    </h1>
                    <div
                      className="social-icons"
                      style={{
                        marginTop: getSize(5, 2.5),
                      }}
                      data-swiper-parallax="-250"
                    >
                      <a href={facebook}>
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/fb.png"
                          alt="fb"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={instagram}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/insta.png"
                          alt="insta"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={youtube}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/youtube.png"
                          alt="youtube"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={telegram}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/telegram.png"
                          alt="telegram"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={twitter}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/twitter.png"
                          alt="twitter"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={tiktok}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/tiktok.png"
                          alt="tiktok"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a
                        href={linkedin}
                        style={{
                          marginLeft: getSize(2, 1),
                        }}
                      >
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/linkedin.png"
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
                      data-swiper-parallax="-250"
                      style={{
                        marginTop: getSize(8, 4),
                        fontSize: getSize(7.264, 3.5),
                        lineHeight: getSize(8.475, 4.2),
                        color: darkMode ? "#ffffff" : "#000000",
                      }}
                    >
                      Our Reviews
                    </h1>
                    <div
                      className="social-icons"
                      style={{
                        marginTop: getSize(5, 2.5),
                      }}
                      data-swiper-parallax="-250"
                    >
                      <a href={tripadvisor}>
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/Tripadvisor.png"
                          alt="fb"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                          }}
                        />
                      </a>

                      <a href={booking} className="mg-lt">
                        <img
                          src="https://raw.githubusercontent.com/rohit-virkud/template02-light/main/bookingcom.png"
                          alt="insta"
                          style={{
                            width: getSize(8, 5),
                            height: getSize(8, 5),
                            marginLeft: getSize(2, 1),
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="#!"
                  className="secondSlideArrow"
                  data-swiper-parallax="-250"
                  style={{
                    width: getSize(2.6, 1.3),
                    height: getSize(4.542, 2.5),
                  }}
                >
                  <img
                    src={
                      darkMode
                        ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/left-arrow.png"
                        : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/left-arrow.png"
                    }
                    alt="left-arrow"
                    className="prev left-arrow"
                    style={{
                      width: getSize(2.6, 1.3),
                      height: getSize(4.542, 2.5),
                    }}
                  />
                </a>

                <a
                  href="#!"
                  className="firstSlideArrow"
                  data-swiper-parallax="-250"
                >
                  <img
                    src={
                      darkMode
                        ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/right-arrow.png"
                        : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/right-arrow.png"
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
            <div
              className="swiper-slide s4"
              style={{
                background: darkMode ? "#1D3138" : "#8E8879",
              }}
            >
              <div className="slide-inner slide-04">
                <div className="overlaywrapper4"></div>
                <h1
                  className="heading-name"
                  style={{
                    marginTop: getSize(16, 8),
                    marginLeft: getSize(8, 4),
                    fontSize: getSize(6.78, 4),
                    lineHeight: getSize(6.78, 4),
                    color: darkMode ? "#FFFFFF" : "#000000",
                  }}
                  data-swiper-parallax="-300"
                >
                  Subscribe
                </h1>
                <form
                  method="post"
                  className="form"
                  style={{
                    marginTop: "min(4vw,3vh)",
                    marginLeft: "min(8vw,4vh)",
                  }}
                  data-swiper-parallax="-300"
                >
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input"
                    style={{
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                      borderRadius: getSize(0.852, 0.4),
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input"
                    style={{
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                      borderRadius: getSize(0.852, 0.4),
                      marginTop: getSize(4, 2),
                    }}
                  />
                  <div className="button-wrapper">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      className="primary-btn"
                      style={{
                        paddingTop: getSize(3.39, 1.8),
                        paddingBottom: getSize(3.39, 1.8),
                        paddingLeft: getSize(3.668, 1.8),
                        paddingRight: getSize(3.668, 1.8),
                        borderRadius: getSize(0.852, 0.4),
                        fontSize: getSize(3.405, 1.8),
                        lineHeight: getSize(5.085, 3),
                        marginTop: getSize(4, 2),
                        width: "30%",
                        backgroundColor: "#FFDFA1",
                        color: "#1D3138",
                      }}
                    />
                  </div>
                </form>

                <div
                  className="extra-icons"
                  style={{
                    marginTop: getSize(7.299, 3.6),
                    paddingBottom: getSize(7, 3.5),
                    background: darkMode ? "#0C232C" : "#E7E7E7",
                  }}
                >
                  <div className="extra-container">
                    <h1
                      className="heading-name"
                      style={{
                        marginBottom: "0",
                        color: darkMode ? "#ffffff" : "#000000",
                        marginTop: getSize(10.169, 5),
                        fontSize: getSize(6.78, 4),
                        lineHeight: getSize(6.78, 4),
                      }}
                      data-swiper-parallax="-200"
                    >
                      Our Partners
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
                        data-swiper-parallax="-200"
                      >
                        <a
                          href={partnerLink1}
                          className="round"
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: darkMode ? "#C4C4C4" : "#ffffff",
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
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: darkMode ? "#C4C4C4" : "#ffffff",
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
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: darkMode ? "#C4C4C4" : "#ffffff",
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
                          style={{
                            maxWidth: getSize(25, 15),
                            marginTop: getSize(4, 1),
                            marginBottom: getSize(4, 1),
                            marginLeft: getSize(5, 2.5),
                            marginRight: getSize(5, 2.5),
                            height: getSize(25, 15),
                            background: darkMode ? "#C4C4C4" : "#ffffff",
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

                <a
                  href="#!"
                  className="secondSlideArrow"
                  data-swiper-parallax="-250"
                >
                  <img
                    src={
                      darkMode
                        ? "https://raw.githubusercontent.com/rohit-virkud/template02/main/left-arrow.png"
                        : "https://raw.githubusercontent.com/rohit-virkud/template02-light/main/left-arrow.png"
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

export default Realestate;
