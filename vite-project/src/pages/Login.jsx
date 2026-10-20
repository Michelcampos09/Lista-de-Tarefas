import { useState } from "react";
import Logo from "../components/Logo";

function Login({ aoLogar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const fazerLogin = (e) => {
    e.preventDefault();
    if (email.trim() && senha) {
      aoLogar();
    } else {
      alert("Preencha o email e senha!");
    }
  };
  return (
    <main className="pagina-login">
      <section className="card" aria-labelledby="titulo-login">
        <header className="cabecalho-login">
          <div style={{ marginBottom: "16px" }}>
            <Logo size={48} />
          </div>
          <h1 id="titulo-login">Login</h1>
          <p>Acesse sua lista de tarefas.</p>
        </header>
        <form className="formulario-login" onSubmit={fazerLogin}>
          <div className="email">
            <label htmlFor="email-login">Email</label>
            <input
              id="email-login"
              type="email"
              placeholder="seuemail@exemplo.com"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="senha">
            <label htmlFor="senha-login">Senha</label>
            <input
              id="senha-login"
              type="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <button className="botao-login" type="submit">
            Fazer login
          </button>
        </form>
      </section>
    </main>
  );
}
export default Login;
