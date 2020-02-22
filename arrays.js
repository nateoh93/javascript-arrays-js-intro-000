var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}
//destructivelyAddElementToBeginningOfArray(["one", "two", "three"], "four")
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
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
  var destructivelyRemoveElementFromBeginningOfArray = [1,2,3]
  destructivelyRemoveElementFromBeginningOfArray.shift()
  return destructivelyRemoveElementFromBeginningOfArray
}

function removeElementFromBeginningOfArray() {
  var removeElementFromBeginningOfArray = [1,2,3]

}
