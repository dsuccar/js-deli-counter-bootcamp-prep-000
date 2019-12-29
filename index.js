var katzDeli = []

function takeANumber(deliPeople,Name){
  deliPeople.push(`${Name}`)
  return(`Welcome, ${Name}. You are number ${deliPeople.length} in line.`)
}

function nowServing (deliPeople){
  let i = 0
  while(i < deliPeople.length){
    i++
  }
  if (deliPeople >= 1) {
    return (`Currently serving ${deliPeople.shift}.`);
  }
  else {
    return ("Currently serving Steven.")
  }
}
