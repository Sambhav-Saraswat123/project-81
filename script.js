const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext("2d");
const colors = [
    "blue",
    "yellow",
    "black",
    "green",
    "red"
];
// blue
ctx.beginPath();
ctx.strokeStyle = colors[0];
ctx.lineWidth = 6;
ctx.arc(90, 60, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
// black
ctx.beginPath();
ctx.strokeStyle = colors[2];
ctx.lineWidth = 6;
ctx.arc((90 + 50), 60, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
// red
ctx.beginPath();
ctx.strokeStyle = colors[4];
ctx.lineWidth = 6;
ctx.arc(190, 60, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
// yellow
ctx.beginPath();
ctx.strokeStyle = colors[1];
ctx.lineWidth = 6;
ctx.arc(115, 80, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
// green
ctx.beginPath();
ctx.strokeStyle = colors[3];
ctx.lineWidth = 6;
ctx.arc(165, 80, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();