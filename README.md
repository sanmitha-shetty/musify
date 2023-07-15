<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sanmitha-shetty/musify">
    <img src= "readme_images/logo.png" alt="Logo" width="288" height="90">
  </a>

<h3 align="center">MUSIFY</h3>

  <p align= "justify" >
        Musify is an exceptional online music streaming website that offers a seamless and immersive music experience to its users. Developed using the powerful MERN Stack (MongoDB, Express.js, React.js, Node.js), along with the sleek and responsive Tailwind CSS framework, Musify combines the latest technologies to create a robust and user-friendly platform.
        <br />
        <br />
        One of the standout features of Musify is its integration with Firebase, allowing users to easily authenticate through their Google accounts, enhancing the security and convenience of the platform. Moreover, Firebase's storage capabilities ensure reliable and efficient storage of music files, enabling smooth playback without interruptions.
         <br />
         <br />
        Musify provides an extensive library of songs spanning various genres, allowing users to explore and discover their favorite music. The website's intuitive interface and smart search functionality make it effortless to find specific songs, artists, or albums, ensuring a hassle-free navigation experience.
        <br />
        <br />
    <p align = "center">
      <a   href="https://musify-songs-app.vercel.app/">Click Here to View Demo</a>
    </p>
        
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#user-role">User Role</a></li>
        <li><a href="#admin-role">Admin Role</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Home Screen][product-screenshot]](https://musify-songs-app.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

<ul>
  <li><a href="https://reactjs.org/">React JS</a></li>
  <li><a href="https://expressjs.com/">Express JS</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://nodejs.org/en/">Node JS</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://firebase.google.com/">Firebase</a></li>
</ul>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Make sure you have latest version of npm installed
   - npm
     ```sh
     npm install npm@latest -g
     ```
2. Make sure you have your accounts set up on MongoDB, Firebase and Razorpay

### Installation

1. Create project on Firebase and MongoDB
2. Get your API keys
   - Database String from MongoDB
   - Firebase Config keys from Firebase (Project Settings -> General)
3. Clone the repo
   ```sh
   git clone git@github.com:sanmitha-shetty/musify.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create `.env` file in both `/client` and `/server` folder
6. Copy the content from `.example.env` files in both `/client` and `/server` folder and paste it in the respective `.env` files created in \_step
7. Fill your API keys in newly created `.env` files. **(You shouldn't update variable names, just update the value)**
8. Download private key from Firebase and rename it to `serviceAccountKey.json` (Project Setting -> Service Accounts -> Generate Private Key)
9. Put your `serviceAccountKey.json` in `/server/config` folder

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Install packages and dependencies
   ```sh
   npm install
   ```
1. Start the server
   ```sh
   cd server/
   yarn dev
   ```
1. Start Client
   ```sh
   cd client/
   yarn start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

### User Role

#### Audiobook Player

[![Product Name Screen Shot][product-screenshot2]](https://example.com)

#### Search Filter

[![Product Name Screen Shot][product-screenshot3]](https://example.com)

#### Login Page

[![Product Name Screen Shot][product-screenshot4]](https://example.com)

#### Google Authentication

[![Product Name Screen Shot][product-screenshot5]](https://example.com)
<br />

### Admin Role

#### Admin Dashboard

[![Product Name Screen Shot][product-screenshot6]](https://example.com)

#### Manage Users

[![Product Name Screen Shot][product-screenshot7]](https://example.com)

#### Manage Songs

[![Product Name Screen Shot][product-screenshot8]](https://example.com)

#### Add Songs

[![Product Name Screen Shot][product-screenshot9]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sanmitha Shetty: sanmithasadanand@gmail.com

LinkedIn Handle: - [![LinkedIn][linkedin-shield]][linkedin-url]

Project Link: [https://github.com/sanmitha-shetty/musify](https://github.com/sanmitha-shetty/musify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/sanmitha-shetty/musify.svg?style=for-the-badge
[contributors-url]: https://github.com/sanmitha-shetty/musify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sanmitha-shetty/musify.svg?style=for-the-badge
[forks-url]: https://github.com/sanmitha-shetty/musify/network/members
[stars-shield]: https://img.shields.io/github/stars/sanmitha-shetty/musify.svg?style=for-the-badge
[stars-url]: https://github.com/sanmitha-shetty/musify/stargazers
[issues-shield]: https://img.shields.io/github/issues/sanmitha-shetty/musify.svg?style=for-the-badge
[issues-url]: https://github.com/ssanmitha-shetty/musify/issues
[license-shield]: https://img.shields.io/github/license/sanmitha-shetty/musify.svg?style=for-the-badge
[license-url]: https://github.com/sanmitha-shetty/musify/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sanmithashetty07/
[product-screenshot]: readme_images/screen.png
[product-screenshot2]: readme_images/player.png
[product-screenshot3]: readme_images/search.png
[product-screenshot4]: readme_images/login.png
[product-screenshot5]: readme_images/auth.png
[product-screenshot6]: readme_images/admin.png
[product-screenshot7]: readme_images/user.png
[product-screenshot8]: readme_images/manage.png
[product-screenshot9]: readme_images/addsong.png
