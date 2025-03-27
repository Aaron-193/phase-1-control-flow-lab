function scuberGreetingForFeet(diveDepth){
  // Write your code here!
  if(diveDepth<=400) {
    return 'This one is on me!';
  } else if(diveDepth<2000 && diveDepth>400) {
    return 'That will be twenty bucks.';
  } else if(diveDepth>2000 && diveDepth<=2500) {
    return'I will gladly take your thirty bucks.';
  } else if(diveDepth>2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  if(cityName === 'NYC') {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}
scuberGreetingForFeet(199);
function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  if(tipAmount === 'generous') {
    return "Thank you so much.";
  } else if('not as generous') {
    return "Thank you.";
  } else {
    return 'Bye.'
  } 
}