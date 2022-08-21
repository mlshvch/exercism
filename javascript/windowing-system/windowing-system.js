// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.size = new Size;
    this.screenSize = new Size(800, 600);
    this.position = new Position;
  }

  resize(size) {
    if (size.height < 1) {
      size.height = 1;
    }
    if (size.width < 1) {
      size.width = 1;
    }
    this.size = size;
  }
}
