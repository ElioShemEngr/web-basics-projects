import './App.css';
import Testimonio from './components/Testimonio.jsx'
import jd from './data-testimonio.json';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre= {jd[1].nombre}
        pais= {jd[1].pais}
        image= {jd[1].image}
        cargo= {jd[1].cargo}
        empresa= {jd[1].empresa}
        testimonio= {jd[1].testimonio} />
        <Testimonio
        nombre= {jd[2].nombre}
        pais= {jd[2].pais}
        image= {jd[2].image}
        cargo= {jd[2].cargo}
        empresa= {jd[2].empresa}
        testimonio= {jd[2].testimonio} />
        <Testimonio
        nombre= {jd[3].nombre}
        pais= {jd[3].pais}
        image= {jd[3].image}
        cargo= {jd[3].cargo}
        empresa= {jd[3].empresa}
        testimonio= {jd[3].testimonio} />
      </div>
      
    </div>
  );
}

export default App;

