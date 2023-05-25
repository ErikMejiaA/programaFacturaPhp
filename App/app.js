//--------variables globales-------------------------
let contarProducto = 0;
const formDatoCliente = document.querySelector('#headerCliente'); // form del cliente
//---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //funciones a ejecutar cunado se cargue el DOM
    agregarProducto();
    obtenerFechaActual();
    verListaClienteProducto();
    //verFacturaClienteProducto();
});

//name="producto${contarProducto}[]"

const agregarProducto = () => {
    document.querySelector(".agregarProducto").addEventListener('click', (e) => {
        contarProducto ++;
        let sumarProducto = document.querySelector(".sumarProducto");
        let productosHTML = document.createElement('div');
        productosHTML.className = "mt-2";
        productosHTML.innerHTML = /* html */ `
            <div class="card" id="eliminar">
                <div class="card-body">
                    <form class="detailProducto" id="${contarProducto}">
                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="nombreProducto" class="form-label ">Nombre del Producto:</label>
                                    <input type="text" class="form-control n" id="nombreProducto" name="nombreProducto"/> 
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="valorUnitario" class="form-label ">Valor Unitario:</label>
                                    <input type="number" class="form-control v" id="valorUnitario" name="valorUnitario" min="0"/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="cantidad" class="form-label ">cantidad:</label>
                                    <input type="number" class="form-control c" id="cantidad" name="cantidad" min="0" value="0" readonly/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="total" class="form-label t">Total:</label>
                                    <input type="number" class="form-control t" id="total" name="total" value="0" readonly/>
                                </div>
                            </div>
                            <div class="col-2 mt-2">
                                <div class="mb-3 mt-4">
                                    <button type="button" class="btn btn-success aumentar" id="${contarProducto}">+</button>
                                    <button type="button" class="btn btn-danger disminuir" id="${contarProducto}">-</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        `;
        sumarProducto.appendChild(productosHTML); 
        aumentarCantidadProducto();
        disminuirCantidadProducto();

        e.stopImmediatePropagation();
        e.preventDefault();
    });
}

//----para llenar la fecha dinamicamente con la fecha actual------------
const obtenerFechaActual = () => {
    for (let itemFrm of formDatoCliente) {
        if (itemFrm.id == 'fecha') {
            itemFrm.valueAsDate = new Date();

        }
    }
}

const aumentarCantidadProducto = () => {
    document.querySelectorAll(".aumentar").forEach((itemBoton) => {
        itemBoton.addEventListener('click', (e) => {
            const formDatosProducto = document.querySelectorAll(".detailProducto"); //form del producto
            formDatosProducto.forEach((frmProducto) => {
                if (frmProducto.id == e.target.id) {
                    console.log(frmProducto[2].value)
                    frmProducto[2].value ++; // contamos los productos
                    frmProducto[3].value = (frmProducto[1].value * frmProducto[2].value);
                }
            });
            //let nodoPadre=e.target.parentNode.parentNode.parentNode;
            //let cantidad = nodoPadre.querySelector('.c').value;
            //console.log(cantidad);
            e.stopImmediatePropagation();
            e.preventDefault();
        });
    });
}

const disminuirCantidadProducto = () => {
    document.querySelectorAll(".disminuir").forEach((itemBoton, op) => {
        itemBoton.addEventListener('click', (e) => {
            const formDatosProducto = document.querySelectorAll(".detailProducto"); //form del producto
            const eliminarCarta = document.querySelectorAll('#eliminar'); // carta que contiene el form
            formDatosProducto.forEach((frmProducto) => {
                if (frmProducto.id == e.target.id) {
                    console.log(frmProducto[2].value)
                    frmProducto[2].value --; // restamos la cantidad de productos
                    frmProducto[3].value = (frmProducto[1].value * frmProducto[2].value);

                    //remover o eliminar el form cuando la cantidad de articulos sea de cero (0)
                    if (frmProducto[3].value == 0) {
                        eliminarCarta[op].remove();
                    }
                }
            });
            //let nodoPadre=e.target.parentNode.parentNode.parentNode;
            //let cantidad = nodoPadre.querySelector('.c').value;
            //console.log(cantidad);
            e.stopImmediatePropagation();
            e.preventDefault();
        });
    });
}

//------ver lista cliente Productos
function verListaClienteProducto() {
    document.querySelector(".GUARDAR").addEventListener('click', (e) => {
        const verResumeFactura = document.querySelector('#resumenFactura');
        verResumeFactura.style.display = "block";
        const ocultarFactura = document.querySelector('#facturaCompra');
        ocultarFactura.style.display = "none";
    });
}

