import { useEffect, useState } from "react";
import { connect } from "react-redux";

const AppGuardia = ({ children, TarjetaReducer }) => {
  const [hayCliente, setHayCliente] = useState(false);

   useEffect(() => {
     const { ValidarTarjeta } = TarjetaReducer;
     setHayCliente(ValidarTarjeta);
   }, [TarjetaReducer]);

  return children({ hayCliente });
};

const mapStateToProps = ({ TarjetaReducer }) => {
  return {TarjetaReducer};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(AppGuardia);
