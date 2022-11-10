
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  return (
    <>
   
    <Navbar/>
    <div className="App">
    <header className="App-header">
    <h1 className="title">Bienvenido a MatchPet</h1> 
    <Carousel />
    <div id='apartado1'> 
    <p> MatchPet surgió como una idea para contribuir con la problematica
        que hoy en dia se volvio tan común, la cual es el avandono de animales.
        Con esta app web podrás poner en adopción mascotas que buscan familia 
        o podrás tu adoptar mascotas que necesitan amor y felicidad.        
      </p>    
      
      <p>
        Además nuestra app web tiene una funcion que te permitirá poner alertas
        para cuando tu mascota este perdida y asi todos los que estan cerca de ti 
        podran ayudarte a encontrarla.
      </p>

      <p>
         Finalmente contamos con un chat el cual puedes utilizar para contactarte
         con la persona que encontro tu mascota (en el caso de que se extraviara)
         o bien contactarse con algún usuario que quisiera adoptar la mascota que 
         pusiste en adopcion o viceversa.
      </p>
      </div>  
    </header>
    
    </div>
    
    </>
   
  );
}

export default App;
