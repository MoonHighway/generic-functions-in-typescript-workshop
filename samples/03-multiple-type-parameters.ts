// -- Multiple type parameters --

function logValues<ValueType1, ValueType2>(
  value1: ValueType1,
  value2: ValueType2
) {
  console.log(value1);
  console.log(value2);
}

logValues("London", 123);
