import React from 'react';
import './Pin.page.css';
import { connect } from 'react-redux';
import * as TarjetaAction from '../../Core/Actions/Tarjeta.action';

class PinPage extends React.Component{
    state = {
        Pin: '',
        aceptarActivo: true
    };

    componentDidMount(){
        this.setState({
            Pin: '',
            aceptarActivo: true
        })
    }

    eventoBoton = (e) => {
        let valor = this.state.Pin + e.target.value
        if(valor.length < 5){
            this.setState({
                Pin : valor,
                aceptarActivo: true
            });
        }   
        if(valor.length === 4){
            this.setState({
                aceptarActivo: false
            });
        }
    }

    corregir = (e) => {
        this.setState({
            Pin: '',
            aceptarActivo: true
        });
    }

    atras = (e) => {
        this.props.history.push('/');
    }

    aceptar = async (e) => {
        const { validarclave } = this.props;
        const { idTarjeta } = this.props.TarjetaReducer; 

        await validarclave(idTarjeta, this.state.Pin);
        const { TarjetaReducer } = this.props;
        
        console.log(TarjetaReducer);
        if(TarjetaReducer.Error!==''){
            if(TarjetaReducer.tarjetaBloqueada){
                this.props.history.push('/Error',{mensaje: TarjetaReducer.Error});
            }else{
                alert(TarjetaReducer.Error);
            }
        }else{
            this.props.history.push('/Menu');
        }
    }
    
    render()
    {
        return (
            <div className="d-flex align-items-center justify-content-center" >
                <div className="calculator card">
                    <h5>Ingrese su clave de 4 digitos</h5>
                    <input type="password" id='txtPin' value={this.state.Pin} className="calculator-screen z-depth-1" disabled />
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
                        
                        <button type="button" className="all-clear function btn btn-danger btn-sm" value="S" onClick={this.atras}>S</button>
                        <button type="button" className="all-clear function btn btn-warning btn-sm" value="C" onClick={this.corregir}>C</button>

                        <button type="button" className="equal-sign operator btn btn-success" value="Aceptar" disabled={this.state.aceptarActivo} onClick={this.aceptar}>✔</button>

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({
    TarjetaReducer
}) => {
    return {TarjetaReducer};
};

const mapDispatchToProps= {
 ...TarjetaAction
};

export default connect(mapStateToProps,mapDispatchToProps)(PinPage);