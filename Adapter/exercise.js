class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function area(rectangle)
{
  return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter
{
  constructor(square)
  {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

let sq = new Square(11);
let adapter = new SquareToRectangleAdapter(sq);
console.log(adapter.height, adapter.width);