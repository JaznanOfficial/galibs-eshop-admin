// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import RoutesComponents from "./Components/Routes/RoutesComponents";
import useFirebase from "./Hooks/useFirebase";
import Login from "./Pages/Login";
// import DashboardPage from "./Pages/DashboardPage";

function App() {
    const { user } = useFirebase();
    console.log(user);
    if (!user.auth) {
        return (
            <div className="App ">
                <Login />
            </div>
        );
    } else {
        return (
            <div className="App ">
                <Navigation />
                <div className="md:hidden bg-green-50">
                    <RoutesComponents />
                </div>
            </div>
        );
    }
}

export default App;
