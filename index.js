// paragraph2 = document.getElementById("text");
const rootElement = document.documentElement;

// paragraph2.addEventListener("scroll", () => {
//   scrolltop = paragraph2.clientHeight;
//   let y = paragraph2.scrollTop;
//   console.log("clientheight:" + scrolltop);
//   console.log("Scroll top value is:" + y);
// });

const container = document.querySelector("#container");
const output = document.querySelector("#output");
const paragraph4 = document.querySelector("#elem");
const scrollheight = document.querySelector("#scrollheight");
const scrollableheight = document.querySelector("#scrollableheight");
const wrapper = document.querySelector(".wrapper");

// container.addEventListener("scroll", (event) => {
heightscrollable = rootElement.scrollHeight - window.innerHeight;
output.textContent = `scrollTop: ${container.scrollTop}`;
paragraph4.textContent = `Element height: ${container.clientHeight}`;
scrollheight.textContent = `scroll height: ${container.scrollHeight}`;
scrollableheight.textContent = `scrollable height: ${heightscrollable}`;
windowheight = rootElement.clientHeight;
console.log("windowheight:" + windowheight);
console.log(rootElement.scrollHeight);
console.log(heightscrollable);
// });
