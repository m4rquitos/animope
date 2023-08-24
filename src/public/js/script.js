function enviarFormulario() {
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const direccionInput = document.getElementById('direccion');
    const terminosInput = document.getElementById('terminos');
  
    const nombre = nombreInput.value;
    const correo = correoInput.value;
    const telefono = telefonoInput.value;
    const direccion = direccionInput.value;
    const terminos = terminosInput.checked;
  
    if (nombre && correo && telefono && direccion && terminos) {
      const modalBody = document.getElementById('modalBody');
      modalBody.innerHTML = `
          <h5>Gracias por comunicarte con nosotros.</h5>
          <h6>Pronto alguien de nuestro equipo se pondrá en contacto contigo.</h6>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Dirección:</strong> ${direccion}</p>
      `;
  
      // Restablece los valores de los campos a cadena vacía
      nombreInput.value = '';
      correoInput.value = '';
      telefonoInput.value = '';
      direccionInput.value = '';
      terminosInput.checked = false;
  
      const datosModal = new bootstrap.Modal(document.getElementById('datosModal'));
      datosModal.show();
    }
  }