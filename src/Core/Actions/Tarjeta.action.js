import { Cargando, Error, ValidarClave, ValidarTarjeta } from '../Types/Tarjeta.type';
import { UrlApi } from '../Enviroments.js';
import { post } from 'jquery';

export const validartarjeta = (idtarjeta) => async (dispatch) => {
    try {
        dispatch({
            type: Cargando
        });

        idtarjeta = idtarjeta.replaceAll('-', '');
        const resp = await fetch(`${UrlApi}api/Tarjeta/${idtarjeta}`);
        const bodyJson = await resp.json();

        if (bodyJson.mensaje == "") {
            dispatch({
                type: ValidarTarjeta,
                payload: { id: idtarjeta }
            });
        }
        else {
            dispatch({
                type: Error,
                Mensaje: bodyJson.mensaje,
                payload: { id: (bodyJson.obj.Bloqueada > 0) ? true : false }
            });
        }

    } catch (error) {
        dispatch({
            type: Error,
            Mensaje: error.message
        });
    }

}

export const validarclave = (idtarjeta, clave) => async (dispatch) => {
    try {
        dispatch({
            type: Cargando
        });
        var data = { numero: idtarjeta, clave: clave };

        const peticion =  {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        };

        const respuesta = await fetch(`${UrlApi}api/Tarjeta`, peticion);
        const bodyJson = await respuesta.json();
        
        if (bodyJson.mensaje !== "") {
            dispatch({
                type: Error,
                Mensaje: bodyJson.mensaje,
                payload: { id: (bodyJson.obj.Bloqueada > 0) ? true : false }
            });
        } else {
            dispatch({
                type: ValidarClave,
                payload: { id: false }
            });
        }

    } catch (error) {
        dispatch({
            type: Error,
            Mensaje: error.message
        });
    }

}

export const validarBalance = (idtarjeta) => async (dispatch) => {
    try {
        dispatch({
            type: Cargando
        });

        var data = { numero: idtarjeta, clave: '' };

        const peticion =  {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        };

        const respuesta = await fetch(`${UrlApi}api/Movimiento`, peticion);
        const bodyJson = await respuesta.json();
        
        if (bodyJson.mensaje !== "") {
            dispatch({
                type: Error,
                Mensaje: bodyJson.mensaje,
                payload: { id: false }
            });
        }

    } catch (error) {
        dispatch({
            type: Error,
            Mensaje: error.message
        });
    }

}
