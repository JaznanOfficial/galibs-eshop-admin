// import { Route, Routes } from "react-router-dom";
import { Watch } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import RoutesComponents from "./Components/Routes/RoutesComponents";
import useFirebase from "./Hooks/useFirebase";
import Login from "./Pages/Login";
// import DashboardPage from "./Pages/DashboardPage";

function App() {
    const { user, loading } = useFirebase();
    console.log(user);
    if (loading) {
        return (
            <div className="flex justify-center items-center w-screen h-screen">
                <Watch
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    } else if (!user.auth) {
        return (
            <div className="App ">
                <Login />
            </div>
        );
    } else {
        return (
            <div className="App ">
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
                <Navigation />
                <div className="md:hidden bg-green-50">
                    <RoutesComponents />
                </div>
            </div>
        );
    }
}

export default App;
