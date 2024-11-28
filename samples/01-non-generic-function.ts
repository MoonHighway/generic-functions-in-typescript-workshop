// -- Non-generic function --

function logValue(city: string) {
  console.log(city);
}

logValue("London");

// Error: Argument of type 'number' is not assignable to parameter of type 'string'. TS2345.
logValue(1_500_000);
