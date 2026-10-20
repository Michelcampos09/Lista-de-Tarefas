function ItensLista({ tarefas }) {
  if (tarefas.length === 0) {
    return <p className="lista-vazia">Suas tarefas adicionadas aparecerão aqui.</p>;
  }

  return (
    <ul className="itens-tarefas">
      {tarefas.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ItensLista;
