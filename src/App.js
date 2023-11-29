import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import TodoList from "./Componets/TodoList/TodoList";
import "./App.css";



function App() {
  return (
    <ChakraProvider>
      <TodoList />
    </ChakraProvider>
  );
}

export default App;
