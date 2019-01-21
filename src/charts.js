window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Simple Column Chart with Index Labels"
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
          { x:1960,  y: null },
          { x:1965,  y: null},
          { x:1970,  y: null },
          { x:1975,  y: null },
          { x:1980,  y: null },
          { x:1985,  y: null },
          { x:1990,  y: null },
          { x:1991,  y: null },
          { x:1992,  y: null },
          { x:1993,  y: null },
          { x:1994,  y: null },
          { x:1995,  y: null },
          { x:1996,  y: null },
          { x:1997,  y: null },
          { x:1998,  y: null },
          { x:1999,  y: null },
          { x:2000,  y: null },
          { x:2001,  y: null },
          { x:2002,  y: 220  },
          { x:2003,  y: 298,  indexLabel: "Highest"},
          { x:2004,  y: 232  },
          { x:2005,  y: 297  },
          { x:2006,  y: 276  },
          { x:2007,  y: 222  },
          { x:2008,  y: 220  },
          { x:2009,  y: 227  },
          { x:2010,  y: 254  },
          { x:2011,  y: 232  },
          { x:2012,  y: 58  },
          { x:2013,  y: 196  },
          { x:2014,  y: 225  },
          { x:2015,  y: 165  },
          { x:2016,  y: null }
            ]
        }]
    });  
    }
  