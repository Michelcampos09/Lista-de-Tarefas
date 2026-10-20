import { useState } from "react";
import ListaDeTarefas from "./components/ListaDeTarefas";
function Login({ aoLogar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const fazerLogin = (e) => {
    e.preventDefault();
    if (email && senha) {
      aoLogar();
    } else {
      alert("Preencha o email e senha!");
    }
  };
  return (
    <div className="card">
      <div className="email">
        <span>Email:</span>
        <input
          type="email"
          placeholder="Digite aqui seu e-mail:"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="senha">
        <span>Senha:</span>
        <input
          type="text"
          placeholder="Digite aqui sua senha:"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
export default Login;
