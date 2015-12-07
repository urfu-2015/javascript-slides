function addNewInputs (count) {
    var inputs = document.createDocumentFragment();

    for(var i = 0; i < count; i ++) {
        var input = document.createElement('input');
        inputs.appendChild(input);
    }

    document.body.appendChild(inputs);
}

var children = document.querySelectorAll('input');
console.log(children.length);
debugger;
addNewInputs(10);
console.log(children.length);
debugger;
addNewInputs(10);
console.log(children.length);
debugger;
addNewInputs(22);
console.log(children.length);
debugger;


