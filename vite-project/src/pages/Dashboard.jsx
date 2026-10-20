import ListaDeTarefas from "./components/ListaDeTarefas";
function Dashboard({ aoSair }) {
  return (
    <div className="geral">
      <div className="inputTarefa">
        <ListaDeTarefas />
      </div>
      <div className="listaTarefa"></div>
    </div>
  );
}
export default Dashboard;
