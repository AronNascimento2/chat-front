import React from "react";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Container } from "./AppStyles";
import { ChatContainer } from "./components/ChatContainer";
import { ChatList } from "./components/ChatList";

export const App = () => {
  return (
    <Container>
      <Header />
     <div className="container"> 
      <SideBar />
      <ChatContainer/>
      <ChatList/>
      </div>
    </Container>
  );
};
