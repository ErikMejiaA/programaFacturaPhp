//--------variables globales-------------------------
let contarProducto = 0;
//---------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    //funciones a ejecutar cunado se cargue el DOM
    agregarProducto();
});

const agregarProducto = () => {
    document.querySelector(".agregarProducto").addEventListener('click', (e) => {
        contarProducto ++;
        let productosHTML = '';
        let sumarProducto = document.querySelector(".sumarProducto");
        productosHTML += /* html */ `
            <div class="mt-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="nombreProducto${contarProducto}" class="form-label">Nombre del Producto:</label>
                                    <input type="text" class="form-control" id="nombreProducto" name="nombreProducto">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="mb-3">
                                    <label for="valorUnitario" class="form-label">Valor Unitario:</label>
                                    <input type="number" class="form-control" id="valorUnitario" name="valorUnitario" min="0"/>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="cantidad" class="form-label">cantidad:</label>
                                    <input type="number" class="form-control" id="cantidad" name="cantidad" min="0">
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="mb-3">
                                    <label for="total" class="form-label">Total:</label>
                                    <input type="number" class="form-control" id="total" name="total">
                                </div>
                            </div>
                            <div class="col-2 mt-2">
                                <div class="mb-3 mt-4">
                                    <button type="button" class="btn btn-success">+</button>
                                    <button type="button" class="btn btn-danger">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sumarProducto.innerHTML += productosHTML;
    });
}