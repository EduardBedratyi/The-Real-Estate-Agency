function subMenuCreator (id,array) {
    var firstMenuItem = document.getElementById(id);
    var menuLevOne = '';
    for (var i = 0; i < array.length; i++) {
        menuLevOne += '<li class="levelOne-child">';
        menuLevOne += '<h3 class="levelOne-item">' + array[i].title + '</h3>';
        menuLevOne += '<ul class="levelTwo-parent">';
        if(array[i].hasOwnProperty('items') && typeof array[i].items === 'object' && array[i].items.length){
            for(var j = 0; j < array[i].items.length; j++){
                var secondMenuItem = array[i].items[j];
                menuLevOne += '<li class="levelTwo-child">';
                menuLevOne += '<a href="'+secondMenuItem.subtitle_link+'" class="levelTwo-item">' + secondMenuItem.subtitle + '</a>';
                menuLevOne += '</li>';
            }
        }
        menuLevOne += '</ul>';
        menuLevOne += '</li>';
    }
    firstMenuItem.innerHTML = menuLevOne;
}

/*function subMenuCreator(id, array){
    var element = document.getElementById(id);
    if (element && element.addEventListener) {
        element.addEventListener("click", function () {
            var menuLevOne = '';
            for (var i = 0; i < array.length; i++) {
                menuLevOne += '<li class="levelOne-child">';
                menuLevOne += '<h3 class="levelOne-item">' + array[i].title + '</h3>';
                menuLevOne += '<ul class="levelTwo-parent">';
                if(array[i].hasOwnProperty('items') && typeof array[i].items === 'object' && array[i].items.length){
                    for(var j = 0; j < array[i].items.length; j++){
                        var secondMenuItem = array[i].items[j];
                        menuLevOne += '<li class="levelTwo-child">';
                        menuLevOne += '<a href="'+secondMenuItem.subtitle_link+'" class="levelTwo-item">' + secondMenuItem.subtitle + '</a>';
                        menuLevOne += '</li>';
                    }
                }
                menuLevOne += '</ul>';
                menuLevOne += '</li>';
            }
            element.innerHTML = menuLevOne;
        }, false)
    }
}*/
/*ES6
function subMenuCreator(array) {
    //Очищаем старый запрос
    menuService.innerHTML = '';
    for(var i = 0; i < array.length; i++){
        //Здесь в цикле создаются блоки и заполняются в cardsWrapper
        var menuLevOne = document.createElement('li');
        menuLevOne.classList.add("menu-content-Category");
        menuLevOne.innerHTML =
            `<ul>
                <a class="menuLevOne">` + array[i].address + `</a>
                <li>
                  <a class="menuLevOne">` + array[i].address + `</a>
                </li>                
             </ul>`;
        menuService.appendChild(menuLevOne);
    }
}*/
