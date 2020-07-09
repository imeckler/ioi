let interval = null;

let scale = 1;

// milliseconds
const iterationTime = 750;

const startFlashing = () => {
  if (interval === null) {
    interval = setInterval(() => {
      scale *= -1;
      document.getElementById('ioi').style.transform = `scaleY(${scale})`;
    }, iterationTime);
  }
};

const stopFlashing = () => {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
    document.getElementById('ioi').style.transform = null;
  }
};

const shouldBeFlashing = () => {
  return (window.innerWidth >= 900);
};

window.onresize = () => {
  if (shouldBeFlashing()) {
    startFlashing()
  } else {
    stopFlashing();
  }
};

window.onresize();
