


// ------------mostrar en carrito--------------
// trabajo con los datos guardados en localStorage------
const contenedorCarrito = document.getElementById('cajaCarrito');
const btnPago = document.getElementById('pagoProductos');
const textPagoTotal = document.getElementById('mostrarPago');
const boxDatos = document.getElementById('contenedorDatosUsuario');





function mostrarCarrito(){
    
    const mis_productos = JSON.parse(localStorage.getItem('producto'));
    
    
    if(mis_productos){
        
        // const mis_productos = JSON.parse(localStorage.getItem('productos'));
        // const sumarPrecios = mis_productos.reduce((acc,p)=>acc+=p.precio,0);
        const sumarPrecios = mis_productos.reduce((acc,p)=>acc+=p.precio,0);
        textPagoTotal.innerHTML=`<p>Total $ ${sumarPrecios}</p>`
        
        for(p of mis_productos){
            
            contenedorCarrito.innerHTML+=`
            <tr>
                <th scope="row">${p.id}</th>
                <td>${p.nombre}</td>
                <td>${p.tipo}</td>
                <td>${p.precio}</td>
               
                
                
            </tr>
        
        `
        
    } 
    }
    
    
}



function mostarInput(){
    boxDatos.innerHTML=`
    <div class="col-md-4">
        <label for="validationDefault01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationDefault01" value="" required>
    </div>
    <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Last name</label>
        <input type="text" class="form-control" id="validationDefault02" value="" required>
    </div>
    <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
    </div>
    <div class="col-md-6">
        <label for="validationDefault03" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="validationDefault03" required>
    </div>
    <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Pais</label>
        <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">Argentina</option>
            <option>Argentina</option>
            <option>Perú</option>
            <option>Chile</option>
            <option>Bolivia</option>
        </select>
    </div>
    <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Número Tarjeta</label>
        <input type="text" class="form-control" id="validationDefault05" required>
    </div>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
            Terminos y Condiciones
            </label>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Pagar</button>
    </div>
    `
}

mostrarCarrito()


btnPago.addEventListener('click',()=>{
    mostarInput()
    btnPago.remove();
    
    
    // return window.location.href="https://www.mercadopago.com.ar/";
    
})