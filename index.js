// define our empty recipes object to receive content
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  // assign the contents of the existing object to a new object, then add the new key and value to it, preserving the old object.
}
