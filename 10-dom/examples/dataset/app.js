
var time = document.querySelector('#time');

console.log('Data set value: %s', time.dataset.serverTime);
console.log('Attribute value: %s', time.getAttribute('data-server-time'));
debugger;

// dataset и значение аттрибутов синхронизированны между собой
time.dataset.serverTime = '9999/99/99';

console.log('Data set value: %s', time.dataset.serverTime);
console.log('Attribute value: %s', time.getAttribute('data-server-time'));
debugger;

// при удалении аттрибута, dataset изменяется
time.removeAttribute('data-server-time');

console.log('Data set value: %s', time.dataset.serverTime);
console.log('Attribute value: %s', time.getAttribute('data-server-time'));
debugger;