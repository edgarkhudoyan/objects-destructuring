// Write object.keys, object.values and object.entries methods using for..in
const obj = {
  name: 'John',
  age: 30,
  job: 'Developer',
  isAdmin: true,
};

// Object.keys
for (let property in obj) {
  console.log(Object.keys(obj));
}

// Object.values
for (let values in obj) {
  console.log(Object.values(obj));
}

//Object.entries
for (let entries in obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}
