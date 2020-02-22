var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray () {
  var addElementToBeginningOfArray = [1]
  addElementToBeginningOfArray.unshift("foo")
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray() {
  var destructivelyAddElementToBeginningOfArray = [1]
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
///COME BACK TO THIS

function accessElementInArray () {
  var accessElementInArray = [0, 1, 2, 3]
  return accessElementInArray[3]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  var destructivelyRemoveElementFromBeginningOfArray = [0,1,2,3]
  destructivelyRemoveElementFromBeginningOfArray.shift()
  return destructivelyRemoveElementFromBeginningOfArray
}
