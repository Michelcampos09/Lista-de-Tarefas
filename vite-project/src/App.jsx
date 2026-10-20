import Dashboard from "./pages/Dashboard";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
    const [logado, setLogado] = useState(false)
  return(
    <>
    {logado ? (<Dashboard/>) }
    </>
  )
}
export default App;
