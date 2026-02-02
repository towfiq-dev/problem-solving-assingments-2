function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
  let chairWood = 3
  let tableWood = 10
  let bedWood = 50
  
  let chairTotalWood = chairQuantity*chairWood
  let tableTotalWood = tableQuantity*tableWood
  let bedTotalWood = bedQuantity*bedWood
  
  let totalWood = chairTotalWood + tableTotalWood + bedTotalWood
  return totalWood
}
let wood = woodQuantity(0, 0, 1)
console.log(wood)