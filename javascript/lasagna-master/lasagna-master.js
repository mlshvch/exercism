/// <reference path="./global.d.ts" />

import exp from "constants";

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

/**
 * 
 * @param {string[]} layers 
 * @param {number} time 
 * @returns {number} ETA
 */

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

/**
 * 
 * @param {string[]} layers 
 * @returns {object} object with keys 'noodles' and 'sauce'
 */

export function quantities(layers) {
  const noodlesPerLayer = 50;
  const saucePerLayer = 0.2;
  let result = {
    noodles: 0,
    sauce: 0
  }
  for (let index in layers) {
    switch (layers[index]) {
      case 'sauce':
        result.sauce += saucePerLayer;
        break;
      case 'noodles':
        result.noodles += noodlesPerLayer;
        break;
    }
  }
  return result;
}

/**
 * 
 * @param {string[]} friendsList 
 * @param {string[]} myList 
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * 
 * @param {object} recipe 
 * @param {number} numberOfPortions 
 * @returns {object}
 */

export function scaleRecipe(recipe, numberOfPortions) {
  const coefficient = numberOfPortions / 2;
  let scaledRecipe = {};
  for (let item in recipe) {
    scaledRecipe[item] = recipe[item] * coefficient;
  }
  return scaledRecipe;
}
