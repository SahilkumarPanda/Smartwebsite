window.onload = function () {
  CanvasJS.addColorSet("greenShades", ["#013627", "#68EFC8", "#008B69", "#28BC97", "#C9FFEF"]);
  var chart = new CanvasJS.Chart("chartContainer", {
      colorSet: "greenShades",
      title: {
          text: ""
      },
      toolTip: {
          backgroundColor: "#013627",
          fontColor: "white"
      },

      axisX: {
          title: "",
          tickLength: 0,
          margin: 0,
          lineThickness: 0,
          valueFormatString: " " //comment this to show numeric values
      },
      axisY: {
          title: "",
          tickLength: 0,
          lineThickness: 0,
          gridThickness: 0,
          margin: 0,
          valueFormatString: " " //comment this to show numeric values
      },
      dataPointMinWidth: 32,

      data: [{
              type: "stackedBar",
              toolTipContent: "APP: (#percent%)",
              dataPoints: [{
                      x: new Date(2012, 05, 1),
                      y: 95
                  }

              ]
          },
          {
              type: "stackedBar",
              toolTipContent: "APP: (#percent%)",
              dataPoints: [{
                      x: new Date(2012, 05, 1),
                      y: 95
                  }

              ]
          },
          {
              type: "stackedBar",
              toolTipContent: " APP: (#percent%)",
              dataPoints: [{
                      x: new Date(2012, 05, 1),
                      y: 95
                  }

              ]
          },

          {
              type: "stackedBar",
              toolTipContent: "APP: (#percent%)",
              dataPoints: [{
                      x: new Date(2012, 05, 1),
                      y: 105
                  }

              ]
          },
          {
              type: "stackedBar",
              toolTipContent: "APP: (#percent%)",
              dataPoints: [{
                      x: new Date(2012, 05, 1),
                      y: 25
                  }

              ]
          }

      ]
  });
  chart.render();
  var chart = new CanvasJS.Chart("chartContainer1", {
    colorSet: "greenShades",
    title: {
        text: ""
    },
    toolTip: {
        backgroundColor: "#013627",
        fontColor: "white"
    },

    axisX: {
        title: "",
        tickLength: 0,
        margin: 0,
        lineThickness: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    axisY: {
        title: "",
        tickLength: 0,
        lineThickness: 0,
        gridThickness: 0,
        margin: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    dataPointMinWidth: 32,

    data: [{
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },
        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },
        {
            type: "stackedBar",
            toolTipContent: " APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },

        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 105
                }

            ]
        },
        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 25
                }

            ]
        }

    ]
});
chart.render();

  var chart = new CanvasJS.Chart("chartContainer2", {
    colorSet: "greenShades",
    title: {
        text: ""
    },
    toolTip: {
        backgroundColor: "#013627",
        fontColor: "white"
    },

    axisX: {
        title: "",
        tickLength: 0,
        margin: 0,
        lineThickness: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    axisY: {
        title: "",
        tickLength: 0,
        lineThickness: 0,
        gridThickness: 0,
        margin: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    dataPointMinWidth: 32,

    data: [{
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },
        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },
        {
          type: "stackedBar",
          toolTipContent: "APP: (#percent%)",
          dataPoints: [{
                  x: new Date(2012, 05, 1),
                  y: 95
              }

          ]
      },
        
        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 25
                }

            ]
        }

    ]
});
  chart.render();
  var chart = new CanvasJS.Chart("chartContainer3", {
    colorSet: "greenShades",
    title: {
        text: ""
    },
    toolTip: {
        backgroundColor: "#013627",
        fontColor: "white"
    },

    axisX: {
        title: "",
        tickLength: 0,
        margin: 0,
        lineThickness: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    axisY: {
        title: "",
        tickLength: 0,
        lineThickness: 0,
        gridThickness: 0,
        margin: 0,
        valueFormatString: " " //comment this to show numeric values
    },
    dataPointMinWidth: 32,

    data: [{
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 95
                }

            ]
        },
                
        {
            type: "stackedBar",
            toolTipContent: "APP: (#percent%)",
            dataPoints: [{
                    x: new Date(2012, 05, 1),
                    y: 25
                }

            ]
        }

    ]
});
  chart.render();
}