function computeYearsAsleep(){
  var nameText = document.getElementById('name').value;
  var ageText = document.getElementById('age').value;
  var hoursText = document.getElementById('hours').value; 
  
  var outputTextBox = document.getElementById('output');
  
  var result = Math.round(ageText * (hoursText / 24));
  outputTextBox.innerText = 'Hi ' + nameText + 
              '. You have slept ' +  result + ' years of your life away';
}   