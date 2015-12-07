var orders = document.querySelector('#orders');

orders.addEventListener('click', function (event) {
    var target = event.target.closest('.order');
    if (!target) {
        return;
    }

    event.preventDefault();

    console.log('Цена билета: %s', target.dataset.price);
}, false);


function addNew(pr) {
    var newOrder = orders.children[0].cloneNode(true);
    orders.appendChild(newOrder);
}

orders.children[0].addEventListener('click', function () {
    console.log('piu-piu');
});