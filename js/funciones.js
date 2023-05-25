$(document).ready(function() 
{
//alert("Voy a programar en JS");
        $(".objetivo").hide();

const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/*================================================*/
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});


//funcion para mostrar html
const showHTML = () => {

    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }


    //limpiar html
    rowProduct.innerHTML = '';

     let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

         total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
           });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};


/*================================================*/
document.addEventListener('keyup', e =>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.item').forEach(articulos =>{
            articulos.textContent.toLowerCase().includes(e.target.value)
            ? articulos.classList.remove('filtro')
            : articulos.classList.add('filtro');

        })
    }
})


    const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () =>{
    slider.scrollLeft -= 300
})

   
next.addEventListener('click', () =>{
    slider.scrollLeft += 300
})



$(".publicacion").on("click",function()
    {
       
         var texto1 = $(".comentario").val(); 
         var texto2 = $(".comentario_2").val();
         //var texto + texto = "hola";
         // alert(texto1 + " " + texto2);
         //var result =   $(".objetivo").val();
         $(".objetivo").show()
          

           $(".res").html("de: "+texto1+"<br>"+"comentario:"+texto2)
           
    });
       
       /*
        $(".pp").mouseover(function()
          {

            $(".detalles").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            }); 

               $(".pp1").mouseover(function()
          {
            $(".detalles1").show();
            $(".detalles").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            });   

               $(".pp2").mouseover(function()
          {
            $(".detalles2").show();
            $(".detalles1").hide();
            $(".detalles").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            });   

               $(".pp3").mouseover(function()
          {
            $(".detalles3").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            });   

               $(".pp4").mouseover(function()
          {
            $(".detalles4").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            });   

               $(".pp5").mouseover(function()
          {
            $(".detalles5").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles").hide();
            $(".detalles6").hide();
            $(".detalles7").hide();
           
            });   

               $(".pp6").mouseover(function()
          {
            $(".detalles6").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles").hide();
            $(".detalles7").hide();
           
            });     
    
               $(".pp7").mouseover(function()
          {
            $(".detalles7").show();
            $(".detalles1").hide();
            $(".detalles2").hide();
            $(".detalles3").hide();
            $(".detalles4").hide();
            $(".detalles5").hide();
            $(".detalles6").hide();
            $(".detalles").hide();
           
            });   */

         
      $(".pp").click(function()
      {
        $(".detalles").slideUp('5000');
      });
       $(".pp1").click(function()
      {
        $(".detalles1").slideUp('5000');
      });
        $(".pp2").click(function()
      {
        $(".detalles2").slideUp('5000');
      });
         $(".pp3").click(function()
      {
        $(".detalles3").slideUp('5000');
      });
          $(".pp4").click(function()
      {
        $(".detalles4").slideUp('5000');
      });
           $(".pp5").click(function()
      {
        $(".detalles5").slideUp('5000');
      });
            $(".pp6").click(function()
      {
        $(".detalles6").slideUp('5000');
      });
             $(".pp7").click(function()
      {
        $(".detalles7").slideUp('5000');
      });

              $(".pago").on("click",function()
          {
            
        $(".gracias").show();

       
    
           
            }); 

        $(".gracias").click(function()
      {
        $(".gracias").slideUp('5000');
      });




});