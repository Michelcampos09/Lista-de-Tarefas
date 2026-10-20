import { useState } from "react";

function ItensLista({ tarefas }) {
  return (
    <ul>
      {tarefas.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ItensLista;
