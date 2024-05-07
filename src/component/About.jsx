import { FaCheck } from "react-icons/fa6";
const About = () => {
  const specification = [
    "Best Price",
    "Fresh Ingredient",
    "Best Service",
    "Health Protocol",
  ];
  return (
    <div className="container py-4" id="About Us">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1">
          <img
            className="rounded-md"
            src="../../src/assets/img/about.jpg"
          ></img>
        </div>
        <div className="flex-1">
          <p className="uppercase text-3xl font-bold">
            find food and drinks, all-in-one place for your best taste
          </p>
          <div className="seperator"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            tempora, id atque vitae praesentium ratione?
          </p>
          <ul className="mt-5 flex flex-wrap gap-y-2">
            {specification.map((item) => (
              <li className="basis-1/2 flex items-center gap-2">
                <span>
                  <FaCheck className="text-secondaryColor"></FaCheck>
                </span>
                <span>Best Price</span>
              </li>
            ))}
          </ul>
          <a href="" className="btn btn-primary mt-5">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
