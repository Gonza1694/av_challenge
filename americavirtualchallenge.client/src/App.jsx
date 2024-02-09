import { useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    console.log("ok");
    setIsLogin((prev) => !prev);
  };

  if (!isLogin) {
    return (
      <div className={styles.App}>
        <Header handleLogin={handleLogin} />
        <div className={styles.notLoginContent}>
          <p>Por favor inicia sesión</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Header handleLogin={handleLogin} />
      <main>
        <Hero isLogin={isLogin} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
