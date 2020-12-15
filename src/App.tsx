import { Route, Switch } from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Index from "./pages/homepage/index";
import Members from "./pages/members/Members";
import RequestAlliance from "./pages/request alliance/RequestAlliance";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/members" component={Members} />
        <Route path="/alliance" component={RequestAlliance} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
