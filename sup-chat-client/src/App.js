import logo from "./logo.svg";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Chats } from "./pages/chats";
import { MainLayout } from "./UIkit/Layouts/MainLayout/MainLayout";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  //const user = useSelector(state => state.userSlice.user);

  return (
    <div className="App">
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}

export default App;
