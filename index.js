var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false
});
var app = {};

var option;

var data = [
  {
    name: "Lower",
    value: 15,
    itemStyle: {
      color: "#da1d23"
    },
    children: [
      {
        name: "20%",
        value: 15,
        itemStyle: {
          color: "#dd4c51"
        },
        children: [
          {
            name: "Lower Images",
            value: 5,
            itemStyle: {
              color: "#dd4c51"
            }
          },
          {
            name: "Lower Drafts",
            value: 5,
            itemStyle: {
              color: "#c94a44"
            }
          },
          {
            name: "Lower Texture",
            value: 5,
            itemStyle: {
              color: "#faef07"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Shoe",
    value: 15,
    itemStyle: {
      color: "#187a2f"
    },
    children: [
      {
        name: "20%",
        value: 15,
        itemStyle: {
          color: "#3aa255"
        },
        children: [
          {
            name: "Shoe Images",
            value: 5,
            itemStyle: {
              color: "#a2bb2b"
            }
          },
          {
            name: "Shoe Drafts",
            value: 5,
            itemStyle: {
              color: "#038549"
            }
          },
          {
            name: "Shoe Texture",
            value: 5,
            itemStyle: {
              color: "#7ac141"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Upper",
    value: 15,
    itemStyle: {
      color: "#0aa3b5"
    },
    children: [
      {
        name: "20%",
        value: 15,
        itemStyle: {
          color: "#76c0cb"
        },
        children: [
          {
            name: "Upper Images",
            value: 5,
            itemStyle: {
              color: "#def2fd"
            }
          },
          {
            name: "Upper Drafts",
            value: 5,
            itemStyle: {
              color: "#7a9bae"
            }
          },
          {
            name: "Upper Texture",
            value: 5,
            itemStyle: {
              color: "#039fb8"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Hat",
    value: 15,
    itemStyle: {
      color: "#ad213e"
    },
    children: [
      {
        name: "20%",
        value: 15,
        itemStyle: {
          color: "#b14d57"
        },
        children: [
          {
            name: "Hat Images",
            value: 5,
            itemStyle: {
              color: "#c78936"
            }
          },
          {
            name: "Hat Drafts",
            value: 5,
            itemStyle: {
              color: "#8c292c"
            }
          },
          {
            name: "Hat Texture",
            value: 5,
            itemStyle: {
              color: "#e5762e"
            }
          }
        ]
      }
    ]
  },
  {
    name: "Bag",
    value: 15,
    itemStyle: {
      color: "#e65832"
    },
    children: [
      {
        name: "20%",
        value: 15,
        itemStyle: {
          color: "#d45a59"
        },
        children: [
          {
            name: "Bag Images",
            value: 5,
            itemStyle: {
              color: "#ae341f"
            }
          },
          {
            name: "Bag Drafts",
            value: 5,
            itemStyle: {
              color: "#d78823"
            }
          },
          {
            name: "Bag Texture",
            value: 5,
            itemStyle: {
              color: "#da5c1f"
            }
          }
        ]
      }
    ]
  }
];
option = {
  title: {
    text: "",
    textStyle: {
      fontSize: 14,
      align: "center"
    },
    subtextStyle: {
      align: "center"
    },
    sublink: "https://worldcoffeeresearch.org/work/sensory-lexicon/"
  },
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "95%"],
    sort: undefined,
    emphasis: {
      focus: "ancestor"
    },
    levels: [
      {},
      {
        r0: "20%",
        r: "45%",
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: "tangential",
          fontSize: 20
        }
      },
      {
        r0: "45%",
        r: "55%",
        label: {
          align: "center",
          rotate: "tangential"
        },
        itemStyle: {
          borderWidth: 3
        }
      },
      {
        r0: "55%",
        r: "65%",
        label: {
          position: "outside",
          padding: 3,
          silent: false,
          fontSize: 15
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
