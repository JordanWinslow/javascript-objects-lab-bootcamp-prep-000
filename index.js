// define our empty recipes object to receive content
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  let updatedRecipe = Object.assign(object, key, value)
  return updatedRecipe
}