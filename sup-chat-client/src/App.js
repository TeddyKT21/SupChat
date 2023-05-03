import logo from "./logo.svg";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { Chats } from "./pages/chats";
import { ChatLayout } from "./UIkit/Layouts/ChatLayout/ChatLayout";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChatLayout>
        <Outlet />
      </ChatLayout>
      {/* <SideBar/> 
      <ChatArea/>
      <Button>+</Button> route to new chat page */}
    </div>
  );
}

export default App;
