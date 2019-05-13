'use strict';

function printChart(chart, tabs = '') {
  if (typeof chart === 'string') {
    return;
  }

  const names = Object.keys(chart);

  names.forEach(name => {
    console.log(tabs + name);
    printChart(chart[name], tabs + '\t');
  });
  
}

const testChart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: 'Steve',
        Kyle: 'Kyle',
        Andra: 'Andra'
      },       
      Zhao: {
        Richie: 'Richie',
        Sofia: 'Sofia',
        Jen: 'Jen'
      }  
    },
    Schrage: {
      VanDyck: {
        Sabrina: 'Sabrina',
        Michelle: 'Michelle',
        Josh: 'Josh'
      },
      Swain: {
        Blanch: 'Blanch',
        Tom: 'Tom',
        Joe: 'Joe'
      } 
    },
    Sandberg: {
      Goler: {
        Eddie: 'Eddie',
        Julie: 'Julie',
        Annie: 'Annie'
      },
      Hernandez: {
        Rowi: 'Rowi',
        Inga: 'Inga',
        Morgan: 'Morgan'
      }, 
      Moissinac: {
        Amy: 'Amy',
        Chuck: 'Chuck',
        Vinni: 'Vinni'
      },       
      Kelley: {
        Eric: 'Eric',
        Ana: 'Ana',
        Wes: 'Wes'
      }
    }
  }
};

printChart(testChart);