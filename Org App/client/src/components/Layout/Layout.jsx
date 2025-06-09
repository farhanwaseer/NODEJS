import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import  { Toaster } from 'react-hot-toast';


export default function Layout({
  children,
  description,
  keywords,
  author,
  title,
}) {
  useEffect(() => {
    console.log("CampusLifePage component mounted");
  }, []);

  console.log("Rendering CampusLifePage component");

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>MSA - {title}</title>
      </Helmet>
      <Header />
      <main className="min-vh-100">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "MSA-Connectfex",
  description:
    "students organization, international islamic university islamabad",
  keywords:
    "students organization, international islamic university islamabad,sis iiui, iiui",
  author: "Farhan waseer",
};
