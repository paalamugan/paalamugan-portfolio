import { parseUrl } from '../../utils/urls'

export const scrollAnimate = function scrollAnimate(event) {

    event.preventDefault();

    const href = event.currentTarget.href;

    if (!href) {
        return null;
    }

    let element;
    let customTop = 0;

    const hash = parseUrl(href).hash;

    if (hash) {

        element = $(hash).offset();
        customTop = 80;

    } else {

        element = $(`body`).offset();
    }

    const scrollTop = element.top - customTop;

    setTimeout(() => {
        $(`html, body`).animate({ scrollTop: scrollTop }, 800);
    }, 0)

    return null;

}

export const animateElement = function animateElement(element, animationName, callback) {

    const node = document.querySelector(element);
    node.classList.add(`animated ${animationName}`);

    function handleAnimationEnd() {
        node.classList.remove(`animated ${animationName}`);
        node.removeEventListener(`animationend`, handleAnimationEnd);

        if (typeof callback === `function`) callback();
    }

    node.addEventListener(`animationend`, handleAnimationEnd);
}

export const animateClass = function animateClass(className) {

    return `animated ${className}`;
}
