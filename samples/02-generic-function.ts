// -- Generic function with a `ValueType` type parameter --

function logValueGeneric<ValueType>(city: ValueType) {
  console.log(city);
}

// -- Type parameter inference --
{
  logValueGeneric("London");
  logValueGeneric(123);
}

// -- Explicit type parameters --
{
  logValueGeneric<string>("London");
  logValueGeneric<number>(1_500_000);
}
