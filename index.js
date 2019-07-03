// define our empty recipes object to receive content
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}