import Directory from "../../directory/directory.component";
import { categories } from "../../../data/categories";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <Outlet/>
        <Directory categories={categories} />
      </div>
    </>
  );
};
export default Home;
