function $(elements) {
    let el = document.querySelectorAll(elements);
    return new MyJs(el);
}

class MyJs {
    constructor(elements) {
        this.elements = elements;
    }
    on(eventName, f) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, f);
        }
        return this;
    }
    html(text) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = text;
        }
        return this;
    }
}