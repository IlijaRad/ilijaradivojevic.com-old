import InstagramImg from "../assets/images/instagram.jpg";
import NetflixImg from "../assets/images/netflix.jpg";
import GelpImg from "../assets/images/gelp.jpg";

export const projects = [
  {
    id: 1,
    title: "Netflix clone",
    body: "Netflix Clone website with authentication made using React, Tailwind CSS, Firebase, Jest and React Testing Library. Features include: user registration and login/logout, searching for films and series, previewing films/series.",
    gitHubLink: "https://github.com/IlijaRad/Netflix/",
    websiteLink: "https://netflix-clone-app7.netlify.app/",
    imgSrc: NetflixImg,
    imgAlt: "Netflix Clone picture",
  },
  {
    id: 2,
    title: "Instagram Clone",
    body: "Instagram Clone website with authentication made using React, Tailwind CSS & Firebase. Features include: user registration and login/logout, viewing profiles, following users, liking and commenting.",
    gitHubLink: "https://github.com/IlijaRad/Instagram",
    websiteLink: "https://instagram-clone-app7.netlify.app/",
    imgSrc: InstagramImg,
    imgAlt: "Instagram Clone picture",
  },
  {
    id: 3,
    title: "Gelp",
    body: "Restaurant finder app made using React, Styled Components, Material UI, Node, Express, PostgreSQL. The features include creating, viewing, updating, deleting restarants. Writing reviews for every restaurant.",
    gitHubLink: "https://github.com/IlijaRad/gelp",
    websiteLink: "https://restaurant-finder5.netlify.app/",
    imgSrc: GelpImg,
    imgAlt: "Gelp picture",
  },
];
