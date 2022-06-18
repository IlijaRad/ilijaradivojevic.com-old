import { SOCIAL_LINKS as links } from "../constants/socialLinks";

const Contact = () => {
  const { email, gitHub, linkedIn } = links;

  return (
    <div className="mx-6 pt-24 md:mx-[10vw]">
      <h1 className="mb-10 text-3xl leading-tight sm:text-4xl lg:text-6xl">
        Contact Information:
      </h1>
      <ul className="text-gray-light dark:text-gray-dark md:ml-4">
        <li className="mb-3 text-base md:text-xl">
          <span className="font-medium text-black dark:text-white">
            Email:{" "}
          </span>
          <a
            href={`mailto:${email}`}
            className="underlined ml-1 overflow-hidden transition hover:text-black focus:outline-none dark:hover:text-white"
          >
            {email}
          </a>
        </li>
        <li className="mb-3 text-base md:text-xl">
          <span className="font-medium text-black dark:text-white">
            Github:{" "}
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href={gitHub}
            className="underlined ml-1 overflow-hidden transition hover:text-black focus:outline-none dark:hover:text-white"
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
            className="underlined ml-1 overflow-hidden transition hover:text-black focus:outline-none dark:hover:text-white"
          >
            {linkedIn}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
