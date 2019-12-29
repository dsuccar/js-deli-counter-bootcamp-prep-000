var katzDeli = []

function takeANumber(deliLine,Name){
  deliLine.push(`${Name}`)
  return(`Welcome, ${Name}. You are number ${deliLine.length} in line.`)
}

function nowServing (deliLine){
  let i = 0
  while(i < deliLine.length){
    i++
  }
  if (deliLine >=1) {
    return (`currently serving ${deliLine}.`);
  }
  
    
  } {
    return ("There is nobody waiting to be served!")
  }
}
