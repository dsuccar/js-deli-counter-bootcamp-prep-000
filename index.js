var katzDeli = []

function takeANumber(katzDeli,Name){
  katzDeli.push(`${Name}`)
  return(`Welcome, ${Name}. You are number ${katzDeli.length} in line.`)
}


function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var nowServing = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${nowServing}.`;
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(line){
  if (line.length === 0)
  return `The line is currently empty`;
  else {

  }
}
