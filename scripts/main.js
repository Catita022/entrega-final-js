

const listaProductos = [];
const carrito = [];
// ruta para el archivo json----

const ruta ="./scripts/datos.json";
// ------------------------------fetch datos--------
fetch(ruta)
    .then(respuesta => respuesta.json())

    .then(datos => {
        
        muestroProductos(datos);
        
        datos.forEach(element => listaProductos.push(element));
        
        botonBuscar.addEventListener('click',buscandoProducto);
        
        // botonCarrito.addEventListener('click',mostrarCarrito);
        
       
        
    })
    .catch((error) => console.log('tipo de error ' + error));
    
// la caja donde se mostraran los productos
const box = document.getElementById('caja');
// para cambiar el color del fondo---------
const botonCambioModo = document.getElementById('cambioFondo');
const contenedorFondo = document.getElementById('contenedor');
const entradaUsuario = document.getElementById('entradaUsuario');
const tituloTienda = document.getElementById('titulo');
const botonBuscar = document.getElementById('buscarProductos');
const mensajes = document.getElementById('mensaje');
const botonCarrito = document.getElementById('btnMostrarProductos');
const tablaProd = document.getElementById('tablaProductos')



botonCambioModo.addEventListener('click',modo);



//agarro el dato que tiene el local storage
const datosLocalStorage = localStorage.getItem('modo');

//para que la class de contenedor valla tomando los datos de localStorage
contenedorFondo.className= datosLocalStorage;

//si contenedor.className es igual a bg-dark
if(contenedor.className=='bg-black'){
    botonCambioModo.innerText='Light';//le doy valor al texto del boton
    tituloTienda.className ='text-white';
    mensajes.className ='text-white';

}else{
    botonCambioModo.innerText='Dark';
    tituloTienda.className='text-dark';
    mensajes.className = 'text-dark';
};


function modo(){
    
    if(localStorage.getItem('modo')=='bg-black'){
        colorLight();
        
    }else{
        
        colorDark();
        
        
    }
}

function colorDark(){
   
    localStorage.setItem('modo','bg-black');
    botonCambioModo.innerText='Light';
    tituloTienda.className ='text-white';
    mensajes.className ='text-white';
    document.body.className=localStorage.getItem('modo');

}
function colorLight(){
    localStorage.setItem('modo','bg-white');
    tituloTienda.className='text-dark';
    mensajes.className = 'text-dark';
    botonCambioModo.innerText ='Dark';
    document.body.className=localStorage.getItem('modo');
}


// --------------------------

// muestra los productos que se busco si estan en productos.tipo-----
function buscandoProducto(){
    mensajes.innerText =`No se encontro ${entradaUsuario.value}`;
    box.innerHTML=``;
    let listPoductos = listaProductos.filter((e)=>e);
    let prodEncontrados = [];
    
    
    for(let prod of listPoductos){

        
        if(prod.tipo.toLowerCase()=== entradaUsuario.value.toLowerCase()){
            prodEncontrados.push(prod);
            mensajes.innerText='...';
            muestroProductos(prodEncontrados);
            
            
        }else if(prod.nombre.toLowerCase()===entradaUsuario.value.toLowerCase()){
            prodEncontrados.push(prod);
            mensajes.innerText='...';
            muestroProductos(prodEncontrados);
        }

        
    };

    
    
};


// muestro todos los productos-----------------
function muestroProductos(list){
    box.innerHTML=``;
    for(d of list){
        box.innerHTML +=` 
        <div class="card align-items-center p-1" style="width: 18rem;">
            <img src=${d.foto} class="card-img-top" alt="imagen de ${d.nombre}">
            <div class="card-body text-center p-2">
                <h5 class="card-title">${d.nombre}</h5>
                <p class="card-text">$ ${d.precio}</p>
                <a href="#" class="btn btn-primary compra" id=${d.id}>Agregar</a>
            </div>
        </div>
        `
        
    }

    // escucha los botones
    escuchaBotones('compra')
    
}   

// ------------------------guardo productos---

function ProdSave(l){
    
    localStorage.setItem('producto',JSON.stringify(l));
    
}

// funcion para los botones de los prod----

function escuchaBotones(e){
    const btnAgregar = document.getElementsByClassName(e);
    
    for(let b of btnAgregar){
        b.addEventListener('click',()=>{
            const idProd = listaProductos.find((p)=>p.id==b.id);

            Swal.fire({
                title: `Agregaste ${idProd.tipo}  ${idProd.nombre}`,
                text: ` $ ${idProd.precio}`,
                imageUrl: `${idProd.foto}`,
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: `imagen de ${idProd.nombre}`,
                
            });
            
            
            carrito.push(idProd);//mando a la lista el producto
            
            ProdSave(carrito);//llamo la funcion de localStorage despues de agregar a la lista
            
            
            
           
                
            
    })
    
    // ProdSave(carrito);
}};




