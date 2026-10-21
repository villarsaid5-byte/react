import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className="col text-center">
      <p className="lead">Contador</p>
      <button className="btn btn-primary btn-sm mx-2" onClick={() => setContador((contador - 1) < 0 ? 10 : contador - 1)}>-</button>
      <span>{contador}</span>
      <button className="btn btn-primary btn-sm mx-2" onClick={() => setContador((contador + 1) > 10 ? 0 : contador + 1)}>+</button>
    </div>
  )
}

export default Contador;