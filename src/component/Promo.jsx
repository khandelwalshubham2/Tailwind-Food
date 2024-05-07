const Promo = () => {
  const promoItems = [
    {
      imagePath: "/src/assets/img/promo-1.png",
    },
    {
      imagePath: "/src/assets/img/promo-2.png",
    },
  ];

  return (
    <div id="Promo" className="container p-5 flex flex-col gap-5 lg:flex-row">
      {promoItems.map((item) => (
        <div className="bg-primaryColorLight dark:bg-darkColorLight py-5 flex flex-col md:flex-row md:items-center md:py-4 lg:flex-row-reverse lg:flex-1">
          <div>
            <img className="w-40 mx-auto bounce" src={item.imagePath}></img>
          </div>
          <div className="px-4">
            <p className="text-secondaryColor">Payday Promo</p>
            <p className="text-lg uppercase">
              Get a 10% discount on payday week
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="" className="text-secondaryColor">
              Buy online
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promo;
