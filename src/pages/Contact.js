import { useEffect } from "react";
import { SOCIAL_LINKS as links } from "../constants/socialLinks";
import setTitle from "../helpers/setTitle";

const Contact = () => {
  const { email, gitHub, linkedIn } = links;

  useEffect(() => {
    setTitle("Contact");
  }, []);

  const ContactLink = ({ text, link, ...restProps }) => {
    return (
      <li className="mb-3 md:text-lg">
        <span className="font-medium">{text}</span>
        <a
          {...restProps}
          className="underlined ml-1 overflow-hidden text-gray-500 transition hover:text-black focus:outline-none dark:text-gray-dark dark:hover:text-white"
        >
          {link}
        </a>
      </li>
    );
  };

  return (
    <>
      <h1 className="mb-10 text-3xl leading-tight sm:text-4xl lg:text-5xl">
        Contact Information:
      </h1>
      <ul className="md:ml-4">
        <ContactLink text="Email: " link={email} href={`mailto:${email}`} />
        <ContactLink
          text="Github: "
          link={gitHub}
          href={gitHub}
          target="_blank"
          rel="noreferrer"
        />
        <ContactLink
          text="LinkedIn: "
          link={linkedIn}
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        />
      </ul>
    </>
  );
};

export default Contact;
