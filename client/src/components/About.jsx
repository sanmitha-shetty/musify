import React from "react";
import Header from "./Header";
import { Logo } from "../assets/img";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { ProfPic1, ProfPic2, ProfPic3 } from "../assets/img";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary gap-6">
      <Header />
      <p className="text-[40px] font-semibold text-[rgb(255,87,87)] justify-center">
        Know More About Us
      </p>
      <div className=" w-auto justify-center items-center flex flex-col p-6 gap-4 bg-card backdrop-blur-md rounded-md border-2 border-dotted border-gray-300 cursor-pointer mr-40 ml-40 ">
        <img src={Logo} alt="Logo" className=" w-56" />
        <p className="text-md font-semibold text-black text-justify">
          Welcome to{" "}
          <span className="font-bold text-[rgb(255,87,87)]">Musify</span> ! At
          Musify, we are dedicated to delivering a remarkable music listening
          experience to all music enthusiasts. Whether you're a casual listener,
          a passionate audiophile, or a devoted music lover, Musify is designed
          to cater to your unique tastes and preferences. Our goal is to provide
          you with a seamless and enjoyable journey through the world of music.
          With a sleek and intuitive interface, an extensive library of songs,
          and a wide range of features, Musify is your go-to music player app
          for discovering new artists, playlists, and immersing yourself in the
          melodies that move you. Join us on this musical adventure as we bring
          you closer to the songs that touch your soul and make your heart sing.
          <br />
          <span className="font-bold text-[rgb(255,87,87)]">Musify </span>- Your
          ultimate destination for music exploration and discovery.
        </p>
      </div>
      <div className=" w-auto justify-center items-center flex flex-col p-6 gap-4 bg-card backdrop-blur-md rounded-md border-2 border-dotted border-gray-300 cursor-pointer mr-40 ml-40 ">
        <p className="text-[30px] font-semibold text-[rgb(255,87,87)] justify-center">
          Testimonials
        </p>
        <div className="w-full h-auto flex flex-row items-center justify-center gap-6">
          <div className="relative w-80 min-w-210 px-2 py-4 gap-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={ProfPic1}
                className=" w-full h-full rounded-lg object-cover"
              />
            </div>
            <p className=" text-2xl text-center font-bold text-headingColor">
              Jake Brown
            </p>
            <p className="text-md text-center font-medium ">
              "I've tried many music player apps, but Musify stands out from the
              rest. It's incredibly user-friendly, and the personalized
              playlists. Whether I'm working out or relaxing at home, Musify
              always has the right tunes to accompany me. Highly recommended!"
            </p>
            <div className="flex flex-row text-yellow-300 text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>

          <div className="relative w-80 min-w-210 px-2 py-4 gap-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={ProfPic2}
                className=" w-full h-full rounded-lg object-cover"
              />
            </div>
            <p className=" text-2xl text-center font-bold text-headingColor">
              Amy Williams
            </p>
            <p className="text-md text-center font-medium ">
              "Musify has completely transformed my music listening experience.
              The advanced equalizer allows me to fine-tune the audio output to
              match my preferences, resulting in a truly immersive and
              personalized sound. Thank you, Musify, for making my music journey
              extraordinary!"
            </p>
            <div className="flex flex-row text-yellow-300 text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>

          <div className="relative w-80 min-w-210 px-2 py-4 gap-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
            <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={ProfPic3}
                className=" w-full h-full rounded-lg object-cover"
              />
            </div>
            <p className=" text-2xl text-center font-bold text-headingColor">
              James Evans
            </p>
            <p className="text-md text-center font-medium ">
              "As a music lover, Musify has become my constant companion. The
              offline mode is a game-changer, I can enjoy my favorite songs even
              when I'm on the go without an internet connection. Musify has
              become an essential part of my daily life, and I can't imagine
              listening to music without it."
            </p>
            <div className="flex flex-row text-yellow-300 text-lg">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
