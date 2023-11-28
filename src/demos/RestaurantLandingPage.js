import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
// import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter";
import Features from "components/features/ThreeColWithSideImage.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

import "../styles/LandingPage-1.scss"

import { useEffect, useState } from "react";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const [today, setToday] = useState();
  const [sunday, setSunday] = useState(false);
  const [toggleCal, setToggleCal] = useState(false);


  useEffect(()=>{
    var date = new Date()
    setToday(date.getDate())

    if (date.getDay()===7) {
      setSunday(true)
      console.log(date);
    }
  })

  const toggleBooking = ()=>{
    setToggleCal(true)
  }

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);
  console.log(sunday);

  return (
    <div>
    <AnimationRevealPage>
      <Hero
        heading={<>Ceci est un exemple <HighlightedText>DE TEXTES</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Appel De Découverte"
        watchVideoButtonText="Voir une Démo"
      />
       <Features 
        heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
      />
      <MainFeature
        subheading={<Subheading>Ceci est un exemple aussi</Subheading>}
        heading={
          <>
            Ceci est un exemple 
            <wbr /> <HighlightedText>DE TEXTES</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Voir une Démo"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

        <div className="calendar-section">      
          <div className="calendar-wrapper">
          <h1>Plus de Exemple et de Exemple, Aujourd'hui</h1> 
          <p className="head">Voir FlowPilot en action</p>

          <div className="calendar-box">
            <div className="calendar-head">
              <div className="events event-1">
                <svg width="8" height="8">*
                <circle cx="4" cy="4" r="4" fill="#212e36"></circle>
                </svg>
                <p>Remplis le formulaire</p>
            </div>

              <div className="events event-2">
                <svg width="8" height="8">*
                <circle cx="4" cy="4" r="4" fill="#212e36"></circle>
                </svg>
                <p>Reserve ton Appel</p>
              </div>
            </div>

            <div className="event-section">
              <div className={`  ${toggleCal == false? "display-none" :"calendar-form"}`}>
                  <h1>15min Appel de Démo</h1>
                  <p>Un exemple de texte que je met sous le titre</p>
                  <form>
                    <label>Numéro</label>
                    <input></input>

                    <label>Nom Entier</label>
                    <input></input>

                    <button>Continuer</button>
                  </form>
              </div>
              <div className="calendar-select">
                <p>Sélectionner une date</p>
                <div className="subcal-date">
                <span>➡️</span><p>Septembre 2023</p> <span>➡️</span>
              </div>

              <div className="weekdays">
                <p>Lun</p>
                <p>Mar</p>
                <p>Mer</p>
                <p>Jeu</p>
                <p>Ven</p>
                <p>Sam</p>
                <p>Dim</p>
              </div>

              <div className="calendar">
                
                <p className="month-starter"></p>
                <p className="month-starter"></p>
                <p className="month-starter"></p>
                <p className="month-starter"></p>
              {numbers.map((number) => (
                <p key={number} className={number < today+6 && number > today+1 ? "":"invisible" } onClick={number < today+6 && number > today+1 ? ()=> toggleBooking(number) : null} >{number}</p>
              ))}
                 
              </div>





              </div>

              

              <div>

              </div>

            


            </div>
            <p className="calendar-footer">Powered by FlowPilot</p>
          </div>
          
          </div>
        </div>
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}
     
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}
      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      
      <Footer />
    </AnimationRevealPage>
    </div>
  );
}
