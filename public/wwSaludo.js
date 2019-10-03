/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
    // Calcula y envía de regreso la respuesta a la interfaz gráfica.
    // @ts-ignore
    var division=evt.data.numero1/evt.data.numero2;
    postMessage(`La division del número ${evt.data.numero1} y ${evt.data.numero2} es : `+division);
  };
  