let temporaryValue = '';
let x = [];
let result = '';
let operatorCurrent = '';
let operatorSaved = [];
let resultInter = '';
let slicedValue = '';
let slicedResult = '';

let displayVal = document.getElementById('display');
let zeroButton = document.getElementById('zeroItem');

let numClicked = document.querySelector('.numContainer');
numClicked.addEventListener('click', tempValue);

function tempValue(e) {
  // console.log(e.target.innerHTML);
  if (e.target.innerHTML == 0 && temporaryValue == 0) {
    displayVal.innerHTML = '';
    temporaryValue = 0;
    displayVal.innerHTML = temporaryValue;
    console.log(temporaryValue);
    switchFunc();
  } else if (e.target.innerHTML == '.') {
    displayVal.innerHTML = '';
    temporaryValue = 0 + '.';
    displayVal.innerHTML = temporaryValue;
    console.log(temporaryValue);
    switchFunc();
  } else {
    displayVal.innerHTML = '';
    temporaryValue += e.target.innerHTML * 1;
    displayVal.innerHTML = temporaryValue.slice(0, 11);
    console.log(temporaryValue);
    switchFunc();
  }

  function switchFunc() {
    switch (operatorCurrent) {
      case '+':
        resultInter = x[x.length - 1] + temporaryValue * 1;
        break;
      case '-':
        resultInter = x[x.length - 1] - temporaryValue * 1;
        break;
      case '×':
        resultInter = x[x.length - 1] * temporaryValue * 1;
        break;
      case '÷':
        resultInter = (x[x.length - 1] / temporaryValue) * 1;
        break;
      case '=':
        resultInter;
        break;
    }

    console.log(resultInter);
  }
}

let doSomething = document.querySelector('.sidePanelContainer');
let addButton = document.getElementById('add');
let equalsButton = document.getElementById('equals');

doSomething.addEventListener('click', operate);

function operate(e) {
  x.push(temporaryValue * 1);
  console.log(slicedValue);
  slicedValue = x[x.length - 1].toString();
  console.log(slicedValue);
  displayVal.innerHTML = slicedValue.substring(0, 11);

  operatorCurrent = e.target.outerText; //delete  operatorSaved and only have one operator
  console.log(operatorCurrent);
  operatorSaved.push(operatorCurrent);
  console.log(operatorSaved);

  temporaryValue = '';
  console.log(x);

  doSomething.onclick = function () {
    x.push(resultInter * 1);
    slicedResult = resultInter.toString(); //needs to be string so it recognised by the if else logic

    if (slicedResult.length > 10) {
      console.log('penis');
      slicedResult = resultInter.toExponential(6);
      displayVal.innerHTML = slicedResult;
    } else {
      console.log('bobs');
      displayVal.innerHTML = slicedResult;
    }

    temporaryValue = '';
    console.log(x);
  };
}

let resetButton = document.getElementById('ac');
resetButton.addEventListener('click', reset);

function reset() {
  displayVal.innerHTML = 0;
  window.location = window.location; //had some problems with "resultInter" so I went for this alternative solution
  // resultInter = x[x.length -1];
  // x = [];
  // x.push(temporaryValue*1);
  console.log(x);
  console.log(temporaryValue);
  console.log(resultInter);
}

let percentageButton = document.getElementById('percentage');

percentageButton.onclick = function () {
  if (resultInter == '') {
    temporaryValue = temporaryValue / 100;
    displayVal.innerHTML = temporaryValue.toExponential(6);
  } else {
    resultInter = resultInter / 100;
    displayVal.innerHTML = resultInter.toExponential(6);
  }
};

let minusButton = document.getElementById('minus');

minusButton.onclick = function () {
  if (resultInter == '') {
    displayVal.innerHTML = temporaryValue * -1;
    temporaryValue = temporaryValue * -1;
  } else {
    displayVal.innerHTML = resultInter * -1;
    resultInter = resultInter * -1;
  }
};

//TODO

// operator toggle highligh
// keyboard support
// percentage button needs some more work .toExponential method looks ugly on that
