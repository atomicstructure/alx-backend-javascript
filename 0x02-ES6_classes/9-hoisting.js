const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export default class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }
}

const student1 = new HolbertonStudent('Guillaume', 'Salva', class2020);
const student2 = new HolbertonStudent('John', 'Doe', class2020);
const student3 = new HolbertonStudent('Albert', 'Clinton', class2019);
const student4 = new HolbertonStudent('Donald', 'Bush', class2019);
const student5 = new HolbertonStudent('Jason', 'Sandler', class2019);


export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(newFullName) {
    const names = newFullName.split(' ');
    this._firstName = names[0];
    this._lastName = names[1];
  }

  toString() {
    return this.fullName;
  }

  valueOf() {
    return this.fullName;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.fullName;
    }
    return this.fullName.length;
  }

  [Symbol.iterator]() {
    const names = this.fullName.split(' ');
    let index = 0;
    return {
      next() {
        if (index < names.length) {
          return { value: names[index++], done: false };
        }
        return { done: true };
      },
    };
  }
}
