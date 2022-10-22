import { Component } from "react";
import ContactoF from "./contactoF";
import { PropTypes } from "prop-types";

class Contacto extends Component {
  nombre;
  apellido;
  email;

  constructor(nombre, apellido, email) {
    super();
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.state = {
      conectado: true,
      cont: 0,
    };
    this.conectar = this.conectar.bind(this);
    this.desconectar = this.desconectar.bind(this);
  }

  conectar = () => {
    this.setState((state) => {
      return {conectado: state.conectado = true}
    });
  }


desconectar = () => {
  this.setState((state) => {
    return {conectado: state.conectado = false}
  });
}
  render() {
    const contact = new Contacto("Leo", "pepe", "pepe@hotmail.com");
    return (
      <div>
        <button onClick={this.conectar}>Conectar</button>
        <button onClick={this.desconectar}>Desconectar</button>
        <ContactoF
          contacto={contact}
          conectado={this.state.conectado}
        ></ContactoF>
      </div>
    );
  }
}

Contacto.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default Contacto;
