import { SOCIAL_LINKS as links } from "../constants/socialLinks";

const Contact = () => {
  const { email, gitHub, linkedIn } = links;

  return (
    <div className="max-w-7xl ml-[10vw] pt-20">
      <h1 className="leading-tight text-4xl md:text-6xl mb-10">
        Contact Information:
      </h1>
      <ul className="text-gray-light dark:text-gray-dark ml-4">
        <li className="text-xl mb-3">
          <span className="font-medium text-black dark:text-white">
            Email:{" "}
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
            className="ml-1 underlined focus:outline-none overflow-hidden dark:hover:text-white hover:text-black transition"
          >
            {email}
          </a>
        </li>
        <li className="text-xl mb-3">
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
        <li className="text-xl">
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
  );
};

export default Contact;
