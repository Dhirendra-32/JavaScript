// creating function iterator

function nameiterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
    },
  };
}

// Create an array of names :

const namesArr = ["jack", "jill", "gill"];

// init the iterator and pass the array names

const names = nameiterator(namesArr);

console.log(names.next());
