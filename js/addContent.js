jQuery(document).ready(function () {
    var getId = function(id) {
        return document.getElementById(id);
    };
    /*----Object with all types of content----*/
    window.content = {
        audio: [],
        video: [],
        text: []
    };

    var addForm = getId("addContent");
    $('#addContent').submit(function (e) {
        e.preventDefault();
        /*-----------------to prevent sending form data---*/

        var adderName = addForm.userName.value;
        var adderEmail = addForm.email.value;
        var addCountry = addForm.country.value;
        var addCategory = addForm.category.value;
        var addFile = addForm.file.value;
        var contentType = getContentType;
        var addText = $('#textContent').val();
        /*-----------------filing each object every type of content----*/
        var entry = {
            userName: adderName,
            email: adderEmail,
            country: addCountry,
            category: addCategory,
            file: addFile,
            contentType: contentType,
            textContent: addText
        };
        if (contentType === 'text'){
            alert('text type of file');
            window.content.text.push(entry);
        }
        if (contentType === 'video'){
            alert('video type of file');
            window.content.video.push(entry);
        }
        if (contentType === 'audio'){
            alert('audio type of file');
            window.content.audio.push(entry);
        }
        if (contentType === undefined){
            alert('unknown type of file');
        }
    });
    /*-------------------checking if file`s type is available---------------------*/
    function extCheck(param, array) {
        return array.indexOf(param) !== -1;
    }

    function getFileType() {
      var fileType,
       ext,
       file,
       parts;

        file = getId("addFile").files[0];
        parts = file.name.split('.');
        if (parts.length > 1) ext = parts.pop();
        /*----list of known file type----*/
        var extType = {
            text: ['doc', 'txt', 'docx', 'pdf', 'xps'],
            video: ['mpeg', 'mp4', 'webm'],
            audio: ['mp3', 'wav', 'ogg']
        };

        if (extCheck(ext, extType.text)) fileType = 'text';
        if (extCheck(ext, extType.video)) fileType = 'video';
        if (extCheck(ext, extType.audio)) fileType = 'audio';

        return fileType;
    }
    /*----------------checking of file type before sending form data----*/
    var getContentType = document.getElementById("addFile").addEventListener('change',getFileType());
});