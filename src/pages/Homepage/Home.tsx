import React from "react";
import "./Home.css";
import MainArea from "../../components/MainArea";
import SideNav from "../../components/SideNav";

function Home() {
  return (
    <section className="poppins-extralight container">
      <SideNav />
      <MainArea />
    </section>
  );
}
 
export default Home;
