var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray () {
  var addElementToBeginningOfArray = ["foo", 1]
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray() {
  var destructivelyAddElementToBeginningOfArray = [1]
  destructivelyAddElementToBeginningOfArray = ['foo',...destructivelyAddElementToBeginningOfArray]
  return destructivelyAddElementToBeginningOfArray
}
