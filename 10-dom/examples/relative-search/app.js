
// поиск всех ссылок

var links = document.querySelectorAll('a');
console.log('Total links %d', links.length);
debugger;

// поиск ссылок по колонкам
var leftColumn = document.querySelector('.left');
var rightColumn = document.querySelector('.right');

var leftLinks = leftColumn.querySelectorAll('a');
var rightLinks = rightColumn.querySelectorAll('a');
console.log('left %d, right %d', leftLinks.length, rightLinks.length);





