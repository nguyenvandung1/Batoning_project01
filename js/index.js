// Count Number 
function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
      }
      callback(currentNumber)
    }
  }
  animateNumber(98, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('number1').innerText = formattedNumber
  })
  animateNumber(450, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('number2').innerText = formattedNumber
  })
  
  animateNumber(560, 10, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('number3').innerText = formattedNumber
  })
  
// Form
 
