let towfiqMarks = 85
let saifulMarks = 75
if(towfiqMarks>saifulMarks){
  console.log('Towgiq is the best')
}
else{
  console.log('Saiful is the best')
}

function maxmarks (marks1, marks2){
if(marks1>marks2){
  return marks1

}
else{
  return marks2
}
}
let result = maxmarks(85, 75)
console.log(result)