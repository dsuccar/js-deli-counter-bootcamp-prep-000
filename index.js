var katzDeli = []

function takeANumber(katzDeli,Name){
  katzDeli.push(`${Name}`)
  return(`Welcome, ${Name}. You are number ${katzDeli.length} in line.`)
}

function nowServing (katzDeli){
  let i = 0
  while(i < katzDeli.length){
    i++
  }
  if (katzDeli > 0) {
    return (`Currently serving ${katzDeli.shift}.`);
  }
  else if(katzDeli = 0){
    return ("There is nobody waiting to be served!")
  }


}
