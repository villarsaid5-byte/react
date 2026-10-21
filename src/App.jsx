import './assets/css/main.css';
import img01 from "./assets/img/img01.jpg";
import img02 from "./assets/img/img02.jpg";
import img03 from "./assets/img/img03.jpg";
import img04 from "./assets/img/img04.jpg";
import img05 from "./assets/img/img05.jpg";
import Imagen from './components/Imagen';

const App = () => {
  const galeria = [
    {
      id: 1,
      url: img01,
      titulo: "imagen 1",
      color: "#0a5cd0",
      text: "#dcf007",
      descripcion: " "
    },
    {
      id: 2,
      url: img02,
      titulo: "imagen 2",
      color: "#ff8c00",
      text: "#ffffff",
      descripcion: " "
    },
    {
      id: 3,
      url: img03,
      titulo: "imagen 3",
      color: "#1c3d5a",
      text: "#00d2ff",
      descripcion: " "
    },
    {
      id: 4,
      url: img04,
      titulo: "imagen 4",
      color: "#4b0082",
      text: "#adff2f",
      descripcion: " "
    },
    {
      id: 5,
      url: img05,
      titulo: "imagen 5",
      color: "#2e8b57",
      text: "#ffff00",
      descripcion: " "
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {galeria.map((item) => (
          <Imagen 
            key={item.id} 
            img={item.url} 
            color={item.color} 
            titulo={item.titulo} 
            text={item.text} 
            descripcion={item.descripcion} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;