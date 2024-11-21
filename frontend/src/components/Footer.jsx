import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-zinc-900 text-white">
      <div className="max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-16 md:gap-10">
        {/* Left Section */}
        <div className="basis-full md:basis-1/2 flex justify-center md:justify-start">
          <h1 className="logo text-5xl md:text-[7rem] lg:text-[11.5rem] tracking-tight font-semibold leading-none text-center md:text-left">
            voigo
          </h1>
        </div>

        {/* Right Section */}
        <div className="basis-full md:basis-1/2 flex flex-col sm:flex-row gap-8 sm:gap-4">
          {/* Column 1 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center sm:text-left">
              Socials
            </h4>
            {["instagram", "twitter", "facebook"].map((item, index) => (
              <Link
                to="/coming-soon"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center sm:text-left">
              Links
            </h4>
            {["home", "about", "contact"].map((item, index) => (
              <Link
                to="/"
                key={index}
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center sm:text-left">
              Company
            </h4>
            <span>
              <Link
                to="/terms-and-conditions"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Privacy and Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
