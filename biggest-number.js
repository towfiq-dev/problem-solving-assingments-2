let highest = [12,32,23,42,54,13,53,64,55,23,75,75,86,35,86,89]
function getMax(numbers){
  let max = numbers[0]
  for(number of numbers){
    if(number>max){
      max = number
    }
  }
return max
}
let max = getMax(highest)
console.log(max)