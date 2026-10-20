import { useState } from "react";
import ItensLista from "./ItensLista";
function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const enviarTarefa = () => {
    if (!tarefa.trim()) return;
    setTarefas([...tarefas, tarefa]);
    setTarefa("");
  };
  const enterKey = (e) => {
    if (e.key == "Enter") {
      enviarTarefa();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Digite aqui uma tarefa:"
        value={tarefa}
        onKeyDown={enterKey}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
      />
      <button onClick={enviarTarefa}>Enviar tarefa</button>
      <ItensLista tarefas={tarefas} />
    </div>
  );
}
export default ListaDeTarefas;
