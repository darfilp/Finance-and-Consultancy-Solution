var carName = 'Ford'
var carYear = 2010
var personYear = 1990

function calculateAge(year) {
  var currentYear = 2018
  var result = currentYear - year
  return result
}

function checkAngLogAge(year, name, n) {
  if (calculateAge(year) < n) {
    console.log('Возраст меньше' + ' ' + n + 'лет' + name)
  } else {
    console.log('Возраст больше' + ' ' + n  + 'лет' + name)
  }
}

checkAngLogAge(carYear, 'машина', 6)
checkAngLogAge(personYear, 'человек', 6)