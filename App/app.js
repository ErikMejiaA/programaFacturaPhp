//--------variables globales-------------------------
let contarProducto = 0;
const formDatoCliente = document.querySelector('#headerCliente'); // form del cliente
//---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //funciones a ejecutar cunado se cargue el DOM
    agregarProducto();
    obtenerFechaActual();
});

//name="producto${contarProducto}[]"

const agregarProducto = () => {
    document.querySelector(".agregarProducto").addEventListener('click', (e) => {
        contarProducto ++;
        let sumarProducto = document.querySelector(".sumarProducto");
        let productosHTML = document.createElement('div');
        productosHTML.className = "mt-2";
        productosHTML.innerHTML = /* html */ `
            <div class="card">
                <div class="card-body">
                    <form class="detailProducto" id="${contarProducto}">
                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="nombreProducto${contarProducto}" class="form-label ">Nombre del Producto:</label>
                                    <input type="text" class="form-control n" id="nombreProducto${contarProducto}" name="nombreProducto${contarProducto}"/> 
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="valorUnitario${contarProducto}" class="form-label ">Valor Unitario:</label>
                                    <input type="number" class="form-control v" id="valorUnitario${contarProducto}" name="valorUnitario${contarProducto}" min="0"/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="cantidad${contarProducto}" class="form-label ">cantidad:</label>
                                    <input type="number" class="form-control c" id="cantidad${contarProducto}" name="cantidad${contarProducto}" min="0" value="0" readonly/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="total${contarProducto}" class="form-label t">Total:</label>
                                    <input type="number" class="form-control t" id="total${contarProducto}" name="total${contarProducto}" value="0" readonly/>
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
    for (itemFrm of formDatoCliente) {
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
    document.querySelectorAll(".disminuir").forEach((itemBoton) => {
        itemBoton.addEventListener('click', (e) => {
            const formDatosProducto = document.querySelectorAll(".detailProducto"); //form del producto
            formDatosProducto.forEach((frmProducto) => {
                if (frmProducto.id == e.target.id) {
                    console.log(frmProducto[2].value)
                    frmProducto[2].value --; // restamos la cantidad de productos
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

