import Layout from "../components/Layout/Layout";
import { CampusEventsSlideShow, CampusInfo, ConnectSection } from "../components/Layout/Main";

const EventsAndActivties = () => {
  
  return (
    <Layout>
      <br/>
      <br/>
      {/* <h1>EventsAndActivties</h1> */}
      <CampusEventsSlideShow   />
      <CampusInfo/>
      <ConnectSection />
      
    </Layout>
  );
};

export default EventsAndActivties;
