import { SOCIAL_LINKS as links } from "../constants/socialLinks";

const Contact = () => {
  const { email, gitHub, linkedIn } = links;

  return (
    <div className="mx-6 md:mx-[10vw]">
      <div className="pt-20">
        <h1 className="leading-tight text-3xl sm:text-4xl lg:text-6xl mb-10">
          Contact Information:
        </h1>
        <ul className="text-gray-light dark:text-gray-dark md:ml-4">
          <li className="text-base md:text-xl mb-3">
            <span className="font-medium text-black dark:text-white">
              Email:{" "}
            </span>
            <a
              href={`mailto:${email}`}
              className="ml-1 underlined focus:outline-none overflow-hidden dark:hover:text-white hover:text-black transition"
            >
              {email}
            </a>
          </li>
          <li className="text-base md:text-xl mb-3">
            <span className="font-medium text-black dark:text-white">
              Github:{" "}
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href={gitHub}
              className="ml-1 underlined focus:outline-none overflow-hidden dark:hover:text-white hover:text-black transition"
            >
              {gitHub}
            </a>
          </li>
          <li className="text-base md:text-xl">
            <span className="font-medium text-black dark:text-white">
              LinkedIn:{" "}
            </span>
            <a
              target="_blank"
              rel="noreferrer"
              href={linkedIn}
              className="ml-1 underlined focus:outline-none overflow-hidden dark:hover:text-white hover:text-black transition"
            >
              {linkedIn}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
