import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyfetching ? <Loading /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
