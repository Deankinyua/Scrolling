// paragraph2 = document.getElementById("text");

// paragraph2.addEventListener("scroll", () => {
//   scrolltop = paragraph2.clientHeight;
//   let y = paragraph2.scrollTop;
//   console.log("clientheight:" + scrolltop);
//   console.log("Scroll top value is:" + y);
// });
// const rootElement = document.documentElement;

// const container = document.querySelector("#container");
// const output = document.querySelector("#output");
// const paragraph4 = document.querySelector("#elem");
// const scrollheight = document.querySelector("#scrollheight");
// const scrollableheight = document.querySelector("#scrollableheight");
// const wrapper = document.querySelector(".wrapper");

// container.addEventListener("scroll", (event) => {
// heightscrollable = rootElement.scrollHeight - window.innerHeight;
// output.textContent = `scrollTop: ${container.scrollTop}`;
// paragraph4.textContent = `Element height: ${container.clientHeight}`;
// scrollheight.textContent = `scroll height: ${container.scrollHeight}`;
// scrollableheight.textContent = `scrollable height: ${heightscrollable}`;
// windowheight = rootElement.clientHeight;
// console.log("windowheight:" + window.innerHeight);
// console.log("window scroll top:" + rootElement.scrollTop);
// console.log("content length " + rootElement.scrollHeight);
// console.log(" height scrollable: " + heightscrollable);

let scrollAt = () => {
  // scrolltop is zero on the top of page
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // scrollheight remains constant as one scrolls
  let scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  // clientheight remains constant as one scrolls
  let clientHeight = document.documentElement.clientHeight;

  // scrolltop increases as user scrolls to the botttom
  console.log("scroll top: " + scrollTop);
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
  //   scrolltop will be the same as the difference between
  //   the two when client reaches bottom of the page
};

window.addEventListener("scroll", () => {
  console.log(scrollAt());
});

// });
