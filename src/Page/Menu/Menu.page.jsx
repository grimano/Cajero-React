import React from 'react';
import { connect } from 'react-redux';
import * as TarjetaAction from '../../Core/Actions/Tarjeta.action';

class MenuPage extends React.Component{

    retiro = (e) => {
        this.props.history.push('/Retiro');
    }
    
    balance = async (e) => {
        const { validarBalance } = this.props;
        const { idTarjeta } = this.props.TarjetaReducer; 

        await validarBalance(idTarjeta);
        const { TarjetaReducer } = this.props;
        
        if(TarjetaReducer.Error!==''){
            this.props.history.push('/Error',{mensaje: TarjetaReducer.Error});
        }else{
            this.props.history.push('/Balance');
        }
    }
    salir = (e) => {
        this.props.history.push('/');
    }

    render()
    {
        return (
            <div className="d-flex align-items-center justify-content-center" >
                <div className="calculator card">
                    <br></br>
                    <h5>Operaciones</h5>
                    <hr></hr>
                    <div className="calculator-keys">
                        <button type="button" className="all-clear function btn btn-danger btn-sm" value="R" onClick={this.salir}>Salir</button>
                        <button type="button" className="all-clear function btn btn-primary btn-sm" value="B" onClick={this.balance}>Balance</button>
                        <button type="button" className="all-clear function btn btn-success btn-sm" value="R" onClick={this.retiro}>Retiro</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(MenuPage);