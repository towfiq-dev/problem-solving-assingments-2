let towfiqMarks = 90
let ireenMarks = 89
let saifulMarks = 75
let jahidMarks = 95

if(towfiqMarks>ireenMarks && towfiqMarks>saifulMarks && towfiqMarks>jahidMarks){
  console.log('Towfiq is the biggest mark')
}
else if(ireenMarks>towfiqMarks && ireenMarks>saifulMarks && ireenMarks>jahidMarks){
  console.log("Ireen is the biggest Mark")
}
else if(saifulMarks>towfiqMarks && saifulMarks>ireenMarks && saifulMarks>jahidMarks){
  console.log('Saiful is the biggest Mark')
}
else{
  console.log('Jahid is the biggest Mark');
  
}

function maxMarks(towfiqMarks, ireenMarks, saifulMarks, jahidMarks){
if(towfiqMarks>ireenMarks && towfiqMarks>saifulMarks && towfiqMarks>jahidMarks){
  return towfiqMarks
}
else if(ireenMarks>towfiqMarks && ireenMarks>saifulMarks && ireenMarks>jahidMarks){
  return ireenMarks
}
else if(saifulMarks>towfiqMarks && saifulMarks>ireenMarks && saifulMarks>jahidMarks){
  return saifulMarks
}
else{
  return jahidMarks
}
}
let result = maxMarks(90, 89, 75, 95)
console.log(result);
