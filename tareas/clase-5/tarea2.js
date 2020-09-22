const enviar = document.querySelector('#enviar');
const contenidoh1 = document.querySelector('h1');

enviar.onclick = function(){
    const nombre = document.querySelector('#nombre').value;
    const segundoNombre = document.querySelector('#segundo-nombre').value;
    const apellidos = document.querySelector('#apellidos').value;
    nombreDeUsuario = nombre + ' ' + segundoNombre + ' ' + apellidos;
    contenidoh1.textContent = 'Bienvenido, ' + nombreDeUsuario + '!';
    return false;
}