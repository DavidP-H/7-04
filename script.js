let day
let age

document.getElementById('button').addEventListener('click', checker)

function checker () {
  day = document.getElementById('input1').value
  age = document.getElementById('input2').value
  age = parseInt(age)
  if ((day === 'Tuesday' || day === 'Thursday') || (age > 12 && age < 21)) {
    document.getElementById('result').innerHTML = 'You are eligible!'
  } else {
    document.getElementById('result').innerHTML = 'You are not eligible.'
  }
}
