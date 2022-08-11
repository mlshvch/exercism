//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (border) => {
  const RIGHT_BORDER_CODE = border.charCodeAt(0)
  const LEFT_BORDER_CODE = 'A'.charCodeAt(0)
  const STEPS = RIGHT_BORDER_CODE - LEFT_BORDER_CODE
  let result = []

  for (let i = 0; i <= STEPS; i++) {
    const STEP_UP = STEPS - i;
    const STEP_DOWN = STEPS + i;
    let data = []
    for (let j = STEPS; j >= 0; j--) {
      const LEFT_STEP = STEPS - j;
      const RIGHT_STEP = STEPS + j;
      if (i + j === STEPS) {
        data[LEFT_STEP] = data[RIGHT_STEP] = String.fromCharCode(LEFT_BORDER_CODE + j)
      } else {
        data[LEFT_STEP] = data[RIGHT_STEP] = ' '

      }

    }
    result[STEP_UP] = result[STEP_DOWN] = data.join('')

  }

  return result
  // for (let i = 0; i < LENGTH; i++) {
  //   let data = []
  //   if (Math.abs(MIDDLE - i) !== 0) {
  //     for (let j = 0; j < LENGTH; j++) {
  //       const LEFT_INDEX = (MIDDLE - i) % MIDDLE
  //       const RIGHT_INDEX = MIDDLE + i % MIDDLE
  //       if (j !== LEFT_INDEX && j !== RIGHT_INDEX) {
  //         data[j] = ' '
  //       } else if (RIGHT_INDEX === LEFT_INDEX) {
  //         data[LEFT_INDEX] = String.fromCharCode(LEFT_BORDER_CODE + i)
  //       } else {
  //         data[LEFT_INDEX] = data[RIGHT_INDEX] = String.fromCharCode(LEFT_BORDER_CODE + i)
  //       }
  //     }
  //   }
  //   console.log(data)
  //   result.push(data.join(''))
  // }
  // return result
};
