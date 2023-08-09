import { useEffect, useState } from "react";
import CATEGORIES from "../assets/categories.json";


const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(CATEGORIES);
  }, [])

  return <div>Home</div>;
};
export default Home;
