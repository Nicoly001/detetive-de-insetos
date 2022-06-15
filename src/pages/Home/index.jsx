import '../../App.css'
import './styles.css'
import '../../index.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { IoIosPlay } from "react-icons/io";
import { Link } from 'react-router-dom';

function Home() {

    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    /*function handleSubmit(event) {
        alert('Um nome foi enviado: ' + value);
        event.preventDefault();
    }*/

    return (
        <div className="container">
            <div className="welcome">
                <div className="center">
                    <div className="center marginTop title">
                        <h2>DETETIVE DE INSETOS</h2>
                        <img style={{ height: 100 }} src={require('../../assets/images/lupaComInseto.png')} />
                    </div>
                   
                    <div className="center">
                        <div className="marginTop subtitle">
                            <h5>Vamos testar seu conhecimento sobre ordem, família e nome científico dos insetos que causam danos em diversas culturas de importância agrícola</h5>
                        </div>
                    </div>
                </div>
                <div className="marginTop">
                    <input className="inputHome" placeholder="Digite seu nome" type="text" value={value} onChange={handleChange} />
                </div>
                <div className="marginTop">
                    <Link to="/perguntas" state={{ nome: value }}>
                        <Button variant="success" size="lg">
                            <div className="buttonIcon">
                                <IoIosPlay size={28} /> JOGAR
                            </div>
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Home;
