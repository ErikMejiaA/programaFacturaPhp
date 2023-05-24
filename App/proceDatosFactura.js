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

//------guardamos los datos del cliente-------------------------------------------------
const guardarCliente = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatoCliente = document.querySelector('#headerCliente');
        let clienteDatos = Object.fromEntries(new FormData(formDatoCliente).entries());
        datosCliente.push(clienteDatos);
        //console.log(datosCliente);

        e.preventDefault();
    });
}

//----------guardamos los datos del producto---------------------------------------------
const guardarProducto = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatosProducto = document.querySelectorAll(".detailProducto");
        formDatosProducto.forEach((itemProducto) => {
            let productoDatos = Object.fromEntries(new FormData(itemProducto).entries());
            datosProducto.push(productoDatos);
        });
        //console.log(datosProducto);
        enviarDatosForm();

        e.preventDefault();
    });
}

//----cabecera del metodo------------------------ 
let config = {
    headers : new Headers({
        "Content-Type" : "application/json"
    }),
}

//-----metodo (POST) para enviar datos a PHP
async function postFactura(datos) {
    config.method = "POST";
    config.body = JSON.stringify(datos);
    let res = await ( await fetch("scripts/save-datos.php", config)).json();
    //console.log(res);
    return res;
}

function enviarDatosForm() {
    let data = {
        cliente : datosCliente,
        producto : datosProducto
    };

    postFactura(data)
        .then((res) => {
            console.log(res)
            mostarDatosFactura(JSON.stringify(res));
        })
}

const mostarDatosFactura = (respuesta) => {
    document.querySelector('#result').innerHTML = respuesta;
    //reiniciamos los valores de los array despues de envia los datos a php
    datosCliente = [];
    datosProducto = [];
}