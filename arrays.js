var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray () {
  var addElementToBeginningOfArray = ["foo", 1]
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray() {
  var destructivelyAddElementToBeginningOfArray = [1]
  ///destructivelyAddElementToBeginningOfArray = ["foo", ...destructivelyAddElementToBeginningOfArray]
  destructivelyAddElementToBeginningOfArray.unshift("foo")
  
  return destructivelyAddElementToBeginningOfArray
}
// COME BACK TO THIS

function addElementToEndOfArray() {
  var addElementToEndOfArray = [1]
  addElementToEndOfArray.push("foo")
  return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray() {
  var destructivelyAddElementToEndOfArray = [1]
  destructivelyAddElementToEndOfArray.push("foo")
  return destructivelyAddElementToEndOfArray
}
