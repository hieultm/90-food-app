import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Header from "./components/Header";
import Footer from "./components/Footer"
import AuthProvider from "./context/AuthContext"
//import ApiProvider from './context/apiContext';
import PrevFilterProvider from './context/PrevFilterContext';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <PrevFilterProvider>
            <Header />
            <Routes />
          </PrevFilterProvider>
        </AuthProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
