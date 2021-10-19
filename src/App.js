import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import './App.css'
import Booking from './Pages/Booking/Booking/Booking';
import LiveConsultancy from './Pages/Home/LiveConsultancy/LiveConsultancy';
import DonateUs from './Pages/Home/DonateUs/DonateUs';
import HealthTips from './Pages/Home/HealthTips/HealthTips';

function App() {
  return (
    <div className="App.css">
      <AuthProvider>
        <Router>
          <Header></Header>
          <div id="body">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/live">
                <LiveConsultancy></LiveConsultancy>
              </Route>
              <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path="/donate">
                <DonateUs></DonateUs>
              </PrivateRoute>
              <PrivateRoute path="/tips">
                <HealthTips></HealthTips>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
          <div id="footer">
            <Footer></Footer>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
