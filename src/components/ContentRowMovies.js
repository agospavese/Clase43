import React from "react"
import '../assets/css/app.css'
import PropTypes from "prop-types";

function ContentRowMovies(props) {
    const titulo = props.titulos
    const cifra = props.cifras
    const colorBorde = props.colorBordes
    const icono = props.iconos
    return (

<div className="row">


    {titulo.map((item, i)=><><div key={item + i} className="col-md-4 mb-4">
        <div className={colorBorde[i]}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra[i]}</div>
                    </div>
                    <div className="col-auto">
                        <i className={icono[i]}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    </>
    )} 

   
</div>
      
    )
}
 
ContentRowMovies.propTypes = {
    titulo: PropTypes.array.isRequired,
    icono: PropTypes.array.isRequired,
    cifra: PropTypes.array.isRequired,
    colorBorde: PropTypes.array.isRequired,
  };

ContentRowMovies.defaultProps = {
    titulo: "Ingrese un título",
    cifra: "Ingrese una cifra",
    colorBorde: "Ingrese un color de borde",
    icono: "Ingrese un ícono"
}


export default ContentRowMovies;
