import logo from "./logo.svg";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Chats } from "./pages/chats";
import { MainLayout } from "./UIkit/Layouts/MainLayout/MainLayout";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Outlet />
      </MainLayout>
      {/* <SideBar/> 
      <ChatArea/>
      <Button>+</Button> route to new chat page */}
    </div>
  );
}

export default App;
