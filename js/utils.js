function loaded(callback){
    window.addEventListener('DOMContentLoaded', callback);
}

function qS(selector){
    return document.querySelector(selector);
}

function qSAll(selector){
    return document.querySelectorAll(selector);
}