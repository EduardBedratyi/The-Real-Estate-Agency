function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

function sortByAddress(id, array, callback){
    var element = document.getElementById(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {

            var address_array = array.sort(byField('address'));

            callback(address_array);
        }, false)
    }
}
function sortByPrice(id, array, callback){
    var element = document.getElementById(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {

            var price_array = array.sort(byField('price'));

            callback(price_array);
        }, false)
    }
}
/*function sortByPrice(id,array,callback){
    var element = document.getElementById(id)
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {
            var price_array = array.slice().sort(function (a, b) {
                return +a.price.slice(0,3) - +b.price.slice(0,3);
            });
            //function comparePrice(a, b) {
            //    return +a.price.slice(0,3) - +b.price.slice(0,3);
            //}
            //var price_array = array.slice().sort(comparePrice);
            callback(price_array);
        }, false)
    }
}*/

/*function sortByAddress(id, array, callback){
    var element = document.getElementById(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {
            function compareAddress(a, b) {
                var c = a.address,
                    d = b.address;

                if( c < d ){
                    return -1;
                }else if( c > d ){
                    return 1;
                }
                return 0;
            }
            var address_array = array.slice().sort(compareAddress);
            callback(address_array);
        }, false)
    }
}*/
