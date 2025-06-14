# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1
```javascript
console.log("chandan")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});


```

## project 2 solution
```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const resultf = document.querySelector('#resultf');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      resultf.innerHTML = `<span> You are Under weight  </span>`;
    } else if (bmi > 18.6 || results < 24.9) {
      resultf.innerHTML = `<span> You are in Normal Range  </span>`;
    } else if (bmi > 24.9) {
      resultf.innerHTML = `<span> You are Over weight  </span>`;
    }
  }
});



```
