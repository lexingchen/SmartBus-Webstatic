const ctx = document.getElementById("myChart");
const labels = [
  "6:00",
  "8:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
]; // 设置 X 轴上对应的标签
const data = {
  labels: labels,
  datasets: [
    {
      label: "线路等站人数",
      data: [10, 33, 25, 40, 51, 15, 30, 21],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "线路运输人数",
      data: [10, 32, 25, 36, 45, 12, 20, 20],
      fill: false,
      borderColor: "rgb(175, 92, 92)",
      tension: 0,
      showLine: true,
    },
  ],
};
const config = {
  type: "line", // 设置图表类型
  data: data,
};
const myChart = new Chart(ctx, config);
// 柱状图

const ctx2 = document.getElementById("myChart2");

const data2 = {
  labels: labels,
  datasets: [
    {
      label: "在线车辆",
      data: [3, 3, 4, 6, 3, 3, 4, 1],
      backgroundColor: [
        // 设置每个柱形图的背景颜色
        "rgba(75, 192, 192, 0.2)",
      ],
      borderWidth: 1, // 设置线条宽度
    },
    {
      label: "在线驾驶员",
      data: [2, 4, 4, 6, 3, 3, 5, 1],
      backgroundColor: [
        // 设置每个柱形图的背景颜色
        "rgba(255, 99, 132, 0.2)",
      ],
      borderWidth: 1, // 设置线条宽度
    },
  ],
};
const config2 = {
  type: "bar", // 设置图表类型
  data: data2, // 设置数据集
  options: {
    scales: {
      y: {
        beginAtZero: true, // 设置 y 轴从 0 开始
      },
    },
  },
};
const myChart2 = new Chart(ctx2, config2);
