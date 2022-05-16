const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export const changeColor = function () {
  let arrayColorIndex = 0;

  return function () {
    this.style.color = colors[arrayColorIndex];

    arrayColorIndex++;

    if (arrayColorIndex >= colors.length) {
      arrayColorIndex = 0;
    }
  };
};
