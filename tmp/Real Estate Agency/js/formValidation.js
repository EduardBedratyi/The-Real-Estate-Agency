/* регистрация события загрузки документа*/
if (window.addEventListener)window.addEventListener("load", init, false);
/*---------------------------------- установка обработчиков для форм и элементов форм ---------------------*/
function init(){
    for (var i = 0; i < document.forms.length; i++){

      var form = document.forms[i];

      var formValidation = false;

        for (var j = 0; j < form.elements.length; j++){
            var e = form.elements[j];
            /*-----проверяем поля, соответствующие данному типу-----*/
          if (e.type === 'text' || e.type === 'password' /*|| e.type === 'email' || e.type === 'tel' */) {
              /* проверка: имеются ли атрибуты требующие проверки*/
            var pattern = e.getAttribute("data-val")

            if (pattern) {
              e.onchange = validateInput;// обработчик на изменение.
              formValidation = true;// форма требует проверку.
            }
            /*var pass = form.elements.password,
              repass = form.elements.password2;
            if (pass.value !== repass.value){
              formValidation = false;
            }
            else {
              formValidation = true;
            }*/
            if (formValidation) {
              form.onsubmit = validateForm;// обработчик для формы на submit
            }
          }
        }
    }
}
/* обработчик на изменение содержимого полей ввода*/
function validateInput(){
    var pattern = this.dataset.val,
      /*msg = this.dataset.valMsg,*/
      /*msgId = this.dataset.valMsgId,*/
      value = this.value;

    var res = value.search(pattern); /*сравниваем введенное значение с шаблоном*/
    if (res === -1){
       /*document.getElementById(msgId).innerHTML = msg;*/
       this.className = "error";
    }
    else {
        /*document.getElementById(msgId).innerHTML = "";*/
        this.className = "valid";
    }
}
/*обработчик на submit формы*/
function validateForm(){

    var invalid = false;

    for (var i = 0; i < this.elements.length; i++){
        var e = this.elements[i];
        if (e.type === "text" || e.type === "password" /*|| e.type === "tel" || e.type === "email"*/ && e.onchange !== null){
            e.onchange();
            if(e.className === "error"){
                invalid = true;
            }
        }
    }
    if (invalid){
      alert("Please, check all fields of the form");
      return false;
    }
}


/*$('#regForm').submit(function (e) {
    if(validation) {
        e.preventDefault();
        validation("regForm");
    }
});

var validation = function validate(formId) {
    var elems = document.getElementById(formId);

    if (elems.userName){
        resetError(elems.userName.parentNode);
        if (!elems.userName.value) {
            showError(elems.userName.parentNode, ' Please, enter your Name or nickName');
        }
    }

    if (elems.email){
        resetError(elems.email.parentNode);
        if (!elems.email.value) {
            showError(elems.email.parentNode, ' Please, enter your e-mail ');
        }
    }

    if (elems.tel){
        resetError(elems.tel.parentNode);
        if (!elems.tel.value) {
            showError(elems.tel.parentNode, ' Please, enter your phone number ');
        }
    }

    if (elems.password){
        resetError(elems.password.parentNode);
        if (!elems.password.value) {
            showError(elems.password.parentNode, ' Укажите пароль.');
        } else if (elems.password.value !== elems.password2.value) {
            showError(elems.password.parentNode, ' Пароли не совпадают.');
        }
    }

    if (elems.country){
        resetError(elems.country.parentNode);
        if (!elems.email.value) {
            showError(elems.country.parentNode, ' Please, enter your country ');
        }
    }

    if (elems.category){
        resetError(elems.category.parentNode);
        if (!elems.email.value) {
            showError(elems.category.parentNode, ' Please, enter category ');
        }
    }

    if (elems.message) {
        resetError(elems.message.parentNode);
        if (!elems.message.value) {
            showError(elems.message.parentNode, ' Text is missing');
        }
    }
};

function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}*/
