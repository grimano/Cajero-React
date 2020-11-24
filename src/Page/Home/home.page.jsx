import React from 'react';
import './home.page.css';
import { connect } from 'react-redux';
import * as TarjetaAction from '../../Core/Actions/Tarjeta.action';

class HomePage extends React.Component {

    state = {
        NumeroTarjeta: '',
        aceptarActivo: true
    };

    componentDidMount(){
        this.setState({
            NumeroTarjeta: '',
            aceptarActivo: true
        })
    }
    eventoBoton = (e) => {
        let valor = this.formatearValor(this.state.NumeroTarjeta + e.target.value)
        if(valor.length < 20){
            this.setState({
                NumeroTarjeta: valor
            });
        }   
        if(valor.length === 19){
            this.setState({
                aceptarActivo: false
            });
        }   
    }

    corregir = (e) => {
        this.setState({
            NumeroTarjeta: '',
            aceptarActivo: true
        });
    }

    aceptar = async(e) => {
        // this.props.validartarjeta('');
        // this.state.NumeroTarjeta;
        // this.props.validartarjeta(this.state.NumeroTarjeta);
        const { validartarjeta } = this.props;
        const { NumeroTarjeta } = this.state; 

        await validartarjeta(NumeroTarjeta);
        const { TarjetaReducer } = this.props;

        if(TarjetaReducer.Error!=''){
            this.props.history.push('/Error',{mensaje: TarjetaReducer.Error});
        }else{
            this.props.history.push('/Pin');
        }
    }

    formatearValor = (value) => {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g)
        var match = matches && matches[0] || ''
        var parts = []
    
        for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
    
        if (parts.length) {
            return parts.join('-')
        } else {
            return value
        }
    }
    
    render() {
        return (

            <div className="d-flex align-items-center justify-content-center" >
                <div className="calculator card">
                    <h5>Por favor ingrese los 16 digitos de su tarjeta</h5>
                    <input type="text" id='txtNumeroTarjeta' value={this.state.NumeroTarjeta} placeholder="0000-0000-0000-0000" className="calculator-screen z-depth-1" disabled />
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
                        <div></div>
                        <button type="button" className="all-clear function btn btn-warning btn-sm" value="c" onClick={this.corregir}>C</button>

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

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
