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
import { useAuth } from "../context/auth";

export default function HomePage() {
  console.log("Rendering CampusLifePage component");
  const [auth, setAuth] = useAuth()

  return (
    <Layout className="min-vh-100" title={'Home'}>
      {/* <Main /> */}
      <CampusLife />
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
      <CampusInfo />
      <ImageBanner />
      <CampusEventsSlideShow />
      <ConnectSection />
      {/* <MembSection /> */}
    </Layout>
  );
}
