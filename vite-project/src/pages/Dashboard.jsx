import { useState } from "react";
import ListaDeTarefas from "../components/ListaDeTarefas";
import ItensLista from "../components/ItensLista";
import Logo from "../components/Logo";

function Dashboard({ aoSair }) {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(texto) {
    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      { id: Date.now() + Math.random(), texto, feita: false },
    ]);
  }

  function alternarTarefa(id) {
    setTarefas((atuais) =>
      atuais.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );
  }

  function removerTarefa(id) {
    setTarefas((atuais) => atuais.filter((t) => t.id !== id));
  }

  const concluidas = tarefas.filter((t) => t.feita).length;

  return (
    <main className="pagina-dashboard">
      <header className="cabecalho-dashboard">
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <Logo size={52} />
          <div>
            <p className="subtitulo-dashboard">Seu caderninho de afazeres</p>
            <h1>Minhas tarefas</h1>
            <p className="descricao-dashboard">
              Anote o que precisa fazer hoje, marque o que já resolveu e tire da lista o que não importa mais.
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
          <p>Escreva em poucas palavras o que você quer lembrar de fazer.</p>
          <ListaDeTarefas onAdicionar={adicionarTarefa} />
        </section>

        <section className="card-tarefas card-lista" aria-labelledby="titulo-lista">
          <div className="cabecalho-lista">
            <div>
              <h2 id="titulo-lista">A fazer hoje</h2>
              <p>
                {concluidas} de {tarefas.length} concluídas
              </p>
            </div>
            <span className="contador-tarefas" aria-label={`${tarefas.length} tarefas`}>
              {tarefas.length}
            </span>
          </div>
          <ItensLista
            tarefas={tarefas}
            aoAlternar={alternarTarefa}
            aoRemover={removerTarefa}
          />
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
