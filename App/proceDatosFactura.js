//----variable globales--------------
// para almacenar los datos del cliente y del producto registrados en el formulario
let datosCliente = [];
let datosProducto = [];
//----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //van las funciones a ejecutar
    guardarCliente(); 
    guardarProducto();
    verFacturaClienteProducto();

});

//------guardamos los datos del cliente-------------------------------------------------
const guardarCliente = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatoCliente = document.querySelector('#headerCliente');
        let clienteDatos = Object.fromEntries(new FormData(formDatoCliente).entries());
        datosCliente.push(clienteDatos);
        //console.log(datosCliente);

        //----listar los datos del cliente-----
        mostrarDatosClientes(datosCliente);

        e.preventDefault();
    });
}

//----------guardamos los datos del producto---------------------------------------------
const guardarProducto = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatosProducto = document.querySelectorAll(".detailProducto");
        formDatosProducto.forEach((formProducto) => {
            let productoDatos = Object.fromEntries(new FormData(formProducto).entries());
            datosProducto.push(productoDatos);
           
        });
        //console.log(datosProducto)

        //----listar los datos del cliente-----
        mostrarDatosProductos(datosProducto);

        e.preventDefault();
    });
}

//-----mostrar datos del cliente----------
const mostrarDatosClientes = (datosClientes) => {
    datosClientes.forEach(clienteDato => {
        const cuerpoTablaCliente = document.querySelector('#cuerpoTablaCliente');
        const crearFilas = document.createElement('tr');
        crearFilas.innerHTML = /* html */ `
            <td>${clienteDato.numFactura}</td>
            <td>${clienteDato.nombre}</td>
            <td>${clienteDato.numCedula}</td>
            <td>${clienteDato.fecha}</td>
        `;
        cuerpoTablaCliente.appendChild(crearFilas);
    });
}

//-----mostrar datos del producto----------
const mostrarDatosProductos = (datosProductos) => {
    datosProductos.forEach(productoDato => {
        const cuerpoTablaProducto = document.querySelector('#cuerpoTablaProducto');
        const crearFilas = document.createElement('tr');
        crearFilas.innerHTML = /* html */ `
            <td>${productoDato.nombreProducto}</td>
            <td>${productoDato.valorUnitario}</td>
            <td>${productoDato.cantidad}</td>
            <td>${productoDato.total}</td>
        `;
        cuerpoTablaProducto.appendChild(crearFilas);
    });
}

//------ver Factura cliente Productos
function verFacturaClienteProducto() {
    document.querySelector(".REGRESAR").addEventListener('click', (e) => {
        const ocultarResumeFactura = document.querySelector('#resumenFactura');
        ocultarResumeFactura.style.display = "none";
        const verFactura = document.querySelector('#facturaCompra');
        verFactura.style.display = "block";

        //---reiniciamos los valores almacenados----
        datosCliente = [];
        datosProducto = [];
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

//mostrar los datos que vienen de php
const mostarDatosFactura = (respuesta) => {
    //document.querySelector('#result').innerHTML = respuesta;
    //reiniciamos los valores de los array despues de envia los datos a php
    datosCliente = [];
    datosProducto = [];
}