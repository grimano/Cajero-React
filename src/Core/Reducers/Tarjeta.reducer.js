import { Cargando, Error, ValidarTarjeta, ValidarClave } from '../Types/Tarjeta.type';
const INITIAL_STATE = {
    Error: '',
    Cargando: false,
    ValidarTarjeta: false,
    ValidarClave: false,
    idTarjeta: '',
    tarjetaBloqueada: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Error:
            return {
                ...state,
                Error: action.Mensaje,
                Cargando: false,
                tarjetaBloqueada: action.payload.id
            }
        case Cargando:
            return {
                ...state,
                Error: '',
                Cargando: true
            }
        case ValidarTarjeta:
            return {
                ...state,
                Error: '',
                Cargando: false,
                ValidarTarjeta: true,
                idTarjeta: action.payload.id
            }
        case ValidarClave:
            return {
                ...state,
                Error: '',
                Cargando: false,
                tarjetaBloqueada: action.payload.id
            }
        default:
            return state;
    }
}