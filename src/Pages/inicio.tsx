import Carousel from '../Components/Carousel';
import Card from '../Components/Card';
import hams1 from '../assets/image/hamsSinfondo1.png'
import hams2 from '../assets/image/2hamsSinFondo2.png'
import '../Style/inicio.css'
export const Inicio =()=>{
    return(
        <>
        <Carousel></Carousel>
        <div style={{display:'flex'}}>
        <Card
        uniqueClassName="contindiHams1"
        image={hams1}
        title="no se aún"
        />
        <Card
        uniqueClassName="contindiHams2"
        image={hams2}
        title="no se aún"
        />
        </div>

          <h1>HOLA SOY LA PAGINA DE INICIO</h1>
        </>
      
    );
}