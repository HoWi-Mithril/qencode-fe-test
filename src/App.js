import Logo from "./components/logo/Logo";
import {Outlet} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <Logo />

            <Outlet />
        </div>
    );
}

export default App;
