import "bootstrap/dist/css/bootstrap.min.css";
import Main, {
  CampusInfo,
  MembSection,
  ImageBanner,
  CampusEventsSlideShow,
  ConnectSection,
} from "../components/Layout/Main";
import Layout from "../components/Layout/Layout";
import { CampusLife } from "./Membership";


export default function HomePage() {
  console.log("Rendering CampusLifePage component");

  return (
    <Layout className="min-vh-100">
      <CampusLife />
      {/* <Main /> */}
      <CampusInfo />
      <ImageBanner />
      <CampusEventsSlideShow />
      <ConnectSection />
      {/* <MembSection /> */}
    </Layout>
  );
}
