const Meals = [
    {
      good: "Chicken Salad",
      price: "10,50",
    },
    {
        good: "Shrimp Salad",
        price: "9,50",
    }, 
    {
        good: "Kebab Salad",
        price: "10,00",
    }, 
    {
        good: "Salmon Salad",
        price: "11,50",
    }, 
    {
        good: "Beef Salad",
        price: "11,50",
    }, 
    {
        good: "Tuna Salad",
        price: "13,50",
    }, 
    {
        good: "Kebab with French Fries",
        price: "10,50",
    }, 
    {
        good: "Kebab with Rice",
        price: "10,50",
    },
    {
        good: "Kebab with Potato Wedges",
        price: "10,50",
    },
    {
        good: "Kebab with Blue Cheese Potatoes",
        price: "10,50",
    },
    {
        good: "Kebab Roll",
        price: "10,00",
    },
    {
        good: "Kebab Roll with Cheese",
        price: "10,00",
    },
    {
        good: "Garlic Kebab Roll",
        price: "10,00",
    },
    {
        good: "Kebab Roll with Blue Cheese",
        price: "10,00",
    },
];

var cartArray = [] ;
    
function AddItemToCart(index) {
if (JSON.parse(sessionStorage.getItem("cartArray")) != null) {
  cartArray = JSON.parse(sessionStorage.getItem("cartArray"));
}
cartArray.push(Meals[index]);
sessionStorage.setItem("cartArray", JSON.stringify(cartArray));

const containermsgnode = document.getElementById("containermsg");
const cartmsgnode = document.createElement("h1");
cartmsgnode.setAttribute("id","cartmsg");
const textnode = document.createTextNode("Item Added");
cartmsgnode.appendChild(textnode);
containermsgnode.appendChild(cartmsgnode);

setTimeout(function(){
    cartmsgnode.parentNode.removeChild(cartmsgnode)
},5000)
console.log(cartArray);  }

function GenCart(index) {
    let ItemInCart = document.createElement('div');
    ItemInCart.id = "MENU";
    let _3 = document.createElement('div');
    _3.id = "details";
    let _4 = document.createElement('div');
    _4.id = "price";
    let _7 = document.createElement('p');
    _7.append(document.createTextNode(cartArray[index].good));
    let _8 = document.createElement('p');
    _8.append(document.createTextNode(cartArray[index].price + "€"));
    ItemInCart.append(_3);
    _3.append(_7);
    ItemInCart.append(_4);
    _4.append(_8);
    document.getElementById('import').append(ItemInCart);
  }
  function CartPutter () {
    let totalprice = 0.0;
    cartArray = JSON.parse(sessionStorage.getItem("cartArray"));
    console.log(cartArray)
    for (let i = 0; i < cartArray.length; i++) {
      GenCart(i); 
      totalprice = totalprice + parseFloat(cartArray[i].price.replace(",","."));
    }
    const resultprice = totalprice.toString().replace(".",",")
    let finalprice
    if (resultprice.includes(",")){
        finalprice = resultprice + "0"
    }
    else {
        finalprice = resultprice + ",00"
    }
    document.getElementById('totalprice').textContent = finalprice + "€";
  }

