// First solution
// Methods in an object
const StringExtras = {
  repeat (str, n) {
    let out = '';
    for (let i = 0; i < n; i++) {
      out += str;
    }
    return out;
  },
  leftPad (str, n) {
    return this.repeat(' ', n) + str;
  },
  rightPad (str, n) {
    return str + this.repeat(' ', n);
  },
  pad (str, n) {
    return this.leftPad(this.rightPad(str, n), n);
  },
  capitalize (str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }
}

// Stretch solution
// String will be this
const StringExtras = {
  repeat (n) {
    let out = '';
    for (let i = 0; i < n; i++) {
      out += this;
    }
    return out;
  },
  leftPad (n) {
    return ' '.repeat(n) + this;
  },
  rightPad (n) {
    return this + ' '.repeat(n);
  },
  pad (n) {
    return this.leftPad(n).rightPad(n);
  },
  capitalize () {
    return this.slice(0,1).toUpperCase() + this.slice(1);
  }
}

/* All methods of StringExtras are added to String */
Object.assign(String.prototype, StringExtras)

/* leftPad and friends can now be used as if it was a core library method,
 * like so: */

'bob'.leftPad(5);
'rob'.pad(3);
'rob'.capitalize();