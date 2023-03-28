import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  const { toggleValue } = useSelector((state) => state.ThemeReducer);

  return (
    <div className={toggleValue ? "dark" : "light"}>
      <Header />
      <Routes>
        <Route to="/" index element={<Tasks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
