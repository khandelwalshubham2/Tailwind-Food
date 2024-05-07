const Category = () => {
  const foodCategory = [
    {
      title: "Food",
      text: "Lorem ipsum dolor sit amet.",
      buyText: "Buy Online",
      imagePath: "../src/assets/img/burger-1.png",
      background: "bg-secondaryColor",
    },
    {
      title: "Snack",
      text: "Lorem ipsum dolor sit amet.",
      buyText: "Buy Online",
      imagePath: "../src/assets/img/snack-1.png",
      background: "bg-redColor",
    },
    {
      title: "Beverage",
      text: "Lorem ipsum dolor sit amet.",
      buyText: "Buy Online",
      imagePath: "../src/assets/img/beverage-2.png",
      background: "bg-greenColor",
    },
  ];
  return (
    <div
      id="Category"
      className="container mx-auto flex flex-col gap-5 md:flex-row py-5"
    >
      {foodCategory.map((item) => (
        <div
          className={`flex flex-row flex-1 ${item.background} overflow-hidden rounded-md`}
        >
          <div className="basis-1/3 relative">
            <img
              src={`${item.imagePath}`}
              className="absolute w-28 -bottom-4 -left-4"
            ></img>
          </div>
          <div className="py-2">
            <p className="text-lg uppercase font-bold">{item.title}</p>
            <p className="text-sm">{item.text}</p>
            <p className="mt-2">{item.buyText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
