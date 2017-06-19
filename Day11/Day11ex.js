// const counter = {
//   count: 0,
//   step: 1,
//   inc(step=1) { this.count += step },
//   dec() { this.count -= step },
//   set(n) { this.count = n },
//   setStep(n) { this.step = n },
//   now() { return this.count; },
//   reset() { this.count = 0; this.step = 1 },
//   stepnow() { return this.step; }

// };
const counter = {
  count: 0,
  step: 1,
  // inc = function () {}
  inc(step=1) { this.count += this.step },
  dec() { this.count -= this.step },
  set(n) { this.count = n },
  setStep(n) { this.step = n },
  now() { return this.count; },
  reset() { this.count = 0; this.step = 1 },
  stepnow() { return this.step; }

};

counter.now();
counter.set(5);
counter.setStep(2);
counter.dec();
console.log(counter.now());
console.log(counter.stepnow());