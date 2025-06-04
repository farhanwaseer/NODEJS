import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main, {
  CampusInfo,
  MembSection,
  ImageBanner,
  CampusEventsSlideShow,
  ConnectSection,
} from "../components/Layout/Main";
import Layout from "../components/Layout/Layout";

export default function HomePage() {
  useEffect(() => {
    console.log("CampusLifePage component mounted");
  }, []);

  console.log("Rendering CampusLifePage component");

  return (
    <Layout className="min-vh-100">
      <Main />
      <CampusInfo />
      <ImageBanner />
      <CampusEventsSlideShow />
      <ConnectSection />
      <MembSection />
    </Layout>
  );
}
