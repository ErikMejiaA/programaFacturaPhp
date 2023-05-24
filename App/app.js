//--------variables globales-------------------------
let contarProducto = 0;
//---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //funciones a ejecutar cunado se cargue el DOM
    agregarProducto();
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
                    <form id="detailProducto">
                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="nombreProducto${contarProducto}" class="form-label">Nombre del Producto:</label>
                                    <input type="text" class="form-control" id="nombreProducto${contarProducto}" name="nombreProducto${contarProducto}"> 
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="valorUnitario${contarProducto}" class="form-label">Valor Unitario:</label>
                                    <input type="number" class="form-control" id="valorUnitario${contarProducto}" name="valorUnitario${contarProducto}" min="0"/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="cantidad${contarProducto}" class="form-label">cantidad:</label>
                                    <input type="number" class="form-control" id="cantidad${contarProducto}" name="cantidad${contarProducto}" min="0">
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="total${contarProducto}" class="form-label">Total:</label>
                                    <input type="number" class="form-control" id="total${contarProducto}" name="total${contarProducto}">
                                </div>
                            </div>
                            <div class="col-2 mt-2">
                                <div class="mb-3 mt-4">
                                    <button type="button" class="btn btn-success">+</button>
                                    <button type="button" class="btn btn-danger">-</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        `;
        sumarProducto.appendChild(productosHTML);

        e.preventDefault();
    });
}