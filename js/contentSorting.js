// Наша функция сравнения
function comparePrice(a, b) {
    return a.price - b.price;
}
function compareAddress(a, b) {
    return a.address - b.address;
}
/*------------------------------------------------------------------*/
var getId = function(id) {
    return document.getElementById(id);
};
function sortByPrice(id,callback){
    var element = getId(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {
            var new_array = [];
               for (var k in content[k].price) {
                    new_array.push(content[k].price);
                }
            callback(new_array.sort(comparePrice));
        }, false)
    }
}
sortByPrice("sortByPrice",contentCreator);
/*-----------------------------------------------------------------*/
function sortByAddress(id,callback){
    var element = getId(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {
            var new_array = [];
            for (var k in content[k]) {
                new_array.push(content[k]);
            }
            callback(new_array.sort(compareAddress));
        }, false)
    }
}
sortByAddress("sortByAddress",contentCreator);