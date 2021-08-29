import "./App.css";
import CheckSection from "./content/CheckSection";
import RecentPortfolio from "./content/RecentPortfolio";
import Testimonials from "./content/Testimonials";
import News from "./content/News";
import { data, data2, data3, data4, data5, data6 } from "./content/data";
import Brands from "./content/Brands";
import Footer from "./components/Footer.js/index.js";

function Home() {
  return (
    <>
      <CheckSection data={data} />
      <RecentPortfolio data={data2} />
      <Testimonials data={data3} />
      <News data={data4} />
      <Brands data={data5} />
      <Footer data={data6} />
    </>
  );
}

export default Home;
