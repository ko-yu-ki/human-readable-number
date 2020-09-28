const readable = { '0': '',
    '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',  '10': 'ten',
    '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen',
    '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen',
    '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty',
    '50': 'fifty', '60': 'sixty', '70': 'seventy', '80': 'eighty',
    '90': 'ninety', '100': 'one hundred', '1000': 'one thousand',
}
const tens = ['', '', 'hundred', 'thousand'];

module.exports = function toReadable (number) {

    // х_Х
  if (number === 0) return 'zero';
  if (number+'' in readable) {return readable[number+''];}
  let str = number+'';
  let result = '';
    
  if (number % Math.pow(10, str.length-1) < 20 && str.length-1 > 1) {
    result = readable[(number - number % Math.pow(10, str.length-1))/Math.pow(10, str.length-1)]+' ' +
    tens[str.length-1] +' '+ readable[number % Math.pow(10, str.length-1)];
    return result.trim();
  }
  
  let array = new Array;
  array = str.split('').reverse();
  
  for (let  i=array.length-1; i >= 0; i--) {
    if ((+array[i]*Math.pow(10, i))+'' in readable) {
      result += readable[(+array[i]*Math.pow(10, i))+''] + ' ';
    } else {
      result += readable[array[i]] + ' ' + tens[i] + ' ';
    }
  }  
  return result.trim();
}

