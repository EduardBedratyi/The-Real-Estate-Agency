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