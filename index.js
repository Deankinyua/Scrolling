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

container.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${container.scrollTop}`;
  paragraph4.textContent = `Element height: ${container.clientHeight}`;
  windowheight = rootElement.clientHeight;
  console.log("windowheight:" + windowheight);
});
