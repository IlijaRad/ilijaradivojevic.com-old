import InstagramImg from "../assets/images/instagram.jpg";
import NetflixImg from "../assets/images/netflix.jpg";
import GelpImg from "../assets/images/gelp.jpg";
import Gelp1 from "../assets/images/gelp1.jpg";
import Gelp2 from "../assets/images/gelp2.png";
import Gelp3 from "../assets/images/gelp3.png";

import Instagram1 from "../assets/images/instagram1.png";
import Instagram2 from "../assets/images/instagram2.png";
import Instagram3 from "../assets/images/instagram3.png";
import Instagram4 from "../assets/images/instagram4.png";
import Instagram5 from "../assets/images/instagram5.png";

import Netflix1 from "../assets/images/netflix1.png";
import Netflix2 from "../assets/images/netflix2.png";
import Netflix3 from "../assets/images/netflix3.png";
import Netflix4 from "../assets/images/netflix4.png";
import Netflix5 from "../assets/images/netflix5.png";
import Netflix6 from "../assets/images/netflix6.png";
import Netflix7 from "../assets/images/netflix7.png";

export const projects = [
  {
    id: 1,
    title: "Netflix clone",
    body: "Netflix Clone website with authentication made using React, Tailwind CSS, Firebase, Jest and React Testing Library. Features include: user registration and login/logout, searching for films and series, previewing films/series.",
    gitHubLink: "https://github.com/IlijaRad/Netflix/",
    websiteLink: "https://netflix-clone-app7.netlify.app/",
    imgSrc: NetflixImg,
    imgAlt: "Netflix Clone picture",
    slideImages: [
      Netflix1,
      Netflix2,
      Netflix3,
      Netflix4,
      Netflix5,
      Netflix6,
      Netflix7,
    ],
  },
  {
    id: 2,
    title: "Instagram Clone",
    body: "Instagram Clone website with authentication made using React, Tailwind CSS & Firebase. Features include: user registration and login/logout, viewing profiles, following users, liking and commenting.",
    gitHubLink: "https://github.com/IlijaRad/Instagram",
    websiteLink: "https://instagram-clone-app7.netlify.app/",
    imgSrc: InstagramImg,
    imgAlt: "Instagram Clone picture",
    slideImages: [Instagram1, Instagram2, Instagram3, Instagram4, Instagram5],
  },
  {
    id: 3,
    title: "Gelp",
    body: "Restaurant finder app made using React, Styled Components, Material UI, Node, Express, PostgreSQL. The features include creating, viewing, updating, deleting restarants. Writing reviews for every restaurant.",
    gitHubLink: "https://github.com/IlijaRad/gelp",
    websiteLink: "https://restaurant-finder5.netlify.app/",
    imgSrc: GelpImg,
    imgAlt: "Gelp picture",
    slideImages: [Gelp1, Gelp2, Gelp3],
  },
];
