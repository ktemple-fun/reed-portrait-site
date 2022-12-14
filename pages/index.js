import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Services from "../components/services";
import About from "../components/aboutCard";
import NavMenu from "../components/navMenu";
import Contact from "../components/contactCard";
import VideoDisplay from "../components/videoDisplay";
import Footer from "../components/footer";
import HeaderCarousel from "../components/carousel";
import { GraphQLClient } from "graphql-request";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Script from "next/script";
import { gql } from "graphql-request";
import BusinessBlurb from "../components/businessBlurb";
import HamburgerMenu from "../components/hamburgerMenu";

export default function Home({ photographyServices, profile, carouselPhotos }) {
  //fpr return to top menu
  const [visible, setVisible] = useState(false);
  if (typeof window !== "undefined") {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.businessName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"/>
        <style
          data-href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap"
          rel="stylesheet"
        />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}`}
        />
      </Head>

      <NavMenu profile={profile} />
      <HamburgerMenu profile={profile} />
      <HeaderCarousel carouselPhotos={carouselPhotos} />
      <BusinessBlurb profile={profile} />
      <Services photographyServices={photographyServices} />
      <About profile={profile} />
      <VideoDisplay />
      <Contact profile={profile} />
      <Footer profile={profile} />
      <a
        href="#"
        className={styles.backToTop}
        style={{ display: visible ? "inline" : "none" }}
        title="Back To Top"
      >
        <ArrowUpwardIcon />
      </a>
    </div>
  );
}
const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_CLIENT_URL, {
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
});

const QUERY = gql`
  query Services {
    photographyServices {
      id
      serviceTitle
      photoSamples {
        id
        url
        width
        height
      }
    }
    profile(where: { businessName: "GO 2 YOU PORTRAITS" }) {
      aboutMe
      address
      businessName
      emailAddress
      ownerName
      phoneNumber
      aboutBusiness
      profilePhoto {
        id
        url
        width
        height
      }
      logo {
        url
        id
        width
        height
      }
    }
    carouselPhotos {
      id
      carouselPhotos {
        height
        url
        width
        id
      }
    }
  }
`;
export async function getStaticProps() {
  const { photographyServices, profile, carouselPhotos } =
    await hygraph.request(QUERY);
  return {
    props: {
      photographyServices,
      profile,
      carouselPhotos,
    },
  };
}
