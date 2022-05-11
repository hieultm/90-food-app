import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthProvider from './context/AuthContext';
import ApiProvider from './context/apiContext';
import PrevFilterProvider from './context/PrevFilterContext';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <PrevFilterProvider>
                        <ApiProvider>
                            <Header />
                            <Routes />
                        </ApiProvider>{' '}
                    </PrevFilterProvider>{' '}
                </AuthProvider>{' '}
            </Router>{' '}
            <Footer />
            <ToastContainer closeButton={false} />{' '}
        </>
    );
}

export default App;
