import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [logado, setLogado] = useState(false);
  return (
    <div>
      {logado ? (
        <Dashboard aoSair={() => setLogado(false)} />
      ) : (
        <Login aoLogar={() => setLogado(true)} />
      )}
    </div>
  );
}

export default App;
