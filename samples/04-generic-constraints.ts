// -- Generic constraints (extends) --

type City = {
  name: string;
  country: string;
};

function logCityName<CityType extends City>(city: CityType) {
  console.log(city.name);
}

logCityName({
  name: "Madrid",
  country: "Spain",
});

// Error: Argument of type 'number' is not assignable to parameter of type 'City'. TS2345.
logCityName(123);
