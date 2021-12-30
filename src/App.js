import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import ChoseYourClass from "./components/ChoseYourClass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InformationMovie from "./components/InformationMovie";
import Maps from "./components/Maps";
import PagePrimeBio from "./components/pages/PagePrimeBio";
import PjPersonalitation from "./components/PjPersonalitation";
import StarTransformers from "./components/StarTransformers";
import ToFindOut from "./components/ToFindOut";
import VideoFooter from "./components/VideoFooter";
import VideoPresentation from "./components/VideoPresentation";
import "./index.css";
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <VideoPresentation />
            <Carousel />
            <InformationMovie />
            <ChoseYourClass />
            <PjPersonalitation />
            <Maps />
            <StarTransformers />
            <ToFindOut />
            <VideoFooter />
            <Footer />
          </Route>

          <Route exact path="/OptimusPrime" component={PagePrimeBio} />
          <Route path="*">
            {/* <Header /> */}
            <h2>Sección en desarrollo</h2>
            <Link to="/">Volver al inicio</Link>
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
