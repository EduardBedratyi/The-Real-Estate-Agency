//Функция, которая создает массив по поиску
function searchFunction() {
    var newContent = [];
    for(var i = 0; i < content.length; i++){
        var file = content[i].file.toLowerCase();
        var address = content[i].address.toLowerCase();
        var type = content[i].type.toLowerCase();
        var price = content[i].price.toLowerCase();
        var description = content[i].description.toLowerCase();
        var searchWord = search.value.toLowerCase();
        if(file.indexOf(searchWord) !== -1 || address.indexOf(searchWord) !== -1 || description.indexOf(searchWord) !== -1 || type.indexOf(searchWord) !== -1 || price.indexOf(searchWord) !== -1){
            newContent.push(content[i]);
        }
    }
    if (newContent.length !== 0) {
        //Запускаем функцию отображения с новым масивом
        contentCreator(newContent);
    }
    else contentCreator(content);
}