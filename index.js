function scuberGreetingForFeet(distance){
  if (distance < 400){
    return 'This one is on me!'
  }
  else if (distance > 400 && distance <= 2000){
    return 'That will be twenty bucks.'
  }
  else if (distance >= 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(NYC) {
  return (NYC ? 'Ok, sounds good.'  :  'No go.');
}

console.log(ternaryCheckCity(true));

console.log(ternaryCheckCity(false));


function switchOnCharmFromTip(){
  // Write your code here!
}