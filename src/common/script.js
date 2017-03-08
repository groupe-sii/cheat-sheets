'use strict';

class SideNav {
    constructor() {
        this.sideNavMenuButton = document.querySelector('.burger-menu .material-icons');
        this.sideNav = document.querySelector('.burger-menu');

        this.toggleSideNavHandler = this.toggleSideNavHandler.bind(this);

    }


    toggleSideNavHandler() {
        this.sideNav.classList.toggle('hidden');
        this.sideNavMenuButton.classList.toggle('hidden');
    }
}

new SideNav();

document.addEventListener('DOMContentLoaded', function() {
    hljs.initHighlightingOnLoad();
});


var cssPagedMedia = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule) {
        style.innerHTML = rule;
    };
}());

function printLarge() {
    document.body.className += " print-large";
    cssPagedMedia('@page {size: 220mm 306mm; margin: 0mm}');
    window.print();
    cssPagedMedia('@page {size: 210mm 297mm; margin: 0mm}');
    document.body.className = document.body.className.replace("print-large", "");
}


