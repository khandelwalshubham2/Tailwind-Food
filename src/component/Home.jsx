import { PiForkKnifeBold } from "react-icons/pi";
import { ImDroplet } from "react-icons/im";
import { FaLeaf } from "react-icons/fa6";

const Home = () => {
  const foodQuality = [
    {
      quality: "Delicious",
      icon: <PiForkKnifeBold></PiForkKnifeBold>,
    },
    { quality: "Fresh", icon: <ImDroplet></ImDroplet> },
    { quality: "Organic", icon: <FaLeaf></FaLeaf> },
  ];
  return (
    <div
      id="Home"
      className="container pt-16 flex flex-col gap-5 items-center md:flex-row md:gap-10 mx-auto"
    >
      <div className="md:basis-1/2 lg:basis-2/5">
        <img
          src="../src/assets/img/home-image.png"
          className="w-60 md:w-full item-animation md:h-[450px]"
        ></img>
      </div>
      <div className="text-center md:basis-1/2 lg:basis-3/5 md:text-left">
        <p className="text-3xl">HAPPY TUMMY WITH TASTY BURGERS.</p>
        <div className="seperator mx-auto md:mx-0"></div>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat
          quam tempora alias perferendis soluta incidunt est odio aperiam magni
          nam consequatur consectetur repudiandae, suscipit exercitationem,
          culpa cum. Soluta, dicta?
        </p>
        <div className="my-5 flex justify-center gap-10 text-2xl md:justify-start">
          {foodQuality.map((item) => (
            <div>
              <div className="flex justify-center text-secondaryColor">
                {item.icon}
              </div>
              <div>{item.quality}</div>
            </div>
          ))}
        </div>
        <button type="button" className="btn btn-primary mt-4">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Home;
