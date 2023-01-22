function createCounter(initialValue) {
  return {
    counter: initialValue,
    get: function() {
      return this.counter;
    },
    increment: function() {
      this.counter++;
    },
    decrement: function() {
      this.counter--;
    },
    reset: function() {
      this.counter = initialValue;
    },
  };
}