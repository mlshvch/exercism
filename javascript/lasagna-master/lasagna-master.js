/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * 
 * @param {number} remainingTIme 
 * @returns {string} result
 */

export function cookingStatus(remainingTIme) {
  switch (remainingTIme) {
    case 0:
      return 'Lasagna is done.'
    case undefined:
      return 'You forgot to set the timer.'
    default:
      return 'Not done, please wait.'
  }
}
