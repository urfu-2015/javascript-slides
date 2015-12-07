function find(selector) {
    return document.querySelector(selector);
}

function handler(event) {
    console.log('From:', event.currentTarget.className, 'Is bubles:', event.eventPhase );
}

var red = find('.red');
var blue = find('.blue');
var green = find('.green');

red.addEventListener('click', handler, false);
blue.addEventListener('click', handler, false);
green.addEventListener('click', handler, false);

red.addEventListener('click', handler, true);
blue.addEventListener('click', handler, true);
green.addEventListener('click', handler, true);