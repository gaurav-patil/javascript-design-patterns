class Field {
  constructor(name) {
    this.name = name;
  }
}

class Class {
  constructor(name) {
    this.name = name;
    this.fields = [];
  }

  toString() {
    let code = [];
    code.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      code.push(`  constructor(`);
      for (let i = 0; i < this.fields.length; ++i) {
        code.push(this.fields[i].name);
        if (i + 1 !== this.fields.length) {
          code.push(`,  `);
        }
      }
      code.push(`) {\n`);
      for (let field of this.fields) {
        code.push(`    this.${field.name} = ${field.name};\n`);
      }
      code.push(`  }\n`);
    }
    code.push("}");
    return code.join("");
  }
}

class CodeBuilder {
  constructor(className) {
    this._class = new Class(className);
  }

  addField(name) {
    this._class.fields.push(new Field(name));
    return this;
  }

  toString() {
    return this._class.toString();
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
