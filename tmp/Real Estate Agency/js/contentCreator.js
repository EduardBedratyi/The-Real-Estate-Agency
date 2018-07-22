//Функция отрисовки контента
function contentCreator (array) {
    var contPage = document.getElementById("contentPage");
    contPage.innerHTML = '';
    var div = '';
    for (var i = 0; i < array.length; i++){
         div += '<div data-item="'+i+'" class="item">';
            div += '<div class="img">';
                div += '<img src="'+array[i].file+'" alt="picture">';
            div += '</div>';
            div += '<div class="chapter">';
                div += '<figure class="chapter-name">'+ array[i].type;
                    div += '<figcaption>';
                        div += '<p class="item-address">' + array[i].address + '</p>';
                    div += '</figcaption>';
                div += '</figure>';
                div += '<h4 class="type">' + array[i].deal + '</h4>';
                div += '<p class="price">' + array[i].price + '</p>';
            div += '</div>';
            div += '<div class="description">';
                div += '<p>' + array[i].description + '</p>';
            div += '</div>';
            div += '<hr>';
        div += '</div>';
        /*var objNumber = document.querySelectorAll(".item")[i];
        objNumber.setAttribute("data-item", i);*/
    }
    contPage.innerHTML += div;
}