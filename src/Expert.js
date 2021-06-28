import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import {
  getPrivateCard,
  getPublicCard,
  resetCard,
} from '../actions/cardActions';
import { getTemplate } from '../actions/templateActions';
import { Redirect } from 'react-router-dom';

import SaveVCF from './functional/SaveVCF';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { sub } from '../actions/subActions';

import M from 'materialize-css/dist/js/materialize.min.js';
import MetaTags from 'react-meta-tags';
import Preloader from './functional/Preloader';
import history from '../utils/History';

import { S1, S2, S3, S4, S5, S6, S7, S8 } from './Resources/ShareIcons';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import $ from 'jquery';

import {
  logo_general,
  logo_expert,
  midPicture_expert,
  partnerLogo1_expert,
  partnerLogo2_expert,
  partnerLogo3_expert,
  partnerLogo4_expert,
} from './Resources/CardStorageLinks';

import { useMediaQuery } from 'react-responsive';

const GlobalStyle = createGlobalStyle`
  #root, body {
    max-height: 100%;
    overflow-x: hidden;
    overflow: auto;
  }

  h1 {
    font-weight: 700 !important;
  }

  input, textarea, input:focus, textarea:focus {
    box-shadow: none !important;
    border: none !important;
  }

  .shareContainer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 15;
    background: #F6F8FA;
    color: #231F20;
    font-size: 4.762vw;

    margin: 0 auto;
    transform: translateX(100%);
    opacity: 0;

    transition: transform 0.7s linear, opacity 0.7s linear;
  }

  .light-mode, .dark-mode {
    width: 100%;
    height: auto;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    }

    a{
    color: inherit; 
    text-decoration: none;
    }

    body
    {
    background: #07242E;
    color: white;
    }
    
    textarea, input { outline: none; }

    /*small elements to animate*/
    .hero-wrapper
    {
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    display: flex; flex-shrink: 0;
    justify-content: center;
    position: sticky;
    top: 0;
    color:black;

    }

    .background-img
    {
    width: 60vw;
    height: 100vh;
    right: 0%;
    position: absolute;
    }

    .circle-one, .circle-two
    {
    position: absolute;
    right: 0vw;
    }

    .circle-one
    {
    top:min(3vw,1.5vh);
    right: 30vw;
    width: min(7.299vw,3.5vh);
    height: min(6.326vw,3.2vh);
    animation: rotation 5s infinite linear;
    }

    .circle-two
    {
    top: min(90vw,42vh);
    width: min(10.462vw, 5vh);
    height: min(9.246vw, 4vh);
    right:2vw;
    animation: rotationReverse 7s infinite linear;
    }

    .cross-one{
    width: min(3.65vw, 1.5vh);
    height: min(3.65vw, 1.2vh);
    top: min(80vw,40vh);
    right: 30vw;
    position: absolute;

    animation: blinkAnimation 3s infinite;
    }

    .cross-two{
    width: min(4.866vw, 2.5vh);
    height: min(4.866vw, 2.2vh);
    top: min(58vw,24vh);
    right: 7vw;
    position: absolute;
    animation: rotation 20s infinite linear;

    }
    .one-two-three
    {
    position: absolute;
    width: min(29.197vw,14vh);
    height: min(1.946vw,0.8vh);
    top: min(35vw,17vh);
    right: 8%;
    opacity: 40%;
    }


    @keyframes rotation {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(359deg);
    }
    }


    @keyframes rotationReverse {
    from {
    transform: rotate(359deg);
    }
    to {
    transform: rotate(0deg);
    }
    }

    /* animation */

    .arrow {
    position: absolute;
    text-align: center;
    right: 3vw;
    top: min(150vw,90vh);
    font-size: min(2.433vw,1.2vh);
    }
    .arrow img{
    width: min(2.5vw,1.2vh);
    }
    .bounce 
    {
    animation: bounce 2s infinite;
    }

    @keyframes bounce 
    {

    0%, 20%, 50%, 80%, 100% 
    {
    transform: translateY(0);
    }
    40% 
    {
    transform: translateY(-7.299vw);
    }
    60% 
    {
    transform: translateY(-3.65vw);
    }
    } 

    .hero-container
    { 
    width: 87vw;
    height: 100vh;
    }
	
    .logo-container
    {
    width: 100%;	 
    }
    .brand-logo
    { 
    display: flex; flex-shrink: 0; 
    overflow: hidden;
    width: min(36vw, 20vh);
    height: min(36vw, 20vh);
    margin-top: min(3.433vw,1.2vh);
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 0.8vw solid white;
    }

    /*headline*/
    .headline
    {
    margin-bottom: 0;
    width: min(48vw, 24vh); 
    margin-top: min(13.732vw, 4.5vh);
    font-size: min(7.5vw, 3.5vh);
    font-weight: 900 !important;
    letter-spacing: 0.1em;
    margin-left: 2.433vw;
    }
    .tag
    {
    width: min(72vw, 131vh);
    font-size: min(5vw, 2vh);
    font-weight: 400;
    letter-spacing: 0.1em;
    margin-top: min(1.946vw,0.9vh);
    margin-left: 2.433vw;
    }


    /* contact information*/
    .para-description
    {
    width: 100%;
    }
    .contact-container
    {
    margin-left: min(2.433vw, 4.3794vh);
    }

    .contact-section{
    display: flex; flex-shrink: 0;
    margin-top: min(13.732vw,4.5vh);
    justify-content: flex-start;
    align-items: center;
    margin-left: 2.433vw;
    }
    .icon-container
    {

    display: flex; flex-shrink: 0;
    width: min(7.299vw, 3.6vh);
    height: min(7.299vw, 3.6vh);
    justify-content: center;
    align-items: center;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;

    }
    .txt
    {
    overflow: visible;
    width: min(60.827vw,30.4vh);
    height: auto;
    margin-left: 3.163vw;
    font-size: min(5vw, 1.8vh);
    line-height:min(4.866vw,2.4vh);
    letter-spacing: 0.1em;
    font-weight: 400;
    column-count: auto;
    word-break: break-word;
    }
    .phone-img
    {
    width: min(3.65vw, 1.8vh);
    height: min(3.65vw, 1.8vh);
    }
    .home-img
    {
    width: min(4.38vw, 2.1vh);
    height: min(3.406vw, 1.5vh);
    }
    .msg-img
    {
    width: min(3.65vw, 1.5vh);
    height: min(2.92vw, 1.2vh);
    }
    .location-img
    {
    width: min(3.3vw, 1.6vh);
    height: min(3.8vw, 1.8vh);
    padding-right: 0.2vw;
    }
    .web-img
    {
    width: min(4.38vw,2.5vh);
    height: min(4.38vw, 2.5vh);

    }
    .mg-top-less
    {
    margin-top: min(4.866vw,2.4vh);
    }


    /* contact & share icons */
    .big-icons
    {
    display: flex; flex-shrink: 0;
    width: 100%;
    margin-top: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 8vw;
    position: sticky;
    }
    .big-icon-text-container
    {

    display: flex; flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    }
    .big-icon-holder
    {

    display: flex; flex-shrink: 0;
    width: min(12vw,6vh);
    height: min(12vw,6vh);

    justify-content: center;
    align-items: center;


    }
    .contact-image
    {


    padding-left: 0.973vw;
    width: min(6vw,3vh);
    height: min(5vw,2.5vh);

    }
    .share-icon
    {
    padding-left: 0.5vw;
    width: min(6vw,3vh);
    height: min(5vw,2.5vh);

    }
    .text-block
    {

    margin-top: min(2.433vw,1.2vh);
    font-size: min(2.676vw,1.4vh);
    text-align: center;

    }
    /*info container*/
    .info-container
    {
    width: 100%;  
    position: sticky;
    top:0;
    }

    .cover-image 
    {
    width: 100%;
    height: 60vw;
    background-size: cover !important;
    background-position: center !important;

    }

    .txt-wrapper
    {
    width: 100%;

    display: flex; flex-shrink: 0;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    }
    .txt-container
    {
    width: 87%;
    }
    .text-headline
    {
    width: min(80.993vw,50vh);
    margin-top: min(7.299vw,3.5vh);
    margin-bottom: 0;
    font-size: min(5.353vw,2.5vh);
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-left: min(2.433vw,1.5vh);
    word-break: break-word;

    }
    .text-para
    {
    width: min(80.993vw,50vh);
    margin-top: min(5vw, 2vh);
    font-size: min(5vw, 1.8vh);
    font-weight: 400;
    line-height: min(5.596vw,2.2vh);
    letter-spacing: 0.1em;
    margin-left: 2.433vw;
    white-space: pre-wrap;
    }
    .follow-text
    {
    font-size: min(5.333vw,2.5vh);
    margin-top: min(12.8vw,6.4vh);
    margin-left: 2.933vw;
    letter-spacing: 0.1em;
    }


    .icon-group
    {
    margin-top: min(4.866vw,2.433vh);
    margin-left: 2.676vw;
    display: flex; flex-shrink: 0;
    }
    .img-icon
    {
    width: min(9vw,9vh);
    height: min(9vw,9vh);
    }
    .mg-left-21
    {
    margin-left: 3vw;
    }
    .review-text
    {
    margin-top: min(4.866vw,2.433vh);
    }

    .form-wrapper
    {

    width: 100%;
    margin-top: min(12.165vw,6.1vh);
    padding-top: min(4.866vw,2.4vh);
    padding-bottom: min(8.516vw,4.2vh);
    display: flex; flex-shrink: 0;
    justify-content: center;
    align-items: center;
    }
    .input-container
    {
    display: flex; flex-shrink: 0;
    margin-top: min(4.866vw,2.433vh);
    margin-left:2.433vw;

    }
    .form-container
    {
    width: 87%;
    display: flex; flex-shrink: 0;
    flex-direction: column;
    }

    .input-text
    {
    padding: 2.433vw;
    margin-top: min(2.433vw,1.2vh);
    margin-left: 2.433vw;
    border: none;
    letter-spacing: 0.1em;
    width: min(80vw,35vh);
    font-size: min(3vw,1.5vh);

    }
    .input-img-container img
    {
    width: 6vw;
    height: 6vw;
    margin-top: min(3.65vw,1.5vh);
    margin-left: 0.73vw;
    }
    .input-img-container  .form-msg-img
    {
    width: 6.083vw;
    height: 4.866vw;
    }

    .input-submit
    {
    padding: 2.433vw 4.866vw;
    margin-top: min(6.083vw,3.04vh);
    margin-left:2.433vw;
    border: none;
    border-radius: 9.732vw;
    font-weight: 600;
    letter-spacing: 0.1em;
    font-size: min(3.65vw,1.6vh);
    }

    .extra-icons
    {
      margin-top: min(7.299vw,3.6vh);
    margin-bottom: min(7.299vw,3.6vh);
    width: 100%;

    display: flex; flex-shrink: 0;
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
    display: flex; flex-shrink: 0;
    justify-content: center;
    align-items: center;
    }
    .round-icons-container
    {
    display: flex; flex-shrink: 0;
    flex-wrap: wrap;
    width: 78vw;

    }
    .round
    {
    max-width: 87vw;
    flex: 1 0 35vw;
    margin: 5px;

    height: 30vw;
    overflow: hidden;
    display: flex; flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    }
    .round img
    {
    object-fit: contain;
    max-width: 100%;
    max-height: 30vw;
    }

    /* footer */
    .footer
    {
    width: 100%;
    display: flex; flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding-top: 2vw;
    padding-bottom: 2vw;
    }
    
    .footer-img-container
    {
    width: min(15vw,7.5vh);
    height: min(15vw,7.5vh);
    display: flex; flex-shrink: 0;
    justify-content: center;
    align-items: center;
    }

    .footer .footer-img-container img{
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    }

    .logo-img
    {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: contain;
    }

  .light-mode {

    .circle-two, .cross-one {
      opacity: 1;
    }

    @keyframes blinkAnimation 
    {
      0% {
        opacity: 0;
     }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    body
    {
    background: #07242E;
    color: white;
    }
    textarea, input { outline: none; }

    /*small elements to animate*/
    .hero-wrapper
    {
    background: linear-gradient(0deg, #FEFEFE 0%, #D4EEF9 100%);
    color:black;

    }

    .brand-logo
    { 
    color: hsla(183.8709677419355, 0.00%, 100.00%, 1.00);
    filter: drop-shadow(0vw 2.433vw 8.516vw rgba(23, 181, 240, 0.431));
    }

    /*headline*/
    .headline
    {
    color:#0B838B;
    }

    .tag
    {
    color: #000000;
    }

    .icon-container
    {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: hsla(183.8709677419355, 87.15%, 48.82%, 1.00);
    filter: drop-shadow(0vw 1.217vw 4.866vw rgba(13, 157, 227, 0.38));
    }
    .txt
    {
    color: #000000;
    }

    .big-icon-holder
    {
    border-top-style: solid;
    border-top-width: min(0.73vw,0.36vh);
    border-top-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-right-style: solid;
    border-right-width:  min(0.73vw,0.36vh);
    border-right-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-bottom-style: solid;
    border-bottom-width:  min(0.73vw,0.36vh);
    border-bottom-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-left-style: solid;
    border-left-width:  min(0.73vw,0.36vh);
    border-left-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: hsla(183.8709677419355, 87.15%, 48.82%, 1.00);
    filter: drop-shadow(0vw 1.217vw 4.866vw rgba(13, 157, 227, 0.361));
    }
    .text-block
    {
    color: #000000;
    }
    /*info container*/
    .info-container
    {
    width: 100%;  
    background: linear-gradient(180deg, #CDF0FF 0%, #CDF0FF 56.04%, #FFFFFF 100%);
    position: sticky;
    top:0;
    }
    .cover-image 
    {
    background-size: cover !important;
    background-position: center !important;
    }

    .text-headline
    {
    color: #0B838B;
    }
    .text-para
    {
    color: #000000;
    }

    .follow-text
    {
    color:#0B838B;
    }

    .form-wrapper
    {
    background-color: white;
    }
    .input-container
    {
    border-bottom: 0.243vw solid #060606;
    }

    .input-text
    {
    color: #083855;
    }

    .input-submit
    {
    color:white;
    background: linear-gradient(187.32deg, #89DFF9 -17.12%, #05C2FC 94.31%);
    filter: drop-shadow(0vw 1.217vw 3.65vw rgba(18, 141, 185, 0.349)); 
    }

    .footer
    {
    background-color: white;
    }
    
  }

  .dark-mode {
    background: #07242E;
    color: white;

    @keyframes blinkAnimation 
    {
      0% {
        opacity: 0;
     }
      50% {
        opacity: 0.2;
      }
      100% {
        opacity: 0;
      }
    }

    body
    {
    background: #07242E;
    color: white;
    }
    textarea, input { outline: none; }

    .circle-two, .cross-one {
      opacity: 0.2;
    }

    .brand-logo
    { 
      //background-color: hsla(183.8709677419355, 87.15%, 48.82%, 1.00);
      color: hsla(183.8709677419355, 0.00%, 100.00%, 1.00);
      filter: drop-shadow(0vw 2.433vw 8.516vw rgba(23, 181, 240, 0.431));
      border-radius: 100%;
      border: 0.8vw solid white;
    }

    /*headline*/
    .headline
    {
    color:#fff;
    }
    .tag
    {
    color: #fff;
    }

    .icon-container
    {
    background-color: hsla(183.8709677419355, 87.15%, 48.82%, 1.00);
    filter: drop-shadow(0vw 1.217vw 4.866vw rgba(13, 157, 227, 0.38));
    }
    .txt
    {
    color: hsla(0, 0.00%, 100.00%, 1.00);
    color: #DBFCFE;
    }
    .big-icon-holder
    {
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-top-width: min(0.73vw,0.36vh);
    border-top-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-right-style: solid;
    border-right-width:  min(0.73vw,0.36vh);
    border-right-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-bottom-style: solid;
    border-bottom-width:  min(0.73vw,0.36vh);
    border-bottom-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-left-style: solid;
    border-left-width:  min(0.73vw,0.36vh);
    border-left-color: hsla(0, 0.00%, 100.00%, 1.00);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    background-color: hsla(183.8709677419355, 87.15%, 48.82%, 1.00);
    filter: drop-shadow(0vw 1.217vw 4.866vw rgba(13, 157, 227, 0.361));
    }

    .text-block
    {
    color: hsla(0, 0.00%, 100.00%, 1.00);
    }
    /*info container*/
    .info-container
    {
    background-color:  #07242E;
    }
   
    
    .text-headline
    {
    color: hsla(0, 0.00%, 100.00%, 1.00);

    }
    .text-para
    {
    color: hsla(0, 0.00%, 100.00%, 1.00);
    }
  
    .form-wrapper
    {
    background-color: white;
    }
    .input-container
    {
    border-bottom: 0.243vw solid #060606;
    }

    .input-text
    {
    color: #083855;
    }

    .input-submit
    {
    color:white;
    background: linear-gradient(187.32deg, #89DFF9 -17.12%, #05C2FC 94.31%);
    filter: drop-shadow(0vw 1.217vw 3.65vw rgba(18, 141, 185, 0.349)); 
    }


    /* extra icons */
    .extra-icons
    {
    background-color: #07242E;
    }

    /* footer */
    .footer
    {
    background-color: white;
    }
  }

  .openShare {
    transform: translateX(0%) !important;
    opacity: 1 !important;
  }
`;

const QrContainer = styled.div`
  width: 33.816vw;
  height: 33.816vw;
  border: 2.415vw solid white;
`;

const ShareContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4.831vw 4.831vw;
  grid-template-areas:
    'a1 a2 a3 a4'
    'a5 a6 a7 a8';
  width: min-content;
  margin: 0 auto;
`;

const ShareIcon = styled.img`
  width: 12.077vw;
  height: auto;
`;

const ExitWrapper = styled.a`
  position: absolute;
  right: 12.077vw;
  top: 12.077vw;
`;

const Share = React.memo(({ darkMode, shareMessage, shareLink }) => {
  return (
    <div
      className='fl-column fl-full-center shareContainer'
      style={{ background: darkMode ? '#07242E' : '#F6F8FA' }}
    >
      <ExitWrapper
        href='#!'
        onClick={(e) => {
          e.preventDefault();
          $('.shareContainer').removeClass('openShare');
        }}
        style={{ color: darkMode ? 'white' : 'black' }}
      >
        <i className='material-icons'>close</i>
      </ExitWrapper>

      <div className='fl-column fl-full-center'>
        <span
          style={{
            marginBottom: '6.039vw',
            color: darkMode ? 'white' : 'black',
          }}
        >
          SHARE MY CARD
        </span>

        <ShareContainer style={{ marginBottom: '10.870vw' }}>
          <a
            href={`sms:?&body=/* ${shareMessage + '\n'} ${shareLink} */`}
            style={{ gridArea: 'a1' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S1} alt='' />
          </a>

          <EmailShareButton
            url={shareLink}
            subject='Η Κάρτα Μου'
            body={shareMessage + '\n'}
            style={{ gridArea: 'a2' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S4} alt='' />
          </EmailShareButton>

          <ViberShareButton
            url={shareLink}
            title={shareMessage + '\n'}
            style={{ gridArea: 'a3' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S2} alt='' />
          </ViberShareButton>

          <WhatsappShareButton
            url={shareLink}
            title={shareMessage + '\n'}
            style={{ gridArea: 'a4' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S3} alt='' />
          </WhatsappShareButton>

          <FacebookShareButton
            url={shareLink}
            quote={shareMessage + '\n'}
            style={{ gridArea: 'a5' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S5} alt='' />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareLink}
            title={shareMessage + '\n'}
            style={{ gridArea: 'a6' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S7} alt='' />
          </TwitterShareButton>

          <LinkedinShareButton
            url={shareLink}
            summary={shareMessage + '\n'}
            title={shareMessage + '\n'}
            style={{ gridArea: 'a7' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S8} alt='' />
          </LinkedinShareButton>

          <TelegramShareButton
            url={shareLink}
            title={shareMessage + '\n'}
            style={{ gridArea: 'a8' }}
            className='fl-row fl-full-center'
          >
            <ShareIcon src={S6} alt='' />
          </TelegramShareButton>
        </ShareContainer>
      </div>

      <div className='fl-column fl-full-width fl-align-center'>
        <span style={{ marginBottom: '4.831vw' }}>SCAN AND SAVE</span>

        <QrContainer>
          <QRCode value={shareLink} style={{ width: '100%', height: '100%' }} />
        </QrContainer>
      </div>
    </div>
  );
});

const Expert = ({
  match,
  getPrivateCard,
  getPublicCard,
  card,
  user,
  loadUser,
  loading,
  sub,
}) => {
  const localCardId = 'expert';
  const shareLink = window.location.href;

  const [shareMessage, setShareMessage] = useState(
    'Μπορείτε να δείτε την ψηφιακή επαγγελματική κάρτα μου από τον παρακάτω σύνδεσμο.'
  );

  const [firstName, setFirstName] = useState('Elena');
  const [lastName, setLastName] = useState('Papadopoulou');
  const [email, setEmail] = useState('info@artcoolcards.gr');
  const [address, setAddress] = useState(
    'Lisikratous 88, Kallithea, 17674 Athens, Greece'
  );
  const [mobile, setMobile] = useState('+30 6936503000');
  const [landline, setLandline] = useState('+30 6936503000');
  const [website, setWebsite] = useState('www.artcoolcards.gr');
  const [profession, setProfession] = useState('General Clinic');

  const [about, setAbout] = useState(
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis doloreeum iriure dolor in hendrerit in.'
  );

  const [midPicture, setMidPicture] = useState(midPicture_expert);

  const [partnerLogo1, setPartnerLogo1] = useState(partnerLogo1_expert);
  const [partnerLogo2, setPartnerLogo2] = useState(partnerLogo2_expert);
  const [partnerLogo3, setPartnerLogo3] = useState(partnerLogo3_expert);
  const [partnerLogo4, setPartnerLogo4] = useState(partnerLogo4_expert);

  const [partnerLink1, setPartnerLink1] = useState('https://artcoolcards.gr/');
  const [partnerLink2, setPartnerLink2] = useState('https://artcoolcards.gr/');
  const [partnerLink3, setPartnerLink3] = useState('https://artcoolcards.gr/');
  const [partnerLink4, setPartnerLink4] = useState('https://artcoolcards.gr/');

  const [facebook, setFacebook] = useState('https://artcoolcards.gr/');
  const [instagram, setInstagram] = useState('https://artcoolcards.gr/');
  const [linkedin, setLinkedin] = useState('https://artcoolcards.gr/');
  const [youtube, setYoutube] = useState('https://artcoolcards.gr/');
  const [twitter, setTwitter] = useState('https://artcoolcards.gr/');
  const [tiktok, setTiktok] = useState('https://artcoolcards.gr/');
  const [tripadvisor, setTripadvisor] = useState('https://artcoolcards.gr/');
  const [booking, setBooking] = useState('https://artcoolcards.gr/');
  const [telegram, setTelegram] = useState('https://artcoolcards.gr/');

  const [logo1, setLogo1] = useState(logo_expert);
  const [logo2, setLogo2] = useState(logo_general);

  const [enableEmail, setEnableEmail] = useState(true);
  const [enableWebsite, setEnableWebsite] = useState(true);
  const [enableAddress, setEnableAddress] = useState(true);
  const [enableMobile, setEnableMobile] = useState(true);
  const [enableLandline, setEnableLandline] = useState(true);
  const [enableProfession, setEnableProfession] = useState(true);

  const [enableReviews, setEnableReviews] = useState(true);

  const [enableFacebook, setEnableFacebook] = useState(true);
  const [enableYoutube, setEnableYoutube] = useState(true);
  const [enableTwitter, setEnableTwitter] = useState(true);
  const [enableTiktok, setEnableTiktok] = useState(true);
  const [enableInstagram, setEnableInstagram] = useState(true);
  const [enableLinkedin, setEnableLinkedin] = useState(true);
  const [enableBooking, setEnableBooking] = useState(true);
  const [enableTripadvisor, setEnableTripadvisor] = useState(true);
  const [enableTelegram, setEnableTelegram] = useState(true);

  const [enablePartners, setEnablePartners] = useState(true);
  const [enablePartner1, setEnablePartner1] = useState(true);
  const [enablePartner2, setEnablePartner2] = useState(true);
  const [enablePartner3, setEnablePartner3] = useState(true);
  const [enablePartner4, setEnablePartner4] = useState(true);

  const [aboutTitle, setAboutTitle] = useState('ΥΠΗΡΕΣΙΕΣ');
  const [reviewTitle, setReviewTitle] = useState('OUR REVIEWS');
  const [followTitle, setFollowTitle] = useState('FOLLOW US');
  const [partnerTitle, setPartnerTitle] = useState('ΟΙ ΣΥΝΕΡΓΑΤΕΣ ΜΑΣ');
  const [subTitle, setSubTitle] = useState('SUBSCRIBE');

  const [darkMode, setDarkMode] = useState(false);

  //Local stuff
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');

  const [redirect, setRedirect] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });

  useEffect(() => {
    if (window.innerWidth >= 500) {
      setRedirect(true);
    }
  }, [isMobile]);

  function addhttp(s) {
    if (s && s.length > 0) {
      if ((s !== undefined) & !s.match(/^[a-zA-Z]+:\/\//)) {
        return 'http://' + s;
      }
    }

    return s;
  }

  useEffect(() => {
    if (
      card &&
      card._id === match.params.exactId &&
      card.cardId === localCardId
    ) {
      setFirstName(card.firstName);
      setLastName(card.lastName);
      setAddress(card.address);
      setLandline(card.landline);
      setMobile(card.mobile);
      setAbout(card.about);
      setEmail(card.email);
      setProfession(card.profession);

      setLogo1(card.logo1);
      setLogo2(card.logo2);

      setMidPicture(card.midPicture);

      setEnableAddress(card.enableAddress);
      setEnableEmail(card.enableEmail);
      setEnableLandline(card.enableLandline);
      setEnableMobile(card.enableMobile);
      setEnableWebsite(card.enableWebsite);
      setEnableProfession(card.enableProfession);

      setEnableReviews(card.enableReviews);
      setEnablePartners(card.enablePartners);

      setEnablePartner1(card.enablePartner1);
      setEnablePartner2(card.enablePartner2);
      setEnablePartner3(card.enablePartner3);
      setEnablePartner4(card.enablePartner4);

      setEnableTiktok(card.enableTiktok);
      setEnableTwitter(card.enableTwitter);
      setEnableFacebook(card.enableFacebook);
      setEnableInstagram(card.enableInstagram);
      setEnableLinkedin(card.enableLinkedin);
      setEnableYoutube(card.enableYoutube);
      setEnableBooking(card.enableBooking);
      setEnableTripadvisor(card.enableTripadvisor);
      setEnableTelegram(card.enableTelegram);

      setFollowTitle(card.followTitle);
      setPartnerTitle(card.partnerTitle);
      setAboutTitle(card.aboutTitle);
      setReviewTitle(card.reviewTitle);
      setSubTitle(card.subTitle);

      setPartnerLogo1(card.partnerLogo1);
      setPartnerLogo2(card.partnerLogo2);
      setPartnerLogo3(card.partnerLogo3);
      setPartnerLogo4(card.partnerLogo4);

      setPartnerLink1(addhttp(card.partnerLink1));
      setPartnerLink2(addhttp(card.partnerLink2));
      setPartnerLink3(addhttp(card.partnerLink3));
      setPartnerLink4(addhttp(card.partnerLink4));

      setShareMessage(card.shareMessage);

      setFacebook(addhttp(card.facebook));
      setTiktok(addhttp(card.tiktok));
      setTwitter(addhttp(card.twitter));
      setYoutube(addhttp(card.youtube));
      setWebsite(card.website);
      setTripadvisor(addhttp(card.tripadvisor));
      setBooking(addhttp(card.booking));
      setInstagram(addhttp(card.instagram));
      setLinkedin(addhttp(card.linkedin));
      setTelegram(addhttp(card.telegram));

      setDarkMode(card.darkMode);
    }
    // eslint-disable-next-line
  }, [card]);

  useEffect(() => {
    loadUser();
    history.push(window.location.pathname);
    //eslint-disable-next-line
  }, []);

  const [loadedPrivate, setLoadedPrivate] = useState(false);
  const [loadedPublic, setLoadedPublic] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    async function f() {
      if (match.params.exactId && card && match.params.exactId === card._id) {
        setHasLoaded(true);
      } else if (!match.params.exactId) {
        let cardId = localCardId;
        await getPrivateCard(undefined, cardId, undefined, 'false');
        setHasLoaded(true);
      }
    }
    f();
  }, [card]);

  const onFocus = () => {
    if (match.params.exactId && card && card._id !== match.params.exactId) {
      window.location.reload();
    }
  };

  useEffect(() => {
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  });

  useEffect(() => {
    async function f() {
      if (!loadedPrivate && !loadedPublic) {
        if (user && match.params.exactId) {
          let exactId = match.params.exactId;
          let cardId = localCardId;
          let userId = user._id;
          let screenshot =
            match.params.save && match.params.save === 'screenshot'
              ? 'true'
              : 'false';

          await getPrivateCard(exactId, cardId, userId, screenshot);
          setLoadedPrivate(true);
        } else if (!loading) {
          let exactId = match.params.exactId;
          let cardId = localCardId;
          let screenshot =
            match.params.save && match.params.save === 'screenshot'
              ? 'true'
              : 'false';

          getPublicCard(exactId, cardId, screenshot);
          setLoadedPublic(true);
        }
      } else if (
        loadedPrivate &&
        (card === null || card._id !== match.params.exactId) &&
        !loadedPublic
      ) {
        let exactId = match.params.exactId;
        let cardId = localCardId;
        let screenshot =
          match.params.save && match.params.save === 'screenshot'
            ? 'true'
            : 'false';

        getPublicCard(exactId, cardId, screenshot);
        setLoadedPublic(true);
      }
    }

    f();
    //eslint-disable-next-line
  }, [user, match, loading, card]);

  useEffect(() => {
    if (match.params.save && match.params.save === 'save') {
      SaveVCF(
        firstName,
        lastName,
        enableProfession ? profession : '',
        mobile,
        landline,
        website,
        email,
        shareLink,
        address,
        '',
        '',
        ''
      );
    }
    //eslint-disable-next-line
  }, []);

  const saveContact = () => {
    SaveVCF(
      firstName,
      lastName,
      enableProfession ? profession : '',
      mobile,
      landline,
      website,
      email,
      shareLink,
      address,
      '',
      '',
      ''
    );
  };

  const onSubscribe = async () => {
    const cardOwnerId = card.userId;
    const name = subName;
    const email = subEmail;

    sub({ name, email, cardOwnerId });
    M.toast({ html: 'Η εγγραφή ολοκληρωθηκε!', classes: 'rounded' });

    setSubName('');
    setSubEmail('');
  };

  const Body = (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='hero-wrapper' style={{ maxWidth: '100%' }}>
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/lines for background@2x.png'
          className='background-img'
          alt=''
        />
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/circles2@2x.png'
          className='circle-one'
          alt=''
        />
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/circles@2x.png'
          className='circle-two'
          alt=''
        />
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/cross@2x.png'
          className='cross-one'
          alt=''
        />
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/cross2@2x.png'
          className='cross-two'
          alt=''
        />
        <img
          src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/1234567890@2x.png'
          className='one-two-three'
          alt=''
        />

        <div className='arrow bounce'>
          <p
            style={{
              transform: 'rotate(-90deg)',
              color: darkMode ? 'white' : 'black',
            }}
          >
            scroll down
          </p>
          <img
            src={`https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/arrow.png`}
            alt=''
            style={{
              marginTop: '7.299vw',
              marginLeft: '1.217vw',
              filter: darkMode ? 'invert(100%)' : 'invert(0%)',
            }}
          />
        </div>

        <div className='hero-container fl-column'>
          <div className='logo-container'>
            <div className='brand-logo'>
              <img src={logo1} alt='' className='logo-img' alt='' />
            </div>
          </div>

          <div className='name-container'>
            <h1 className='headline'>
              {firstName} {lastName}
            </h1>

            {enableProfession && (
              <p className='tag' style={{ wordBreak: 'break-word' }}>
                {profession}
              </p>
            )}
          </div>

          <div className='para-description' style={{ marginBottom: '5vw' }}>
            {enableMobile && (
              <a href={`tel:${mobile}`} className='contact-section'>
                <div className='icon-container'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/phone.png'
                    className='phone-img'
                    alt=''
                  />
                </div>
                <p className='txt'>{mobile}</p>
              </a>
            )}

            {enableLandline && (
              <a
                href={`tel:${landline}`}
                className='contact-section mg-top-less'
              >
                <div className='icon-container'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/home.png'
                    className='home-img'
                    alt=''
                  />
                </div>
                <p className='txt'>{landline}</p>
              </a>
            )}

            {enableEmail && (
              <a
                href={`mailto:${email}`}
                className='contact-section mg-top-less'
              >
                <div className='icon-container'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/msg.png'
                    className='msg-img'
                    alt=''
                  />
                </div>
                <p className='txt'>{email}</p>
              </a>
            )}

            {enableAddress && (
              <a
                href={`https://maps.google.com/?q=${address}`}
                className='contact-section mg-top-less'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='icon-container'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/location.png'
                    className='location-img'
                    alt=''
                  />
                </div>
                <p className='txt'>{address}</p>
              </a>
            )}

            {enableWebsite && (
              <a
                href={addhttp(website)}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-section mg-top-less'
              >
                <div className='icon-container'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/world.png'
                    className='web-img'
                    alt=''
                  />
                </div>
                <p className='txt'>{website}</p>
              </a>
            )}
          </div>

          <div className='big-icons'>
            <a
              href='#!'
              onClick={(e) => {
                e.preventDefault();
                saveContact();
              }}
              className='big-icon-text-container'
            >
              <div className='big-icon-holder'>
                <img
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/contact.png'
                  className='contact-image'
                  alt=''
                />
              </div>
              <p className='text-block'>Save My Contact</p>
            </a>

            <a
              href='#!'
              onClick={(e) => {
                e.preventDefault();
                if (!$('.shareContainer').hasClass('openShare')) {
                  $('.shareContainer').addClass('openShare');
                }
              }}
              className='big-icon-text-container'
              style={{ marginLeft: '30px' }}
            >
              <div className='big-icon-holder'>
                <img
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/share.png'
                  className='share-icon'
                  alt=''
                />
              </div>
              <p className='text-block'>Share My Contact</p>
            </a>
          </div>
        </div>
      </div>
      <div className='info-container'>
        <div
          className='cover-image'
          style={{ background: `url(${midPicture})` }}
        ></div>

        <div className='txt-wrapper'>
          <div className='txt-container'>
            <h1 className='text-headline'>{aboutTitle}</h1>
            <p className='text-para'>{about}</p>

            <h1 className='follow-text'>{followTitle}</h1>
            <div className='icon-group'>
              {enableFacebook && (
                <a href={facebook} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/color@2x.png'
                    className='img-icon'
                    alt=''
                  />
                </a>
              )}

              {enableInstagram && (
                <a href={instagram} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/color.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}

              {enableYoutube && (
                <a href={youtube} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/colytor.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}

              {enableTwitter && (
                <a href={twitter} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/twitter.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}

              {enableLinkedin && (
                <a href={linkedin} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/linkedin.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}

              {enableTelegram && (
                <a href={telegram} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/telegram.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}

              {enableTiktok && (
                <a href={tiktok} target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/tiktok.png'
                    className='img-icon mg-left-21'
                    alt=''
                  />
                </a>
              )}
            </div>

            {enableReviews && (
              <Fragment>
                <h1 className='follow-text review-text'>{reviewTitle}</h1>
                <div className='icon-group mg-down-25'>
                  {enableTripadvisor && (
                    <a href={tripadvisor}>
                      <img
                        src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/Tripadvisor.png'
                        className='img-icon'
                        alt=''
                      />
                    </a>
                  )}

                  {enableBooking && (
                    <a href={booking}>
                      <img
                        src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/bookingcom.png'
                        className='img-icon mg-left-21'
                        alt=''
                      />
                    </a>
                  )}
                </div>
              </Fragment>
            )}
          </div>
        </div>

        <form
          className='form-wrapper'
          onSubmit={(e) => {
            e.preventDefault();
            onSubscribe();
          }}
        >
          <div className='form-container'>
            <h1
              className='follow-text review-text'
              style={{ color: '#0B838B' }}
            >
              {subTitle}
            </h1>

            <div className='input-container'>
              <div className='input-img-container'>
                <img
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/Group 319@2x.png'
                  alt=''
                />
              </div>
              <input
                style={{ margin: '0', marginLeft: '5vw' }}
                type='text'
                name='name'
                onChange={setSubName}
                className='input-text browser-default'
                placeholder='User Name'
              />
            </div>

            <div className='input-container'>
              <div className='input-img-container'>
                <img
                  src='https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/medicocard/Group 320@2x.png'
                  className='form-msg-img'
                  alt=''
                />
              </div>
              <input
                style={{ margin: '0', marginLeft: '5vw' }}
                type='email'
                name='email'
                onChange={setSubEmail}
                className='input-text browser-default'
                placeholder='E-mail'
              />
            </div>

            <div>
              <input
                type='submit'
                name=''
                className='input-submit browser-default'
                value='SUBMIT'
              />
            </div>
          </div>
        </form>

        {enablePartners && (
          <div className='extra-icons'>
            <div className='extra-container'>
              <h1
                className='follow-text review-text'
                style={{ marginBottom: '0' }}
              >
                {partnerTitle}
              </h1>

              <div className='round-icons-wrapper'>
                <div className='round-icons-container'>
                  {enablePartner1 && (
                    <a
                      className='round'
                      href={partnerLink1}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={partnerLogo1} className='extra-icon' alt='' />
                    </a>
                  )}

                  {enablePartner2 && (
                    <a
                      className='round'
                      href={partnerLink2}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={partnerLogo2} className='extra-icon' alt='' />
                    </a>
                  )}

                  {enablePartner3 && (
                    <a
                      className='round'
                      href={partnerLink3}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={partnerLogo3} className='extra-icon' alt='' />
                    </a>
                  )}

                  {enablePartner4 && (
                    <a
                      className='round'
                      href={partnerLink4}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={partnerLogo4} className='extra-icon' alt='' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='footer'>
          <div
            style={{ width: '100%', height: '16vw' }}
            className='fl-row fl-full-center'
          >
            <img
              style={{
                objectFit: 'contain',
                maxHeight: '90%',
                maxWidth: '90%',
              }}
              src={logo2}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );

  //Redirects you based on screen size
  if (redirect) {
    return <Redirect to={'/view' + window.location.pathname} />;
  }

  return (
    <Fragment>
      <Preloader
        darkMode={darkMode}
        pos='fixed'
        show={match.params.save && match.params.save === 'screenshot'}
        waitForCondition={true}
        condition={hasLoaded}
      />
      <MetaTags>
        <title>{firstName + ' ' + lastName}</title>
        <meta property='og:title' content={firstName + ' ' + lastName} />
        <meta property='og:image' content={logo1} />
      </MetaTags>
      <GlobalStyle />
      <Share
        shareLink={shareLink}
        shareMessage={shareMessage}
        darkMode={darkMode}
      />
      {hasLoaded && Body}
    </Fragment>
  );
};

Expert.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  getPrivateCard: PropTypes.func.isRequired,
  getPublicCard: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  card: PropTypes.object,
  loadUser: PropTypes.func.isRequired,
  template: PropTypes.object,
  getTemplate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  card: state.card.card,
  template: state.temp.template,
});

export default connect(mapStateToProps, {
  loadUser,
  getPrivateCard,
  getPublicCard,
  getTemplate,
  resetCard,
  sub,
})(Expert);
