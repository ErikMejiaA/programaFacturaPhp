//----variable globales--------------
// para almacenar los datos del cliente y del producto registrados en el formulario
let datosCliente = [];
let datosProducto = [];
//----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //van las funciones a ejecutar
    guardarCliente(); 
    guardarProducto();

});

const guardarCliente = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatoCliente = document.querySelector('#headerCliente');
        let clienteDatos = Object.fromEntries(new FormData(formDatoCliente).entries());
        datosCliente.push(clienteDatos);
        console.log(datosCliente);

        e.preventDefault();
    });
}

const guardarProducto = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatosProducto = document.querySelectorAll('#detailProducto');
        formDatosProducto.forEach((itemProducto) => {
            let productoDatos = Object.fromEntries(new FormData(itemProducto).entries());
            datosProducto.push(productoDatos);
        });
        console.log(datosProducto);

        e.preventDefault();
    });
}