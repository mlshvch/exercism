//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  let cleanedNumber = number.replace(/[^0-9]+/g, '')

  if (number.replace(/[^a-zA-Z]+/g, '') !== '') {
    throw new Error('Letters not permitted')
  }

  if (cleanedNumber.length === 11) {
    if (cleanedNumber[0] === '1') {
      cleanedNumber = cleanedNumber.substring(1);
    } else {
      throw new Error('11 digits must start with 1')
    }
  }

  if (cleanedNumber.length < 10) {
    if (number.replace(/\d+/g, '') !== '') {
      throw new Error('Punctuations not permitted')
    } else {
      throw new Error('Incorrect number of digits')
    }
  } else if (cleanedNumber.length === 10) {
    if (cleanedNumber[0] === '0') {
      throw new Error('Area code cannot start with zero')
    } else if (cleanedNumber[0] === '1') {
      throw new Error('Area code cannot start with one')
    } else if (cleanedNumber[3] === '0') {
      throw new Error('Exchange code cannot start with zero')
    } else if (cleanedNumber[3] === '1') {
      throw new Error('Exchange code cannot start with one')
    }
  } else if (cleanedNumber.length >= 11) {
    throw new Error('More than 11 digits')
  }

  return cleanedNumber;
};
