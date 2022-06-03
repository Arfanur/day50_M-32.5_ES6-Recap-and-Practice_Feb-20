// Destructuring in Arrays
// const [var1, var2, ...] = arrayName
// In arrays where we can use any variable name to unpack the element

// Assign variable with destructuring
// const edibles = ["food", "fruits"];
// const edibles2 = ["rice", "potato", "sugercane", ["egg", "fish"]];
// const [first, second] = edibles;
// const [first2, second2, third2, [nested1, nested2]] = edibles2;
// console.log(first, second);
// console.log(first2, third2, nested2);

// Swap Variables with Destructuring        Note that: This method of swapping variables doesn't mutate the original array.
// const edibles = ["food", "fruits"];
// let [positionOne, positionTwo] = edibles;
// [positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);

// Mutate Arrays with Destructuring
// const edibles = ["food", "fruits"];
// const edibles2 = ["rice", "potato", "sugercane", ["egg", "fish"]];
// [edibles[0], edibles[1]] = [edibles[1], edibles[0]];
// console.log(edibles);
// [edibles2[0], edibles2[1], edibles2[2]] = [edibles2[2], edibles2[0], edibles2[1]];
// console.log(edibles2);
