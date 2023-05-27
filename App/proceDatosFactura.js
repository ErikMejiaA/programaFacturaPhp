//----variable globales--------------
// para almacenar los datos del cliente y del producto registrados en el formulario
let datosCliente = [];
let datosProducto = [];
let subtotal = 0.0;
//----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //van las funciones a ejecutar
    guardarCliente(); 
    guardarProducto();
    verFacturaClienteProducto();
    guardarDatos();

});

//------guardamos los datos del cliente-------------------------------------------------
const guardarCliente = () => {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const formDatoCliente = document.querySelector('#headerCliente');
        let clienteDatos = Object.fromEntries(new FormData(formDatoCliente).entries());
        datosCliente.push(clienteDatos);
        console.log(datosCliente);

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
        console.log(datosProducto)

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
        crearFilas.className = "tablacliente";
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
        crearFilas.className = "tablaProducto";
        crearFilas.innerHTML = /* html */ `
            <td>${productoDato.nombreProducto}</td>
            <td>${formatoMoneda(productoDato.valorUnitario*1)}</td>
            <td>${productoDato.cantidad}</td>
            <td>${formatoMoneda(productoDato.total*1)}</td>
        `;
        cuerpoTablaProducto.appendChild(crearFilas);
        subtotal += parseFloat(productoDato.total); //acumulamos el total de las compras
        //console.log(subtotal);
        mostrarPreciosFactura(subtotal);
    });
}

const mostrarPreciosFactura = (subtotal) => {
    //calculamos los datos de la factura y los mostramos
    document.querySelector('#subtotal').innerHTML = formatoMoneda(subtotal*1);
    document.querySelector('#iva').innerHTML = formatoMoneda((subtotal * 0.19));
    document.querySelector('#valorTotal').innerHTML = formatoMoneda((subtotal * 1.19));
}

//-----funcion para darle formato  a los precios-----------
const formatoMoneda = (precio) => {
    return precio.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

//------ver Factura cliente Productos ver y ocultar datos y factura
function verFacturaClienteProducto() {
    document.querySelector(".REGRESAR").addEventListener('click', (e) => {
        console.log(datosProducto)
        const ocultarResumeFactura = document.querySelector('#resumenFactura');
        ocultarResumeFactura.style.display = "none";
        const verFactura = document.querySelector('#facturaCompra');
        verFactura.style.display = "block";
        
        //---reiniciamos los valores almacenados----
        document.querySelector(".tablacliente").remove();
        document.querySelectorAll(".tablaProducto").forEach((filaProducto) => {
            filaProducto.remove();
        });

        document.querySelector('#mensaje1').innerHTML = '';
        document.querySelector('#subtotal').innerHTML = '';
        document.querySelector('#iva').innerHTML = '';
        document.querySelector('#valorTotal').innerHTML = '';
        datosCliente = [];
        datosProducto = [];
        subtotal = 0.0;
    });
}

//--------guardar datos de la factura------------
const guardarDatos = () => {
    document.querySelector(".guardarFactura").addEventListener('click', (e) => {
        enviarDatosForm();
        document.querySelector('#mensaje1').innerHTML = "Los datos fueron guardados correctamente";
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