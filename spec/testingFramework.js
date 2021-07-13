'use strict';

function expect(actual) {
  return {

    toEqual: function(expected){
      if (actual == expected) {
        console.log('Pass')
      } else {
        console.log(`Fail - Expected: ${expected}  Got: ${actual}`)
      }
    }
  }
}


function it(label, callback) {
  console.log(`Test:${label}`)
  callback()
}

