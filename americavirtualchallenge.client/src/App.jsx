import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        if (username && password) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, [loggedIn]);

    const handleLogin = () => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        if (loggedIn && username && password) {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    };

    return (
        <div className={styles.App}>
            <Header handleLogin={handleLogin} loggedIn={loggedIn} />
            <main>
                {loggedIn ? <Hero /> : <div className={styles.notLoginContent}><p>Por favor inicia sesión</p></div>}
            </main>
            <Footer />
        </div>
    );
}

export default App;
