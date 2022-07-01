import { SOCIAL_LINKS as links } from "../constants/socialLinks";
import Head from "next/head";

const Contact = () => {
  const { email, gitHub, linkedIn } = links;

  // useTitle("Contact");

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
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with me by sending an email or a message on linkedin. You can also check out my github and linkedin profiles here."
        />
      </Head>
      <div className="mx-auto mb-16 max-w-7xl">
        <h1 className="mb-10 text-3xl sm:text-4xl lg:text-5xl">
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
      </div>
    </>
  );
};

export default Contact;
