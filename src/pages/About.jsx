import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-5 max-w-[600px]">
      <h1 className="text-3xl text-[#77438d] font-bold">
        GitHub Finder{" "}
        <span className="text-sm text-black font-thin">(v.1.0.1)</span>
      </h1>
      <p>
        This application will provide users with an intuitive and user-friendly
        interface to search for GitHub users by their usernames, explore their
        repositories, view their profiles, and gain insights into their coding
        activities.
      </p>
      <p className="mb-4">
        Whether you&apos;re looking for collaborators, open-source contributors,
        or simply interested in exploring the vibrant world of code
        repositories, GitHub Finder will be your go-to resource, offering a
        seamless experience for connecting and collaborating within the global
        developer community.
      </p>

      <Link
        to="/"
        className="text-[#77438d] font-bold border-b-2 border-[#77438d] w-[8rem]"
      >
        ⬅️Back to Home
      </Link>
    </div>
  );
};

export default About;
