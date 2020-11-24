import { Alert } from 'bootstrap';
import React from 'react';

class RetiroPage extends React.Component{

    state = {
        importe: '',
        aceptarActivo: true
    };

    componentDidMount(){
        this.setState({
            importe: '',
            aceptarActivo: true
        })
    }

    corregir = (e) => {
        this.setState({
            importe: '',
            aceptarActivo: true
        });
    }

    salir = (e) => {
        //Luego que haga todo sale
        this.props.history.push('/');
    }

    aceptar = (e) => {
        let valor = this.state.importe;
        if(valor <= 0){
            this.setState({
                importe: ''
            });
            alert('El monto seleccionado debe ser mayor a 0.')
            return false;
        }
        //Luego que haga todo sale
        //this.props.history.push('/');
    }

    eventoBoton = (e) => {
        let valor = this.state.importe + e.target.value
        if(valor.length < 20){
            this.setState({
                importe: valor
            });
        }   
        if(valor.length >= 1){
            this.setState({
                aceptarActivo: false
            });
        }   
    }

    render()
    {
        return (
            <div className="d-flex align-items-center justify-content-center" >
                <div className="calculator card">
                    <h5>Indique el importe a retirar</h5>
                    <input type="text" id='txtImporte' value={this.state.importe} className="calculator-screen z-depth-1" disabled />
                    <div className="calculator-keys">
                        <button type="button" value="7" className="btn btn-light waves-effect" onClick={this.eventoBoton}>7</button>
                        <button type="button" value="8" className="btn btn-light waves-effect" onClick={this.eventoBoton}>8</button>
                        <button type="button" value="9" className="btn btn-light waves-effect" onClick={this.eventoBoton}>9</button>


                        <button type="button" value="4" className="btn btn-light waves-effect" onClick={this.eventoBoton}>4</button>
                        <button type="button" value="5" className="btn btn-light waves-effect" onClick={this.eventoBoton}>5</button>
                        <button type="button" value="6" className="btn btn-light waves-effect" onClick={this.eventoBoton}>6</button>


                        <button type="button" value="1" className="btn btn-light waves-effect" onClick={this.eventoBoton}>1</button>
                        <button type="button" value="2" className="btn btn-light waves-effect" onClick={this.eventoBoton}>2</button>
                        <button type="button" value="3" className="btn btn-light waves-effect" onClick={this.eventoBoton}>3</button>


                        <button type="button" value="0" className="btn btn-light waves-effect" onClick={this.eventoBoton}>0</button>
                        <button type="button" className="all-clear function btn btn-danger btn-sm" value="R" onClick={this.salir}>S</button>
                        <button type="button" className="all-clear function btn btn-warning btn-sm" value="C" onClick={this.corregir}>C</button>

                        <button type="button" className="equal-sign operator btn btn-success" value="Aceptar" disabled={this.state.aceptarActivo} onClick={this.aceptar}>✔</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default RetiroPage;  