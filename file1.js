
var clothes = [

{
    category:"sweater",
    imgSrc:"./image/sweater 1.png",
    price:'69 dt' 
}, 
{
    category:"sweater",
    imgSrc:"./image/sweater 2.png",
    price: '69 dt'
},
{
    category:"sweater",
    imgSrc:"./image/sweater 3.png",
    price:'69 dt'
},
{
    category:"sweater",
    imgSrc:"./image/sweater 4.png",
    price:  "69 dt"
},
{
    category:"shoes",
    imgSrc:"./image/shoes 1.png",
    price :' 109 dt'
},
{
    category:"shoes",
    imgSrc:"./image/shoes 2.png",
    price: '120 dt'
},
{
    category:"shoes",
    imgSrc:"./image/shoes 3.png",
    price: '100 dt'
},
{
    category:"shoes",
    imgSrc:"./image/shoes 4.png",
    price:'110 dt'
},
{
    category:"jacket",
    imgSrc:"./image/jacket 1.png",
    price:'119 dt'
},
{
    category:"jacket",
    imgSrc:"./image/jacket 2.png",
    price: '149 dt'
},
{
    category:"jacket",
    imgSrc:"./image/jacket 3.png",
    price: '149 dt'
},
{
    category:"trousers",
    imgSrc:"./image/trousers 1.png",
    price: '70 dt'
},
{
    category:"trousers",
    imgSrc:"./image/trousers 2.png",
    price: '80 dt'
},
{
    category:"trousers",
    imgSrc:"./image/trousers 3.png",
    price: '80 dt'
},
{
    category:"trousers",
    imgSrc:"./image/trousers 4.png",
    price: '80 dt'
},

];

var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} 
var filter = function(array,predicate){
var acc = [];
each(array,function(element,i){
    if (predicate(element,i)){
        acc.push(element)
    }
})
return acc;

}
 function displayElement (array){
    each(array, function(element,i){
        var div=$(`<div class='grid-item'><img src="${element.imgSrc}"><p class="price">${element.price}</p></div>`)
        
          div.appendTo($('#container') )
          })
 } 
displayElement(clothes);


$('.searchButton').click(function(){
    $(".grid-item").remove()
var input = $('.searchTerm').val()
var filtred = []
console.log(filtred)
if(input==="sweater") {
 filtred=filter(clothes,function(element,i){
    return element.category=== "sweater"
}
)
}
else if (input==="trousers"){
     filtred=filter(clothes,function(element,i){
    return element.category=== "trousers"
})
}
else if (input==="shoes"){
     filtred=filter(clothes,function(element,i){
    return element.category=== "shoes"
})
}
else if (input==="jacket"){
     filtred=filter(clothes,function(element,i){
    return element.category=== "jacket"
})
}

else if (input===""){
     filtred=clothes
}
console.log(filtred)
displayElement(filtred)
})







