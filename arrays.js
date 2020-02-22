var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray () {
  var addElementToBeginningOfArray = ["foo", 1]
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray() {
  var destructivelyAddElementToBeginningOfArray = [ 1 ]
  destructivelyAddElementToBeginningOfArray = ['foo', ...destructivelyAddElementToBeginningOfArray]
  return destructivelyAddElementToBeginningOfArray
}
// COME BACK TO THIS

function addElementToEndOfArray() {
  var addElementToEndOfArray = ["foo", 1]
  return addElementToEndOfArray
}

function destructivelyAddElementToEndOfArray() {
  var destructivelyAddElementToEndOfArray = ["foo", 1]
}
