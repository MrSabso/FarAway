import { createContext, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export const MainContext = createContext({});

function App() {

  const [items, setItems] = useState([]);
  
  return (
    <div className="app">
      <MainContext.Provider value={{
        items, setItems
      }}>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
      </MainContext.Provider>
  </div>
  )

}

export default App;


