var allCounts = content.length;
var itemsPerPage = 10;//every page entries
window.onload = function () {
    Panel(
        {
            inrow: 3, // numbers of page buttons in raw
            itemsPerPage: itemsPerPage, //количество элементов на странице
            items: allCounts,// all elements in array
            step: 1,// step of listing
            current: 1,// current position
            callback: clickPanel,//callback function
            element: document.getElementById('page_panel'),// pagination panel
            // Также можно задать значения
            prev_txt: '<',
            next_txt: '>',
            last_txt: '>>',
            first_txt: '<<'
        }
    );
};

(function () {
    function Panel(params) {
        if (!(this instanceof Panel)) {
            return new Panel(params);
        }
        this.initialize.apply(this, arguments);
    }

    Panel.prototype.initialize = function (arg) {
        var fragment = document.createDocumentFragment();
        var first = document.createElement('span');
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var last = document.createElement('span');
        var prev = document.createElement('span');
        var next = document.createElement('span');
        var callback = arg.callback;
        var element = arg.element;
        var ins_li, end;

        first.className = 'first';//присваиваем классы
        last.className = 'last';
        prev.className = 'prev';
        next.className = 'next';
        arg.step = arg.step || 1;
        arg.inrow = arg.inrow || 5;
        arg.pageCounts = Math.ceil(arg.items/arg.itemsPerPage) || 25;//количество страниц
        arg.current = arg.current || 1;
        arg.prev_txt = arg.prev_txt || '<';
        arg.next_txt = arg.next_txt || '>';
        arg.last_txt = arg.last_txt || '>>';
        arg.first_txt = arg.first_txt || '<<';
        var show_button = arg.pageCounts > arg.inrow;
        if(show_button){
            first.appendChild(document.createTextNode(arg.first_txt));
            last.appendChild(document.createTextNode(arg.last_txt));
            prev.appendChild(document.createTextNode(arg.prev_txt));
            next.appendChild(document.createTextNode(arg.next_txt));
        }
        element.className = 'page_panel';
        //проставляем номера страниц и стрелочки
        var start = Math.floor((arg.current - 1) / arg.inrow) * arg.inrow;

        function build(start) {
            for (end = arg.inrow + start; ++start <= end;) {
                if (start > arg.pageCounts) break;
                //ins_li = li.cloneNode();
                ins_li = document.createElement('li');
                if (start === arg.current) {
                    ins_li.className = 'active';
                }
                //отображение 1го номера страницы, с которого начинается отсчет следующих страниц
                ins_li.innerHTML = start;
                fragment.appendChild(ins_li);
            }
            ul.innerHTML = '';
            ul.appendChild(fragment);
            if(show_button){
                fragment.appendChild(first);
                fragment.appendChild(prev);
            }
            fragment.appendChild(ul);
            if(show_button){
                fragment.appendChild(next);
                fragment.appendChild(last);
            }
            element.appendChild(fragment);
        }

        build(start);

        element.onclick = function (e) {

            var el = e ? e.target : window.event.srcElement;

            switch (el.tagName) {
                case 'LI':
                    if(arg.current === +el.innerHTML) return;//если текущий эл-т активный - return
                    var list = el.parentNode.children;//иначе активным назначется другой
                    for (var i = 0; i < list.length; i++) {
                        list[i].className = list[i] === el ? 'active' : '';
                    }
                    //это число - номер страницы и аргумент для callback
                    arg.current = +el.innerHTML;
                    if(callback) callback(arg.current);
                    break;

                case 'SPAN':
                    switch (el.className) {
                        case 'first':
                            if (start !== 0) {
                                start = 0;
                                build(start);
                            }
                            break;
                        case 'last':
                            end = arg.pageCounts - arg.inrow;
                            if (start !== end) {
                                start = end;
                                build(start);
                            }
                            break;
                        case 'next':
                            start += arg.step;
                            if (start >= arg.pageCounts - arg.inrow) {
                                start = arg.pageCounts - arg.inrow;
                            }
                            build(start);
                            break;
                        case 'prev':
                            if (start < arg.step) {
                                start = 0;
                            } else {
                                start -= arg.step;
                                if (start >= arg.pageCounts - arg.inrow) {
                                    start = arg.pageCounts - arg.inrow - arg.step;
                                }
                            }
                            build(start);
                            break;
                    }
                    break;
            }
        };
    };
    window.Panel = Panel;
}());

function clickPanel(pageId) {
    //alert(id);
    /*alert('clickPanel, Page: ' +page);*/
    var pageCounts = Math.ceil(allCounts / itemsPerPage);//number of pages

    //выводим список страниц
    var paginator = document.getElementById("page_list");
    paginator.style.display = 'none';
    var page = "";
    /*разбиваем весь список по страницам, например по 3 записи
     на страницу и присваиваем каждой странице свой id и номер (i + 1)*/
    for (var i = 0; i < pageCounts; i++) {
        page += "<span data-page=" + (i * itemsPerPage) + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
    }
    paginator.innerHTML = page;//выводим список всех страниц

    /*----------------------------выводим записи {elemOnPage}--*/
    var all_item = document.querySelectorAll(".item");//коллекция всех записей
    for (var k = 0; k < all_item.length; k++) {
        if (k < itemsPerPage) {
            all_item[k].style.display = "block";
        }
    }
    //присваиваем первой странице класс "paginator_active"
    var main_page = document.getElementById("page" + pageId);
    main_page.classList.add("active");

    /*при нажатии на номер страницы запускаем функцию листания */
    paginator.onclick = function (event) {
        var e = event || window.event;
        var target = e.target;
        var id = target.id;

        if (target.tagName.toLowerCase() !== "span") return;

        var data_page = +target.dataset.page;//считываем атрибут страницы
        main_page.classList.remove("paginator_active");//была page1
        main_page = document.getElementById(id);
        main_page.classList.add("paginator_active");


        //отображает только элементы выбранной страницы
        for (var i = 0; i < all_item.length; i++) {
            //у каждой записи - свой атрибут data_item
            var data_item = all_item[i].dataset.item;
            if (data_item <= data_page || data_item >= data_page)
                all_item[i].style.display = "none";//и скрываем все записи
        }
        var diapason = 0;//если 0, то выводит все item на страницу
        for (var i = data_page; i < all_item.length; i++) {
            if (diapason >= itemsPerPage) break;
            all_item[i].style.display = "block";
            diapason++;
        }
    };
//CustomEvent polyfill
    (function() {
        if (typeof window.CustomEvent === "function") return false;

        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();
    main_page.dispatchEvent(new CustomEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    }));
}