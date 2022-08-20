// @ts-check

/**
 * Concatenates array elements into final number.
 * 
 * @param {number[]} array
 * @returns {number} final number
 * 
 */

export function arrayToNumber(array) {
  let number = ''
  for (let elem in array) {
    number += String(array[elem]);
  }
  return Number(number);
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrayToNumber(array1) + arrayToNumber(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let data = String(value).split("");
  if (data.length === 1) {
    return true;
  }

  const mid = Math.ceil(data.length / 2);
  const leftSide = data.slice(0, mid).join("");
  const rightSide = data.slice(-mid).reverse().join("");
  return leftSide === rightSide;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const data = Number(input);
  if (data) {
    return '';
  } else {
    switch (input) {
      case undefined:
        return 'Required field';
      case null:
        return 'Required field';
      case '':
        return 'Required field';
      default:
        return 'Must be a number besides 0';
    }
  }
}
