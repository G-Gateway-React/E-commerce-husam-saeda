import CardsRecently from "../../Components/CardsRecently/CardsRecently";
import CategoryHome from "../../Components/category-homePage/CategoryHome";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/heroSection/Hero";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/Signup";
import { CustomHome } from "./Home.style";

const Home: React.FC = () => {
  return (
    <CustomHome>
      <Hero/>
        <CategoryHome />
      <CardsRecently />
      <Footer />
      {/* <SignUp/>
      <Login/> */}
    </CustomHome>
  );
};
export default Home;
