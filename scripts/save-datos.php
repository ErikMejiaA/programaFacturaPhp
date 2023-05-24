<?php

    //obtenemos los datos enviados desde el formulario
    $data = json_decode(file_get_contents('php://input'), true);

    //accedemos a los emcabezados de la factura en este caso los clientes 
    $clientes = $data['cliente'];
    foreach($clientes as $cliente) {
        $llaveCliente = $cliente['llaveCliente'];
        $datosCliente = $cliente['datosCliente'];

        //se realiza operaciones con los datos del encabezado del la factura
        //por ejemplo, guardar en la base de datos 
    }

    //accedemos a los detalles de la factura en este caso los productos 
    $productos = $data['producto'];
    foreach($productos as $producto) {
        $llaveproducto = $producto['llaveproducto'];
        $datosproducto = $producto['datosproducto'];

        //se realiza operaciones con los datos del detalles del la factura
        //por ejemplo, guardar en la base de datos 
    }

    //Enviar una respuesta con éxito 

    echo json_encode($data);
?>