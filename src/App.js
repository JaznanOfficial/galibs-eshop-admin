import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import RoutesComponents from "./Components/Routes/RoutesComponents";
import DashboardPage from "./Pages/DashboardPage";

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="md:hidden">
                <RoutesComponents />
            </div>
        </div>
    );
}

export default App;
