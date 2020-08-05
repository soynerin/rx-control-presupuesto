import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [gastos, guardarGasto] = useState([]);
  const [gasto, agregarNuevoGasto] = useState({});
  const [gastoCreado, isGastoCreado] = useState(false);

  useEffect(() => {
    if (gastoCreado) {      
        guardarGasto([
          ...gastos,
          gasto
        ])    

        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);
    }

    isGastoCreado(false);

  }, [gasto, gastoCreado, presupuesto, restante, gastos])

  return (
    <div className="container">
      <header>
        <h1> Gasto semanal</h1>

        <div className="contenido-principal contenido">

        {
            !presupuesto
            ? 
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
              />              
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                    isGastoCreado={isGastoCreado}
                  />
                </div>
    
                <div className="one-half column">
                  <Listado gastos={gastos}/>

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>              
            )
        }          
        </div>


      </header>
    </div>
  );
}

export default App;
