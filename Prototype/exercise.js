class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    let newStart = new Point(this.start.x, this.start.y);
    let newEnd = new Point(this.end.x, this.end.y);
    return new Line(newStart, newEnd);
  }
}

let line1 = new Line(new Point(3, 3), new Point(10, 10));

let line2 = line1.deepCopy();

line1.start.x = line1.start.y = line1.end.x = line1.end.y = 0;

console.log(line1);
console.log(line2);
