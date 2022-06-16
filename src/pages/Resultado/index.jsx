import '../../App.css'
import '../../index.css'
import './styles.css'
import { Button } from 'react-bootstrap';
import { IoIosPlay } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function Resultado() {
    const location = useLocation();

    return (
        <div className="container">
            <div className="welcome ">
                <div className="center">
                    <div className="marginTop resultado">
                        <div>
                            <h3>{location.state.nome}</h3>
                            <h2>Você acertou {location.state.acertou} de 10 questões!</h2>
                        </div>
                    </div>
                </div>
                <div className="marginTop">
                    <Link to="detetive-de-insetos/perguntas">
                        <Button variant="success" size="lg">
                            <div className="buttonIcon">
                                <IoIosPlay size={28} /> JOGAR NOVAMENTE
                            </div>
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Resultado;
