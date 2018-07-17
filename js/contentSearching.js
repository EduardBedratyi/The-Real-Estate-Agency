//Функция, которая создает массив по поиску
function searching(id,array,callback){
    var element = document.getElementById(id);
    if (element && element.addEventListener){
        element.addEventListener("click", function(){
            var newArray = [];
            for(var i = 0; i < array.length; i++){
                var file = array[i].file.toLowerCase();
                var address = array[i].address.toLowerCase();
                var type = array[i].type.toLowerCase();
                var deal = array[i].deal.toLowerCase();
                var price = array[i].price.toLowerCase();
                var description = array[i].description.toLowerCase();
                var searchWord = search.value.toLowerCase();
                if(file.indexOf(searchWord) !== -1 || address.indexOf(searchWord) !== -1 || description.indexOf(searchWord) !== -1 || type.indexOf(searchWord) !== -1 || deal.indexOf(searchWord) !== -1 || price.indexOf(searchWord) !== -1){
                    newArray.push(content[i]);
                }
            }
            if (newArray.length !== 0) {
                //Запускаем функцию отображения с новым масивом
                callback(newArray);
            }
            else callback(content);
        },false)
    }
    if (element && element.attachEvent){
        element.attachEvent("onclick", function(){
            var newArray = [];
            for(var i = 0; i < array.length; i++){
                var file = array[i].file.toLowerCase();
                var address = array[i].address.toLowerCase();
                var type = array[i].type.toLowerCase();
                var deal = array[i].deal.toLowerCase();
                var price = array[i].price.toLowerCase();
                var description = array[i].description.toLowerCase();
                var searchWord = search.value.toLowerCase();
                if(file.indexOf(searchWord) !== -1 || address.indexOf(searchWord) !== -1 || description.indexOf(searchWord) !== -1 || type.indexOf(searchWord) !== -1 || deal.indexOf(searchWord) !== -1 || price.indexOf(searchWord) !== -1){
                    newArray.push(content[i]);
                }
            }
            if (newArray.length !== 0) {
                //Запускаем функцию отображения с новым масивом
                callback(newArray);
            }
            else callback(content);
        },false)
    }
}
/*-----------------------------------------------------------------
function searchFunction(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        var file = array[i].file.toLowerCase();
        var address = array[i].address.toLowerCase();
        var type = array[i].type.toLowerCase();
        var price = array[i].price.toLowerCase();
        var description = array[i].description.toLowerCase();
        var searchWord = search.value.toLowerCase();
        if(file.indexOf(searchWord) !== -1 || address.indexOf(searchWord) !== -1 || description.indexOf(searchWord) !== -1 || type.indexOf(searchWord) !== -1 || price.indexOf(searchWord) !== -1){
            newArray.push(content[i]);
        }
    }
    if (newArray.length !== 0) {
        //Запускаем функцию отображения с новым масивом
        contentCreator(newArray);
    }
    else contentCreator(content);
}*/
