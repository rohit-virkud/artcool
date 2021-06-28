import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { useWindowSize } from "./WindowSize";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body
{
overflow: hidden; /* Hide scrollbars */ 
 background-color: #ffffff;
}
.container::-webkit-scrollbar {
width: 0;  /* Remove scrollbar space */
background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
.container::-webkit-scrollbar-thumb {
background: #FF0000;
}
a{
text-decoration: none;
color: inherit;
}

.effect-wrapper
{
    align-items: center;
 background-color: #000;
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 perspective: 261.111vw;
 position: relative;
 width: 100%;
 overflow:hidden;
}
.effect
{
 overflow: hidden;
transform-origin: 100% 0;
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
width: 100%;
min-height: 100vh;
background: linear-gradient(179.7deg, #0C201A 0.4%, #05130F 34.65%, rgba(1, 31, 22, 0.98) 70.18%, rgba(0, 40, 28, 0.96) 96.64%);;
}
.active  {
transform: rotateX(-35deg);

}
.overlay {
background: linear-gradient(#0000001f 0%, #0000009f 80%, #000000bf 100%);
height: 100%;
opacity: 0;
position: absolute;
transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
top: 0;
width: 100%;
pointer-events: none;
}
.overlayactive {
opacity: 1;
}

.container-wrapper
{
width: 100%;
height: 100vh;
display: flex;
justify-content: center;

}
.container
{
width: 90%;
height: 88%;
overflow:scroll;
}

.image-container
{

width: 100%;
height: 25vh;
box-shadow: 0 0.4px 1px rgba(0, 0, 0, 0.026), 0 1px 2.3px rgba(0, 0, 0, 0.045),
0 1.9px 4.4px rgba(0, 0, 0, 0.065), 0 3.4px 7.8px rgba(0, 0, 0, 0.094),
0 6.3px 14.6px rgba(0, 0, 0, 0.145), 0 15px 35px rgba(0, 0, 0, 0.25);
transform-origin: 50% 100%;
position: relative;

}
.image
{
width: 100%;
height: 100%;
background-size: contain;
background-position: center;


}
h1,p{
color: white;
}
h1{

font-weight: 700;
word-break: break-word;
}


.first-name,.last-name
{

width: 90%;
  
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-weight: 700;

}

.tag
{
width: 90%;		
font-family: Roboto;
font-style: normal;
font-weight: 900;		
letter-spacing: 0.1em;
color: #E9C49A;
 
}



 .contact-container
 {
     
     width: 100%;
     display: flex;
     align-items: center;
 }

 .contact-txt
 {
   
     font-weight: 300;
     
     width: 80%;

 }

 .fixed-buttons
 {
     width: 90%;
     
     position: fixed;
     top: auto;
     display: flex;
     justify-content: center;
     align-items: center;
     bottom: 1.5%;
     z-index: 1;
 }

 .share-icon-holder
 {
     display: flex;
     flex-shrink: 0;
     flex-direction: column;
     -webkit-box-pack: center;
     justify-content: center;
     -webkit-box-align: center;
     align-items: center;
     transition: 0.1s ease-out opacity;
 }

 .share-icon
 {
    
 }
 .save-icon
 {
    
 }

 .share-menu,.share-menu-barcode {
background: #06251B;
background-blend-mode: screen;
bottom: 0;
display: flex;
flex-wrap: wrap;
height: 60vw;
position: absolute;
transform: translateY(60vw);
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
width: 100%;

}



.open
{
transform: translateY(0vw);
}

 .heading-name-03
 {
    
     font-family: Roboto;
     font-style: normal;
     font-weight: bold;
     
     
 }
 .mg-lt
 {
     
 }
 .input
{

 font-family: Roboto;
 font-style: normal;

 background: #FFFFFF;
 /* Light Grey */
 
 box-sizing: border-box;
 border-radius: 50px;

 border-radius: 50px;

}

.form
{
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    width: 85%;
}

 .primary-btn
 {
    
     font-family: Roboto;
     font-style: normal;
     font-weight: bold;
    
     color: #FFFFFF;;
     background-color: #34413B;
     border-radius: 50px;
     background: #E4B464;
     box-shadow: 0px 4px 20px rgba(86, 84, 84, 0.15);
     background-size: cover;
     background-position: center;
     border: none;
     /*box-shadow: 0px 2px 4px 50px rgba(255, 223, 161, 0.1);*/
     display: inline-block;
     

    
 }

 .line
 {
     width: 90%;
     height: 1px;
     background-color: white;
    
 }
 .share-text
 {
     
 }

 

 /*share icons*/



 .share-slide
 {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
 }
 .close-icon
 {
     position: absolute;
     top:10%;
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
     color: #ffffff;  
 }
 .scan-and-save-txt
 {
    font-size: min(5vw,2.5vh);
    margin-bottom:  min(4vw,4vh);
     color: #1D3138;
     
     margin-top: 30%;
    
  
     
 }


 
 .icon-grid
 {
     display: grid;
     width: 100%;
     grid-template-columns: 11vw 11vw 11vw 11vw;
   
     
     justify-content: center;
    
   
    
     
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
     
  
     transition:  transform 1s ease-out;
 }
 .qr-code-container img
 { 
     
    
    
 }
`;

const Lawyer = () => {
  const size = useWindowSize();

  const getSize = (width, heightPercentage) => {
    return `min(${width}vw, ${(size.height * heightPercentage) / 100}px)`;
  };

  useEffect(() => {
    //eslint-disable-next
  }, []);

  function openShare() {
    $(".effect").toggleClass("active");
    $(".overlay").css("opacity", "1");
    $(".share-icon-holder").css("opacity", "0");
    $(".share-menu").toggleClass("open");
  }

  function closeShare() {
    $(".effect").toggleClass("active");
    $(".overlay").css("opacity", "0");
    $(".share-icon-holder").css("opacity", "1");
    $(".share-menu").toggleClass("open");
  }

  function openBarcode() {
    $(".effect").toggleClass("active");
    $(".overlay").css("opacity", "1");
    $(".share-icon-holder").css("opacity", "0");
    $(".share-menu-barcode").toggleClass("open");
  }
  function closeBarcode() {
    $(".effect").toggleClass("active");
    $(".overlay").css("opacity", "0");
    $(".share-icon-holder").css("opacity", "1");
    $(".share-menu-barcode").removeClass("open");
  }

  return (
    <div>
      <GlobalStyle />

      <div className="effect-wrapper">
        <div className="effect">
          <div className="container-wrapper">
            <div className="container">
              <div
                className="image-container"
                style={{
                  marginTop: getSize(5, 3),
                  borderRadius: getSize(5, 3),
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/img.jpg"
                  alt="image"
                  className="image"
                />
              </div>

              <div
                className="content-margin"
                style={{
                  marginLeft: getSize(3, 1.5),
                }}
              >
                <h1
                  className="first-name"
                  style={{
                    marginTop: getSize(5, 2.5),
                    fontSize: getSize(7.5, 3.5),
                    lineHeight: getSize(8, 4),
                  }}
                >
                  George
                </h1>
                <h1
                  className="last-name"
                  style={{
                    fontSize: getSize(7.5, 3.5),
                    lineHeight: getSize(8, 4),
                  }}
                >
                  Papadopoulos
                </h1>
                <p
                  className="tag"
                  style={{
                    fontSize: getSize(3.2, 1.6),
                    marginTop: getSize(2, 1),
                  }}
                >
                  LAWYER
                </p>

                <a
                  href="#!"
                  className="contact-container cc-top"
                  style={{
                    marginTop: getSize(10.291, 5.5),
                  }}
                >
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/phone-icon.png"
                    alt="phone"
                    className="contact-icon"
                    style={{
                      width: getSize(8, 5),
                      height: getSize(8, 5),
                    }}
                  />
                  <p
                    className="contact-txt"
                    style={{
                      marginLeft: getSize(4.116, 2.5),
                      fontSize: getSize(4, 2),
                      lineHeight: getSize(6, 3),
                    }}
                  >
                    +30 6936503000
                  </p>
                </a>

                <a
                  href="#!"
                  className="contact-container"
                  style={{
                    marginTop: getSize(5.569, 3.2),
                  }}
                >
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/home-icon.png"
                    alt="phone"
                    className="contact-icon"
                    style={{
                      width: getSize(8, 5),
                      height: getSize(8, 5),
                    }}
                  />
                  <p
                    className="contact-txt"
                    style={{
                      marginLeft: getSize(4.116, 2.5),
                      fontSize: getSize(4, 2),
                      lineHeight: getSize(6, 3),
                    }}
                  >
                    +30 2145256352
                  </p>
                </a>

                <a
                  href="#!"
                  className="contact-container"
                  style={{
                    marginTop: getSize(5.569, 3.2),
                  }}
                >
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/msg-icon.png"
                    alt="phone"
                    className="contact-icon"
                    style={{
                      width: getSize(8, 5),
                      height: getSize(8, 5),
                    }}
                  />
                  <p
                    className="contact-txt"
                    style={{
                      marginLeft: getSize(4.116, 2.5),
                      fontSize: getSize(4, 2),
                      lineHeight: getSize(6, 3),
                    }}
                  >
                    info@artcoolcards.gr
                  </p>
                </a>

                <a
                  href="#!"
                  className="contact-container"
                  style={{
                    marginTop: getSize(5.569, 3.2),
                  }}
                >
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/location-icon.png"
                    alt="phone"
                    className="contact-icon"
                    style={{
                      width: getSize(8, 5),
                      height: getSize(8, 5),
                    }}
                  />
                  <p
                    className="contact-txt"
                    style={{
                      marginLeft: getSize(4.116, 2.5),
                      fontSize: getSize(4, 2),
                      lineHeight: getSize(6, 3),
                    }}
                  >
                    Lisikratous 88, Kallithea, 176 74, Athens, Greece
                  </p>
                </a>

                <a
                  href="#!"
                  className="contact-container"
                  style={{
                    marginTop: getSize(5.569, 3.2),
                    marginBottom: getSize(12.107, 6.5),
                  }}
                >
                  <img
                    src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/web-icon.png"
                    alt="phone"
                    className="contact-icon"
                    style={{
                      width: getSize(8, 5),
                      height: getSize(8, 5),
                    }}
                  />
                  <p
                    className="contact-txt"
                    style={{
                      marginLeft: getSize(4.116, 2.5),
                      fontSize: getSize(4, 2),
                      lineHeight: getSize(6, 3),
                    }}
                  >
                    www.artcoolcards.gr
                  </p>
                </a>

                <div
                  className="line"
                  style={{
                    marginBottom: getSize(12.107, 6.5),
                  }}
                ></div>

                <div
                  className="container-03 socialmax"
                  style={{ marginTop: getSize(8, 4) }}
                >
                  <h1
                    className="heading-name-03"
                    style={{
                      marginTop: getSize(8, 4),
                      fontSize: getSize(7.264, 3.5),
                      lineHeight: getSize(8.475, 4.2),
                    }}
                  >
                    Follow Us
                  </h1>
                  <div
                    className="social-icons"
                    style={{
                      marginTop: getSize(5, 2.5),
                    }}
                  >
                    <a href="#!">
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/fb.png"
                        alt="fb"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/insta.png"
                        alt="insta"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/youtube.png"
                        alt="youtube"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/telegram.png"
                        alt="telegram"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/twitter.png"
                        alt="twitter"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/tiktok.png"
                        alt="tiktok"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/linkedin.png"
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
                      marginTop: getSize(8, 4),
                      fontSize: getSize(7.264, 3.5),
                      lineHeight: getSize(8.475, 4.2),
                    }}
                  >
                    Our Reviews
                  </h1>
                  <div
                    className="social-icons"
                    style={{
                      marginTop: getSize(5, 2.5),
                    }}
                  >
                    <a href="#!">
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/Tripadvisor.png"
                        alt="fb"
                        style={{
                          width: getSize(8, 5),
                          height: getSize(8, 5),
                        }}
                      />
                    </a>

                    <a
                      href="#!"
                      className="mg-lt"
                      style={{
                        marginLeft: getSize(2, 1),
                      }}
                    >
                      <img
                        src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/bookingcom.png"
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
                  className="heading-name-03"
                  style={{
                    marginTop: getSize(12, 6),
                    fontSize: getSize(7.264, 3.5),
                    lineHeight: getSize(8.475, 4.2),
                  }}
                >
                  Subscribe
                </h1>
                <form
                  method="post"
                  className="form"
                  style={{ marginTop: getSize(4, 3) }}
                >
                  <input
                    type="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input"
                    style={{
                      paddingTop: getSize(2.39, 1.5),
                      paddingBottom: getSize(2.39, 1.5),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input"
                    style={{
                      marginTop: getSize(4, 2),
                      paddingTop: getSize(2.39, 1.5),
                      paddingBottom: getSize(2.39, 1.5),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                    }}
                  />
                  <div className="button-wrapper">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      className="primary-btn"
                      style={{
                        marginTop: getSize(4, 2),
                        width: "30%",
                        marginLeft: getSize(1, 0.5),
                        color: "#ffffff",
                        marginBottom: getSize(10, 5),
                        border: "none",

                        paddingTop: getSize(2.39, 1.5),
                        paddingBottom: getSize(2.39, 1.5),
                        paddingLeft: getSize(4, 2),
                        paddingRight: getSize(4, 2),
                        fontSize: getSize(3.405, 1.8),
                        lineHeight: getSize(5.085, 3),
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div
              className="fixed-buttons"
              style={{
                height: getSize(26, 13),
              }}
            >
              <a
                href="#!"
                className="share-icon-holder"
                onClick={(e) => {
                  e.preventDefault();
                  openShare();
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/share-button.png"
                  alt="share"
                  className="share-icon"
                  style={{
                    width: getSize(10, 6),
                    height: getSize(10, 6),
                  }}
                />

                <p
                  className="share-text"
                  style={{
                    fontSize: getSize(3, 1.5),
                    marginTop: getSize(2, 1.5),
                  }}
                >
                  share
                </p>
              </a>

              <a href="#!" className="share-icon-holder">
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/save-btn.png"
                  alt="share"
                  className="save-icon"
                  style={{
                    width: getSize(12, 8),
                    height: getSize(12, 8),
                    marginLeft: getSize(10, 6),
                    marginRight: getSize(10, 6),
                  }}
                />
                <p
                  className="share-text"
                  style={{
                    fontSize: getSize(3, 1.5),
                    marginTop: getSize(2, 1.5),
                  }}
                >
                  save contacts
                </p>
              </a>

              <a
                href="#!"
                className="share-icon-holder"
                onClick={(e) => {
                  e.preventDefault();
                  openBarcode();
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/barcode.png"
                  alt="share"
                  className="share-icon"
                  style={{
                    width: getSize(10, 6),
                    height: getSize(10, 6),
                  }}
                />
                <p
                  className="share-text"
                  style={{
                    fontSize: getSize(3, 1.5),
                    marginTop: getSize(2, 1.5),
                  }}
                >
                  qr code
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <div
        className="share-menu"
        style={{
          borderTopLeftRadius: getSize(5, 3),
          borderTopRightRadius: getSize(5, 3),
        }}
      >
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            closeShare();
          }}
        >
          <img
            src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon.png"
            alt="close-icon"
            className="close-icon"
            style={{
              width: getSize(5, 3),
              height: getSize(5, 3),
            }}
          />
        </a>

        <div className="share-slide-share-icons">
          <h2
            className="share-headline"
            style={{
              fontSize: getSize(5, 2.5),
              marginBottom: getSize(4, 3),
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
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/sms.png"
                alt="sms-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/cs.png"
                alt="cs-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/whatsapp.png"
                alt="whatsapp-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/dropbox 187.png"
                alt="dropbox-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/fb-share.png"
                alt="fb-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/telegram 191.png"
                alt="tel-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/twitter-share.png"
                alt="twit-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
            <a href="#!">
              <img
                src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/linkedin-share.png"
                alt="linkedin-img"
                style={{
                  width: getSize(11, 5),
                  height: getSize(11, 5),
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="share-menu-barcode"
        style={{
          borderTopLeftRadius: getSize(5, 3),
          borderTopRightRadius: getSize(5, 3),
        }}
      >
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            closeBarcode();
          }}
        >
          <img
            src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon.png"
            alt="close-icon"
            className="close-icon"
            style={{
              width: getSize(5, 3),
              height: getSize(5, 3),
            }}
          />
        </a>

        <div className="share-slide-share-icons">
          <h2
            className="share-headline"
            style={{
              fontSize: getSize(5, 2.5),
              marginBottom: getSize(4, 3),
            }}
          >
            Scan And Share
          </h2>

          <div className="qr-code-container">
            <img
              src="https://raw.githubusercontent.com/rohit-virkud/lawyer/main/qr.png"
              alt="qr-img"
              style={{
                width: getSize(30, 20),
                height: getSize(30, 20),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
