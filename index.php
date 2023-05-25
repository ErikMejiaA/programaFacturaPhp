<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.4.slim.js" defer></script>
    <script src="js/bootstrap/bootstrap.min.js" defer></script>
    <script src="App/app.js" defer></script>
    <script src="App/proceDatosFactura.js" defer></script>
    <title>Datos del Cliente</title>
</head>
<body>

    <header>
        <h1 class="text-center">FACTURA DE VENTA</h1>
    </header>

    <nav></nav>

    <main>
        <!--Primera parte de la factura-->
        <div class="container mt-3" id="facturaCompra">
            <div class="card">
                <h5 class="card-header text-center">REGISTRO DE LA FACTURA</h5>
                <div class="card-body">
                    <!--iba un <form action="evaluarDatos.php" method="post"></form>-->
                    <div class="container mt-3">
                        <div class="card">
                            <div class="card-body">
                                <form id="headerCliente">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="mb-3">
                                                <label for="numFactura" class="form-label">Nro de la Factura:</label>
                                                <input type="number" class="form-control" id="numFactura" name="numFactura" min="0"/>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="mb-3">
                                                <label for="nombre" class="form-label">Nombre Cliente:</label>
                                                <input type="text" class="form-control" id="nombre" name="nombre"/>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="mb-3">
                                                <label for="numCedula" class="form-label">Nro de la CC:</label>
                                                <input type="number" class="form-control" id="numCedula" name="numCedula" min="0"/>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="mb-3">
                                                <label for="fecha" class="form-label">Fecha:</label>
                                                <input type="date" class="form-control" id="fecha" name="fecha" readonly/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="container mt-4">
                        <div class="card cuerpoCarta">
                            <div class="card-body sumarProducto">
                                    

                            </div>
                        </div>
                    </div>

                    <div class="container d-grid gap-2 mt-3">
                        <button type="button" class="btn btn-info agregarProducto">+</button>
                    </div>

                    <div class="container mt-2">
                        <button type="button" class="btn btn-warning GUARDAR">GUARDAR</button>
                    </div>

                </div>

            </div>
        </div>


        <!--Mostrar datos de la factura-->
        <div class="container" id="resumenFactura">
            <h2 class="text-center">*******RESUMEN TOTAL FACTURA DE COMPRA*******</h2>

            <!--ver los datos del cliente-->
            <div class="container">
                <h2 class="text-center">Datos del CLIENTE</h2>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nro de la Factura</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Nro de la C.C</th>
                            <th scope="col">Fecha de Creación</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoTablaCliente">
                            
                    </tbody>
                </table>
            </div>

            <!--ver los datos del producto-->
            <div class="container">
                <h2 class="text-center">Datos del PRODUCTO</h2>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre Producto</th>
                            <th scope="col">Valor Unitario</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoTablaProducto">
                            
                    </tbody>
                </table>
            </div>

            <div class="container mt-2">
                <button type="button" class="btn btn-warning REGRESAR">MODIFICAR FACTURA</button>
            </div>

        </div>

    </main>


    <footer></footer>

</body>
</html>