<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer :  </b></summary>
<p>

#### Answer: A

<i>Because This is because an empty object {} is assigned to the variable greeting, and then greeting is logged to the console, which displays the empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer   </b></summary>
<p>

#### Answer: B

<i>because  the function is designed to perform addition, this operation is not valid, and JavaScript will throw a TypeError</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer   </b></summary>
<p>

#### Answer: A

<i>Because The info.favoriteFood is initially assigned the first element of the food array, which is 🍕. However, later it is reassigned to 🍝. However, this reassignment does not modify the food array itself. The console.log(food) statement only prints the food array, and since it has not been modified, the output will remain the same.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer </b></summary>
<p>

#### Answer: B

<i>because The function sayHi expects an argument name, but when you call sayHi() without providing an argument, name inside the function becomes undefined. Therefore, the returned string will be "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The forEach method iterates over each element in the nums array. In this case, it's counting the number of truthy values (non-zero numbers) in the array. Out of the four elements in the array [0, 1, 2, 3], only 1, 2, and 3 are truthy, so the count will be 3</i>

</p>
</details>
