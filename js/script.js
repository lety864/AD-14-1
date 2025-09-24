//Modifica div para elert
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
const appendAlert1 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper)
}

//Alerta de envio de formulario 
const alertTrigger1 = document.getElementById('liveAlertBtn2')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', (event) => { 
    event.preventDefault(); 
    appendAlert1('Se envio el formulario', 'success');
  })
}