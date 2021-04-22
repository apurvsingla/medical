  
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import {ItemProvider} from './Components/context';
import HomePage from './Pages/HomePage/HomePage.js'
import Cart from './Pages/Cart/Cart';
import Header from './Components/Header/Header.js';
import SignIn from "./Components/SignIn/SignIn";
import {auth, createUserProfileDocument} from './firbase/firebase.utils';
import React from "react";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        });
      }else{
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <Router>
        <ItemProvider>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/cart' render={() => <Cart p={'we'} currentUser={this.state.currentUser}/>} />
            <Route exact path="/signIn" render={() => this.state.currentUser ? (<Redirect to='/' />): 
            (<SignIn />)} />
          </Switch>
        </ItemProvider>
        {/* <Footer /> */}
      </Router>
    );
  }
  
}

export default App;
