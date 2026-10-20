function ItensLista({ tarefas, aoAlternar, aoRemover }) {
  if (tarefas.length === 0) {
    return (
      <p className="lista-vazia">
        Nada por aqui ainda. Que tal anotar a primeira tarefa do dia?
      </p>
    );
  }

  return (
    <ul className="itens-tarefas">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={tarefa.feita ? "item feita" : "item"}>
          <button
            type="button"
            className="botao-checar"
            onClick={() => aoAlternar(tarefa.id)}
            aria-pressed={tarefa.feita}
            aria-label={tarefa.feita ? "Desmarcar tarefa" : "Marcar como feita"}
          >
            {tarefa.feita ? "✓" : ""}
          </button>
          <span className="texto-tarefa">{tarefa.texto}</span>
          <button
            type="button"
            className="botao-remover"
            onClick={() => aoRemover(tarefa.id)}
            aria-label={`Remover tarefa ${tarefa.texto}`}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ItensLista;
