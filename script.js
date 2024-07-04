document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.querySelector("#left");
  const rightButton = document.querySelector("#right");

  const scrolly = document.querySelector("ul");
  const lastElement = document.querySelector("li:last-child");

  const items = document.querySelectorAll("li");

  leftButton.addEventListener("click", () => {
    const widthItem = items[0].offsetWidth;
    if (scrolly.scrollLeft < widthItem) {
      scrolly.scrollLeft = lastElement.offsetLeft;
      return;
    }
    scrolly.scrollLeft -= widthItem;
  });

  rightButton.addEventListener("click", () => {
    const widthItem = items[0].offsetWidth;
    if (scrolly.scrollLeft + scrolly.offsetWidth >= lastElement.offsetLeft) {
      scrolly.scrollLeft = 0;
      return;
    }

    scrolly.scrollLeft += widthItem;
  });
});
