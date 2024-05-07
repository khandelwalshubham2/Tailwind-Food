import "./App.css";
import About from "./component/About";
import Category from "./component/Category";
import Header from "./component/Header";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Promo from "./component/Promo";
import Review from "./component/Review";
import ScrollButton from "./component/ScrollButton";

function App() {
  const goToSection = (section) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header goToSection={goToSection}></Header>
      <Home></Home>
      <Category></Category>
      <Promo></Promo>
      <About></About>
      <Menu></Menu>
      <Review></Review>
      <ScrollButton></ScrollButton>
    </>
  );
}

export default App;
