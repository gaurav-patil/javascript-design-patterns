class Tag {
  constructor(name = "", text = "") {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  static get indentSize() {
    return 2;
  }

  toStringImpl(indent) {
    let html = [];
    let i = " ".repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(" ".repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push("\n");
    }

    for (let child of this.children) html.push(child.toStringImpl(indent + 1));

    html.push(`${i}</${this.name}>\n`);
    return html.join("");
  }

  toString() {
    return this.toStringImpl(0);
  }

  static create(name) {
    return;
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // non fluent add
  addChild(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  // fluent add
  addChildFluent(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  toString() {
    return this.root.toString();
  }

  clear() {
    this.root = new Tag(this.rootName);
  }

  build() {
    return this.root;
  }
}

const words = ["hello", "world"];

// no fluent
let builder = new HtmlBuilder("ul");
for (let word of words) builder.addChild("li", word);
let tags = builder.build();
console.log(tags.toString());

// fluent
builder.clear();
builder
  .addChildFluent("li", "foo")
  .addChildFluent("li", "baz")
  .addChildFluent("li", "baz");
console.log(builder.toString());
