import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./config/Routes";

import 'swiper/swiper.min.css';
import './App.scss';

// global styles
import './assets/styles/normalize.css';
import './assets/styles/flex-box.css';
import './assets/styles/global.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props} />
                    <Routes />
                    <Footer />
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
