import { useState } from "react";
import ListaDeTarefas from "../components/ListaDeTarefas";
import ItensLista from "../components/ItensLista";
import Logo from "../components/Logo";

function Dashboard({ aoSair }) {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    setTarefas((tarefasAtuais) => [...tarefasAtuais, texto]);
  }

  return (
    <main className="pagina-dashboard">
      <header className="cabecalho-dashboard">
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <Logo size={52} />
          <div>
            <p className="subtitulo-dashboard">ORGANIZAÇÃO PESSOAL</p>
            <h1>Minhas tarefas</h1>
            <p className="descricao-dashboard">
              Organize suas atividades e acompanhe o que precisa fazer.
            </p>
          </div>
        </div>
        <button className="botao-sair" type="button" onClick={aoSair}>
          Sair
        </button>
      </header>

      <div className="conteudo-dashboard">
        <section className="card-tarefas card-adicionar" aria-labelledby="titulo-adicionar">
          <h2 id="titulo-adicionar">Adicionar tarefa</h2>
          <p>Inclua uma atividade na sua lista.</p>
          <ListaDeTarefas onAdicionar={adicionarTarefa} />
        </section>

        <section className="card-tarefas card-lista" aria-labelledby="titulo-lista">
          <div className="cabecalho-lista">
            <div>
              <h2 id="titulo-lista">Sua lista</h2>
              <p>Atividades adicionadas</p>
            </div>
            <span className="contador-tarefas" aria-label={`${tarefas.length} tarefas`}>
              {tarefas.length}
            </span>
          </div>
          <ItensLista tarefas={tarefas} />
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
