const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanArrayCreator = (s) => {
  if (s.search("IV") > 0) {
    return true;
  } else {
    return [...s];
  }
};

const romanToInteger = (s) => {
  let sum = 0;
  let tempArray = [];

  for (const element of [...s]) {
    sum += romanValues[element];
    //tempArray.push(romanValues[element]);
  }

  //console.log(sum);
};


//console.log(romanArrayCreator("IV"))

let text = "NathanDSD";
let n = text.search(/asdfasdnath/i);
console.log(n)

const App = () => {
  return (
    <div className="App">
      <h1>Leet</h1>
    </div>
  );
};

export default App;
