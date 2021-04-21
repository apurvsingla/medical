  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage.js'
import Cart from './Pages/Cart/Cart';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
