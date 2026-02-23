import "./tema-formulario.estilos.css";

export function TemaEvento({ itens, ...rest }) {
  return (
    <select {...rest} className="temaEvento" defaultValue="">
      <option value="">selecione uma opção</option>
      {itens.map(function (item) {
        return (
          <option key={item.id} value={item.id}>
            {item.nome}
          </option>
        );
      })}
    </select>
  );
}
