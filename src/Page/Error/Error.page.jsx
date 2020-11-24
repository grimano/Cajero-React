import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component{
    state = {
        errormensaje: this.props.location.state.mensaje
    };

    render()
    {
        return (
            <div className="" id="exampleModalCenter" aria-labelledby="exampleModalCenterTitle" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">Aviso</h5>
                </div>
                <div className="modal-body">
                    {this.state.errormensaje}
                </div>
                <div className="modal-footer">
                    <Link to="/" from="Error">
                        <button type="button" className="btn btn-primary btn-sm">Atrás</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ErrorPage;   