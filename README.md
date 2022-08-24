<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ahmad44452/chaiit">
    <img src="/client/public/logo512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">chaiit</h3>

  <p align="center">
    A simple messaging app
    <br />
    <br />
    <a href="https://chaiit.herokuapp.com">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple messaging app with a few features built to echance and get hand-on experience with MERN Stack. Following are some notable features

- Signing up is not needed. Just hop in with a random username and enjoy the party
- Not a single message of yours is stored and your username also deletes as soon as you leave the site

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![React][react.js]][react-url]
- [![MongoDB][mongodb][mongodb-url]]
- [![Express.js][express][express-url]]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- <a href="https://nodejs.org/en/">Node.js</a>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ahmad44452/chaiit
   ```
2. Install NPM packages of server
   ```sh
   npm install
   ```
   and client
   ```sh
   npm install --prefix client
   ```
3. Replace the MongoDB uri in `server.js`

   ```js
   const mongoUri = "Your MongoDB Uri";
   ```

4. Run client and server simultaneously
   ```sh
   npm run dev
   ```

<!-- CONTACT -->

## Contact

Ahmad Ghani - [Twitter](https://twitter.com/realAhmadhehe) - [Discord](https://discord.com/users/910558307968761916) - [LinkedIn](https://linkedin.com/in/ahmadghani)

Project Link: [https://github.com/Ahmad44452/chaiit](https://github.com/Ahmad44452/chaiit)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Socket.IO](https://socket.io)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-url]: https://linkedin.com/in/ahmadghani
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com
[express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: https://expressjs.com
