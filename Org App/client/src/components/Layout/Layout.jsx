import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({children}) {
  useEffect(() => {
    console.log("CampusLifePage component mounted");
  }, []);

  console.log("Rendering CampusLifePage component");

  return (
    <div >
      <Header />
      <main className="min-vh-100">{children}</main>
      <Footer />
    </div>
  );
}


