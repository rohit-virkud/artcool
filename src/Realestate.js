import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import $ from "jquery";
import { useWindowSize } from "../components/pages/functional/WindowSize";
import { useMediaQuery } from "react-responsive";
import { Redirect } from "react-router-dom";
import QRCode from "qrcode.react";
import { S1, S2, S3, S4, S5, S6, S7, S8 } from "./Resources/ShareIcons";
import SaveVCF from "./functional/SaveVCF";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import history from "../utils/History";
import { loadUser } from "../actions/authActions";
import { sub } from "../actions/subActions";
import M from "materialize-css/dist/js/materialize.min.js";
import MetaTags from "react-meta-tags";
import Preloader from "./functional/Preloader";

import {
  getPrivateCard,
  getPublicCard,
  resetCard,
} from "../actions/cardActions";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

import { getTemplate } from "../actions/templateActions";

const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
position: static;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
}

textarea, input { outline: none !important; }

body{
background-color: #F6F6F6;
}

p {
  word-break: break-all;
}

#re-wrapper {
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
overflow: hidden !important;
width: 100% !important;
height: 100% !important;
}

.slide-inner {
position: absolute;
width: 100%;
min-height: 100%;
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
background-size: contain !important;
}

.heading-name,.heading-sirname
{
font-family: Roboto;
font-style: normal;
font-weight: 900 !important;

width: 100%;
}

.tag
{
font-family: Roboto;
font-style: normal;
font-weight: 900 !important;
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
font-weight: normal !important;
width: 70%;
color: #34413B;
}

.primary-btn
{
font-family: Roboto;
font-style: normal;
font-weight: bold !important;
color: #FFFFFF;;
background-color: #34413B;
/*box-shadow: 0px 2px 4px 50px rgba(255, 223, 161, 0.1);*/
display: inline-block;
}

.share-btn
{
position: fixed;
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
background-size: cover !important;
background-position: center !important;
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
font-weight: bold !important;
color: #000000;
}

.heading02-p{
width: 100%;
color:#000000;
font-family: Roboto;
font-style: normal;
font-weight: normal !important;
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
background-size: cover !important;
background-position: center !important;
width: 100%;
}

.image02
{
background-size: cover !important;
background-position: center !important;
width: 100%;
}

.image03
{
background-size: cover !important;
background-position: center !important;
width: 100%;
}

.image04
{
background-size: cover !important;
background-position: center !important;
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
font-weight: bold !important;
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
background: linear-gradient(11.48deg, #305563 6.32%, #213841 112.84%);
width: 100%;
height: 100%;
display: flex;flex-shrink: 0;
flex-direction: column;
justify-content: center;
}

.input
{
font-family: Roboto !important;
font-style: normal !important;
font-weight: bold !important;
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
font-weight: 700 !important;
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
font-weight: 500;
transform: translateX(-80%);
transition:  transform 1s ease-out;
}

.scan-and-save-txt
{
margin-top: 30%;
font-weight: 500;
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
  z-index: 5;
  pointer-events: none;
  }


  .overlay {
    opacity: 1;
    background:rgba(0, 0, 0, 0.50);

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
    "a1 a2 a3 a4"
    "a5 a6 a7 a8";
  width: min-content;
  margin: 0 auto;
  transform: translateX(-40%);
  transition: transform 1s ease-out;
`;

const ShareIcon = styled.img`
  width: 10vw;
  height: auto;
`;

const AudioPlayer = ({ audio }) => {
  return (
    <audio id="audio">
      <source src={audio} type="audio/mpeg" />
    </audio>
  );
};

const Realestate = ({
  match,
  getPrivateCard,
  getPublicCard,
  card,
  user,
  loadUser,
  loading,
  sub,
}) => {
  const size = useWindowSize();

  const localCardId = "corporate";
  const shareLink = window.location.href;

  const [shareMessage, setShareMessage] = useState(
    "Μπορείτε να δείτε την ψηφιακή επαγγελματική κάρτα μου από τον παρακάτω σύνδεσμο."
  );

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

  const [enableProfession, setEnableProfession] = useState(true);

  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis doloreeum iriure dolor in hendrerit in."
  );

  const [galleryImage1, setGalleryImage1] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Image1.png"
  );
  const [galleryImage2, setGalleryImage2] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Image2.png"
  );
  const [galleryImage3, setGalleryImage3] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Image3.png"
  );
  const [galleryImage4, setGalleryImage4] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Image4.png"
  );

  const [logo, setLogo] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/logo.png"
  );

  const [midPicture, setMidPicture] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Image-02.png"
  );

  const [audio, setAudio] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/intro.mpeg"
  );

  const [partnerLink1, setPartnerLink1] = useState("https://artcoolcards.gr/");
  const [partnerLink2, setPartnerLink2] = useState("https://artcoolcards.gr/");
  const [partnerLink3, setPartnerLink3] = useState("https://artcoolcards.gr/");
  const [partnerLink4, setPartnerLink4] = useState("https://artcoolcards.gr/");

  const [partnerLogo1, setPartnerLogo1] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/logo.png"
  );
  const [partnerLogo2, setPartnerLogo2] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/logo.png"
  );
  const [partnerLogo3, setPartnerLogo3] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/logo.png"
  );
  const [partnerLogo4, setPartnerLogo4] = useState(
    "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/logo.png"
  );

  const [facebook, setFacebook] = useState("https://artcoolcards.gr/");
  const [instagram, setInstagram] = useState("https://artcoolcards.gr/");
  const [linkedin, setLinkedin] = useState("https://artcoolcards.gr/");
  const [youtube, setYoutube] = useState("https://artcoolcards.gr/");
  const [twitter, setTwitter] = useState("https://artcoolcards.gr/");
  const [tiktok, setTiktok] = useState("https://artcoolcards.gr/");
  const [tripadvisor, setTripadvisor] = useState("https://artcoolcards.gr/");
  const [booking, setBooking] = useState("https://artcoolcards.gr/");
  const [telegram, setTelegram] = useState("https://artcoolcards.gr/");

  const [darkMode, setDarkMode] = useState(false);

  const [redirect, setRedirect] = useState(false);

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

  const [enableAddress, setEnableAddress] = useState(true);
  const [enableEmail, setEnableEmail] = useState(true);
  const [enableLandline, setEnableLandline] = useState(true);
  const [enableMobile, setEnableMobile] = useState(true);
  const [enableWebsite, setEnableWebsite] = useState(true);

  const [followTitle, setFollowTitle] = useState("Follow Us");
  const [partnerTitle, setPartnerTitle] = useState("Our Partners");
  const [aboutTitle, setAboutTitle] = useState("About Us");
  const [reviewTitle, setReviewTitle] = useState("Our Reviews");
  const [subTitle, setSubTitle] = useState("Subscribe");

  const [enableReviews, setEnableReviews] = useState(true);

  const [subName, setSubName] = useState("");
  const [subEmail, setSubEmail] = useState("");

  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });

  useEffect(() => {
    if (window.innerWidth >= 500) {
      setRedirect(true);
    }
  }, [isMobile]);

  function addhttp(s) {
    if (s && s.length > 0) {
      if ((s !== undefined) & !s.match(/^[a-zA-Z]+:\/\//)) {
        return "http://" + s;
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

      setLogo(card.logo);

      setAudio(card.audio);

      setGalleryImage1(card.galleryImage1);
      setGalleryImage2(card.galleryImage2);
      setGalleryImage3(card.galleryImage3);
      setGalleryImage4(card.galleryImage4);

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

  const onSubscribe = async () => {
    const cardOwnerId = card.userId;
    const name = subName;
    const email = subEmail;

    sub({ name, email, cardOwnerId });
    M.toast({ html: "Η εγγραφή ολοκληρωθηκε!", classes: "rounded" });

    setSubName("");
    setSubEmail("");
  };

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
        await getPrivateCard(undefined, cardId, undefined, "false");
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
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
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
            match.params.save && match.params.save === "screenshot"
              ? "true"
              : "false";

          await getPrivateCard(exactId, cardId, userId, screenshot);
          setLoadedPrivate(true);
        } else if (!loading) {
          let exactId = match.params.exactId;
          let cardId = localCardId;
          let screenshot =
            match.params.save && match.params.save === "screenshot"
              ? "true"
              : "false";

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
          match.params.save && match.params.save === "screenshot"
            ? "true"
            : "false";

        getPublicCard(exactId, cardId, screenshot);
        setLoadedPublic(true);
      }
    }

    f();
    //eslint-disable-next-line
  }, [user, match, loading, card]);

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

          if (swiper.activeIndex === 0) {
            swiper.allowSlidePrev = false;
          } else {
            swiper.allowSlidePrev = true;
          }

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
    $(".icon-grid-custom").addClass("open").delay(500);
    $(".share-headline").addClass("open").delay(500);
    $(".scan-and-save-txt").addClass("open").delay(500);
    $(".qr-code-container").addClass("open").delay(500);
    $(".close-icon").removeClass("closeAnim");
  }

  function closeSlide() {
    $(".share-slide").removeClass("open");
    $(".icon-grid-custom").removeClass("open").delay(500);
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

  const saveContact = () => {
    SaveVCF(
      firstName,
      lastName,
      enableProfession ? profession : "",
      mobile,
      landline,
      website,
      email,
      shareLink,
      address,
      "",
      "",
      ""
    );
  };

  //Redirects you based on screen size
  if (redirect) {
    return <Redirect to={"/view" + window.location.pathname} />;
  }

  return (
    <div
      id="re-wrapper"
      style={{
        width: "100%",
        height: "100%",
        background: darkMode ? "#1D3138" : "#F6F6F6",
      }}
    >
      <Preloader
        darkMode={darkMode}
        pos="fixed"
        show={match.params.save && match.params.save === "screenshot"}
        waitForCondition={true}
        condition={hasLoaded}
      />
      <MetaTags>
        <title>{firstName + " " + lastName}</title>
        <meta property="og:title" content={firstName + " " + lastName} />
        <meta property="og:image" content={logo} />
      </MetaTags>
      <GlobalStyle />
      <div
        className="share-slide"
        id="share-slide"
        style={{
          backgroundColor: darkMode ? "#ffffff" : "#F6F6F6",
        }}
      >
        <img
          src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/closeicon.png"
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
          <p
            className="share-headline"
            style={{
              fontSize: getSize(5, 2.5),
              marginBottom: getSize(4, 3),
              color: darkMode ? "#1D4B7A" : "#1D3138",
            }}
          >
            SHARE MY CARD
          </p>
          <ShareContainer className="icon-grid-custom">
            <a
              href={`sms:?&body=/* ${shareMessage + "\n"} ${shareLink} */`}
              style={{ gridArea: "a1" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S1} alt="" />
            </a>

            <EmailShareButton
              url={shareLink}
              subject="Η Κάρτα Μου"
              body={shareMessage + "\n"}
              style={{ gridArea: "a2" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S4} alt="" />
            </EmailShareButton>

            <ViberShareButton
              url={shareLink}
              title={shareMessage + "\n"}
              style={{ gridArea: "a3" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S2} alt="" />
            </ViberShareButton>

            <WhatsappShareButton
              url={shareLink}
              title={shareMessage + "\n"}
              style={{ gridArea: "a4" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S3} alt="" />
            </WhatsappShareButton>

            <FacebookShareButton
              url={shareLink}
              quote={shareMessage + "\n"}
              style={{ gridArea: "a5" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S5} alt="" />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareLink}
              title={shareMessage + "\n"}
              style={{ gridArea: "a6" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S7} alt="" />
            </TwitterShareButton>

            <LinkedinShareButton
              url={shareLink}
              summary={shareMessage + "\n"}
              title={shareMessage + "\n"}
              style={{ gridArea: "a7" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S8} alt="" />
            </LinkedinShareButton>

            <TelegramShareButton
              url={shareLink}
              title={shareMessage + "\n"}
              style={{ gridArea: "a8" }}
              className="fl-row fl-full-center"
            >
              <ShareIcon src={S6} alt="" />
            </TelegramShareButton>
          </ShareContainer>

          <p
            className="scan-and-save-txt"
            style={{
              fontSize: getSize(5, 2.5),
              marginBottom: getSize(4, 4),
              color: darkMode ? "#1D4B7A" : "#1D3138",
            }}
          >
            SCAN AND SAVE
          </p>
          <div className="qr-code-container">
            <QrContainer>
              <QRCode
                value={shareLink}
                style={{ width: "100%", height: "100%" }}
              />
            </QrContainer>
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
                  ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide-01-dark.png"
                  : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide-01.png"
              }
              alt="slide-01-pattern"
              className="slideOnePattern"
              style={{
                width: getSize(25.424, 18),
                height: getSize(50.847, 35),
              }}
            />

            <AudioPlayer audio={audio} key={audio} />
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
                      width: "auto",
                      height: getSize(14, 7),
                      marginTop: getSize(13.801, 7),
                      background: `url('${logo}') no-repeat`,
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
                          ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/share-icon-dark.png"
                          : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/share-icon.png"
                      }
                      alt="share"
                    />
                  </div>

                  <p
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
                  </p>
                  <p
                    className="heading-sirname"
                    style={{
                      marginTop: getSize(1.695, 0.8),
                      fontSize: getSize(6.78, 4),
                      lineHeight: getSize(6.78, 4),
                      color: darkMode ? "#ffffff" : "#34413B",
                    }}
                    data-swiper-parallax="-300"
                  >
                    {lastName}
                  </p>

                  {enableProfession && (
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
                  )}

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

                  {enableMobile && (
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
                            ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/phone-icon-dark.png"
                            : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/phone-icon.png"
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
                  )}

                  {enableLandline && (
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
                            ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/home-icon-dark.png"
                            : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/home-icon.png"
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
                  )}

                  {enableEmail && (
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
                            ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/msg-icon-dark.png"
                            : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/msg-icon.png"
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
                  )}

                  {enableAddress && (
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
                            ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/location-icon-dark.png"
                            : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/location-icon.png"
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
                  )}

                  {enableWebsite && (
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
                            ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/web-icon-dark.png"
                            : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/web-icon.png"
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
                  )}

                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      saveContact();
                    }}
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
                      "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/hj.json"
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
                      width: "8vw",
                      height: "8vw",
                      filter: darkMode ? "invert(1)" : "invert(0)",
                    }}
                    data-swiper-parallax="-250"
                  ></lottie-player>

                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
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
                          ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow-dark.png"
                          : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow.png"
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
                  ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide2patternSmall-dark.png"
                  : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide2patternSmall.png"
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
                      ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide2pattern-dark.png"
                      : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide2pattern.png"
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
                        background: `url('${midPicture}') no-repeat`,
                        height: getSize(50.121, 30),
                      }}
                    ></div>
                  </div>

                  <p
                    className="heading-name02"
                    style={{
                      fontSize: getSize(7.264, 3.5),
                      lineHeight: getSize(8.475, 4.2),
                      marginTop: getSize(9.443, 4.8),
                      color: darkMode ? "#FFFFFF" : "#000000",
                    }}
                    data-swiper-parallax="-350"
                  >
                    {aboutTitle}
                  </p>

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
                          ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow-dark.png"
                          : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow.png"
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
                    onClick={(e) => {
                      e.preventDefault();
                    }}
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
                          ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/right-arrow-dark.png"
                          : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/right-arrow.png"
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
                  ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide-01-dark.png"
                  : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/slide-03-light.png"
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
                  <div
                    className="holder"
                    style={{
                      width: "100%",
                      height: "80%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="01">
                      <p
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
                      </p>
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
                            background: `url('${galleryImage1}') no-repeat`,
                            height: getSize(30.1, 16),
                          }}
                        ></div>
                        <div
                          className="image02"
                          style={{
                            background: `url('${galleryImage2}') no-repeat`,
                            height: getSize(30.1, 16),
                          }}
                        ></div>
                        <div
                          className="image03"
                          style={{
                            background: `url('${galleryImage3}') no-repeat`,
                            height: getSize(30.1, 16),
                          }}
                        ></div>
                        <div
                          className="image04"
                          style={{
                            background: `url('${galleryImage4}') no-repeat`,
                            height: getSize(30.1, 16),
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="02">
                      <p
                        className="heading-name-03"
                        style={{
                          marginTop: getSize(8, 4),
                          fontSize: getSize(7.264, 3.5),
                          lineHeight: getSize(8.475, 4.2),
                          color: darkMode ? "#ffffff" : "#000000",
                        }}
                        data-swiper-parallax="-250"
                      >
                        {followTitle}
                      </p>
                      <div
                        className="social-icons"
                        style={{
                          marginTop: getSize(5, 2.5),
                        }}
                        data-swiper-parallax="-250"
                      >
                        {enableFacebook && (
                          <a
                            href={facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/fb.png"
                              alt="fb"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableInstagram && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={instagram}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/insta.png"
                              alt="insta"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableYoutube && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={youtube}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/youtube.png"
                              alt="youtube"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableTelegram && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={telegram}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/telegram.png"
                              alt="telegram"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableTwitter && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={twitter}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/twitter.png"
                              alt="twitter"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableTiktok && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={tiktok}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/tiktok.png"
                              alt="tiktok"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}

                        {enableLinkedin && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={linkedin}
                            style={{
                              marginLeft: getSize(2, 1),
                            }}
                          >
                            <img
                              src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/linkedin.png"
                              alt="linkedin"
                              style={{
                                width: getSize(8, 5),
                                height: getSize(8, 5),
                              }}
                            />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="03">
                      {enableReviews && (
                        <Fragment>
                          <p
                            className="heading-name-03"
                            data-swiper-parallax="-250"
                            style={{
                              marginTop: getSize(8, 4),
                              fontSize: getSize(7.264, 3.5),
                              lineHeight: getSize(8.475, 4.2),
                              color: darkMode ? "#ffffff" : "#000000",
                            }}
                          >
                            {reviewTitle}
                          </p>
                          <div
                            className="social-icons"
                            style={{
                              marginTop: getSize(5, 2.5),
                            }}
                            data-swiper-parallax="-250"
                          >
                            {enableTripadvisor && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={tripadvisor}
                              >
                                <img
                                  src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/Tripadvisor.png"
                                  alt="fb"
                                  style={{
                                    width: getSize(8, 5),
                                    height: getSize(8, 5),
                                  }}
                                />
                              </a>
                            )}

                            {enableBooking && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={booking}
                                className="mg-lt"
                              >
                                <img
                                  src="https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/bookingcom.png"
                                  alt="insta"
                                  style={{
                                    width: getSize(8, 5),
                                    height: getSize(8, 5),
                                    marginLeft: getSize(2, 1),
                                  }}
                                />
                              </a>
                            )}
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
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
                      ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow-dark.png"
                      : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow.png"
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
                onClick={(e) => {
                  e.preventDefault();
                }}
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
                      ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/right-arrow-dark.png"
                      : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/right-arrow.png"
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
            <div
              className="slide-inner"
              style={{
                background: darkMode ? "#1D3138" : "#8E8879",
              }}
            >
              <div className="slide-04">
                <div className="overlaywrapper4"></div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexGrow: "0",
                }}
              >
                <p
                  className="heading-name"
                  style={{
                    marginTop: "auto",
                    marginLeft: getSize(8, 4),
                    fontSize: getSize(6.78, 4),
                    lineHeight: getSize(6.78, 4),
                    color: darkMode ? "#FFFFFF" : "#000000",
                  }}
                  data-swiper-parallax="-300"
                >
                  {subTitle}
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubscribe();
                  }}
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
                    onChange={(e) => {
                      setSubName(e.target.value);
                    }}
                    placeholder="Enter Your Name"
                    className="input browser-default"
                    style={{
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                      borderRadius: "4px",
                      border: "1px solid rgb(118, 118, 118)",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setSubEmail(e.target.value);
                    }}
                    placeholder="Enter Your Email"
                    className="input browser-default"
                    style={{
                      paddingTop: getSize(3.39, 1.8),
                      paddingBottom: getSize(3.39, 1.8),
                      paddingLeft: getSize(3.668, 1.8),
                      paddingRight: getSize(3.668, 1.8),
                      fontSize: getSize(3.405, 1.8),
                      lineHeight: getSize(5.085, 3),
                      borderRadius: getSize(0.852, 0.4),
                      marginTop: getSize(4, 2),
                      borderRadius: "4px",
                      border: "1px solid rgb(118, 118, 118)",
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
                        borderRadius: "4px",
                        border: "1px solid rgb(118, 118, 118)",
                      }}
                    />
                  </div>
                </form>
              </div>

              {enablePartners && (
                <div
                  className="extra-icons"
                  style={{
                    marginTop: "auto",
                    paddingBottom: getSize(14, 7),
                    background: darkMode ? "#0C232C" : "#E7E7E7",
                  }}
                >
                  <div className="extra-container">
                    <p
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
                      {partnerTitle}
                    </p>

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
                        {enablePartner1 && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
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
                              src={partnerLogo1}
                              alt="lg-extra"
                              className="extra-icon"
                            />
                          </a>
                        )}
                        {enablePartner2 && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
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
                              src={partnerLogo2}
                              alt="lg-extra"
                              className="extra-icon"
                            />
                          </a>
                        )}

                        {enablePartner3 && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
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
                              src={partnerLogo3}
                              alt="lg-extra"
                              className="extra-icon"
                            />
                          </a>
                        )}

                        {enablePartner4 && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
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
                              src={partnerLogo4}
                              alt="lg-extra"
                              className="extra-icon"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
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
                      ? "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow-dark.png"
                      : "https://artcool-web-files.s3.eu-central-1.wasabisys.com/cards/real_estate/left-arrow.png"
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
  );
};

Realestate.propTypes = {
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
})(Realestate);
