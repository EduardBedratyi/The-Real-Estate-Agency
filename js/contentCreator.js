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
                div += '<figure class="chapter-name">';
                    div += '<figcaption>';
                        div += '<a href="#">' + array[i].address + '</a>';
                    div += '</figcaption>';
                div += '</figure>';
                div += '<p class="type">' + array[i].type + '</p>';
                div += '<p class="price">' + array[i].price + '</p>';
            div += '</div>';
            div += '<div class="dscptn">';
                div += '<p>' + array[i].description + '</p>';
            div += '</div>';
        div += '</div>';
        /*var objNumber = document.querySelectorAll(".item")[i];
        objNumber.setAttribute("data-item", i);*/
    }
    contPage.innerHTML += div;
}

function reviewsCreator (array) {
    var reviewPage = document.getElementById("reviews");
    var div = '';
    for (var i = 0; i < array.length; i++){
        div += '<p>'+ array[i].text;
          div += '<hr>'
        div += '</p>';
    }
    reviewPage.innerHTML += div;
}