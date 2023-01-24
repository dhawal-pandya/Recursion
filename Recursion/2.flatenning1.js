const ob = {
  layer1: {
    layer2: {
      layer3: {
        layer4: {
          layer5: {
            name: 'Albus',
          },
        },
      },
    },
  },
};

// finalObj = { name: 'Albus' };

// Only recursion can solve it, not by any type of looping.

let finalObj = {};
const flatter = (obj) => {
  //
  const keyList = Object.keys(obj);
  const firstKey = keyList[0];
  //
  if (typeof obj[firstKey] === 'object') {
    flatter(obj[firstKey]);
  } else {
    finalObj[firstKey] = obj[firstKey];
  }
  return finalObj;
};

console.log(flatter(ob));
