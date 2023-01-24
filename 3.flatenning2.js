const names = {
  name1: {
    ActualName: 'Dhawal',
    Tricks: {
      Unreversed: {
        capitalised: {
          Greek: {
            nameGre: 'ALBUS',
          },
          Japanese: {
            nameJap: 'SHIROI',
          },
        },
        uncapitalised: {
          Greek: {
            nameGre: 'albus',
          },
          Japanese: {
            nameJap: 'shiroi',
          },
        },
      },

      Reversed: {
        capitalised: {
          Greek: {
            nameGre: 'SUBLA',
          },
          Japanese: {
            nameJap: 'IORIHS',
          },
        },
        uncapitalised: {
          Greek: {
            nameGre: 'subla',
          },
          Japanese: {
            nameJap: 'iorihs',
          },
        },
      },
    },
  },
  name2: {
    ActualName: 'Viral',
    Tricks: {
      Unreversed: {
        capitalised: {
          Greek: {
            nameGre: 'EXIMIUS',
          },
          Japanese: {
            nameJap: 'ERAI',
          },
        },
        uncapitalised: {
          Greek: {
            nameGre: 'eximius',
          },
          Japanese: {
            nameJap: 'erai',
          },
        },
      },

      Reversed: {
        capitalised: {
          Greek: {
            nameGre: 'SUIMIXE',
          },
          Japanese: {
            nameJap: 'IARE',
          },
        },
        uncapitalised: {
          Greek: {
            nameGre: 'suimixe',
          },
          Japanese: {
            nameJap: 'iare',
          },
        },
      },
    },
  },
  error: null,
};

// finalObj = {
//   names_name1_ActualName: 'Dhawal',
//   names_name1_Tricks_Unreversed_capitalised_Greek_nameGre: 'ALBUS',
//   names_name1_Tricks_Unreversed_capitalised_Japanese_nameJap: 'SHIROI',
//   names_name1_Tricks_Unreversed_uncapitalised_Greek_nameGre: 'albus',
//   names_name1_Tricks_Unreversed_uncapitalised_Japanese_nameJap: 'shiroi',
//   names_name1_Tricks_Reversed_capitalised_Greek_nameGre: 'SUBLA',
//   names_name1_Tricks_Reversed_capitalised_Japanese_nameJap: 'IORIHS',
//   names_name1_Tricks_Reversed_uncapitalised_Greek_nameGre: 'subla',
//   names_name1_Tricks_Reversed_uncapitalised_Japanese_nameJap: 'iorihs',
//   names_name2_ActualName: 'Viral',
//   names_name2_Tricks_Unreversed_capitalised_Greek_nameGre: 'EXIMIUS',
//   names_name2_Tricks_Unreversed_capitalised_Japanese_nameJap: 'ERAI',
//   names_name2_Tricks_Unreversed_uncapitalised_Greek_nameGre: 'eximius',
//   names_name2_Tricks_Unreversed_uncapitalised_Japanese_nameJap: 'erai',
//   names_name2_Tricks_Reversed_capitalised_Greek_nameGre: 'SUIMIXE',
//   names_name2_Tricks_Reversed_capitalised_Japanese_nameJap: 'IARE',
//   names_name2_Tricks_Reversed_uncapitalised_Greek_nameGre: 'suimixe',
//   names_name2_Tricks_Reversed_uncapitalised_Japanese_nameJap: 'iare'
// }

let finalObj = {};
const flatter = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key]) {
      flatter(obj[key], parent + '_' + key);
    } else {
      finalObj[parent + '_' + key] = obj[key];
    }
  }
};

flatter(names, 'names');

console.log(finalObj);
