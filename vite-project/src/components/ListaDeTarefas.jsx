import { useState } from "react";

function ListaDeTarefas({ onAdicionar }) {
  const [tarefa, setTarefa] = useState("");

  function enviarTarefa(event) {
    event.preventDefault();
    if (!tarefa.trim()) return;

    onAdicionar(tarefa.trim());
    setTarefa("");
  }

  return (
    <form className="formulario-tarefa" onSubmit={enviarTarefa}>
      <label htmlFor="nova-tarefa">Nome da tarefa</label>
      <input
        id="nova-tarefa"
        type="text"
        placeholder="Ex.: Estudar para a prova"
        value={tarefa}
        onChange={(event) => {
          setTarefa(event.target.value);
        }}
      />
      <button className="botao-adicionar" type="submit">
        Adicionar tarefa
      </button>
    </form>
  );
}

export default ListaDeTarefas;
