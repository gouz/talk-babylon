const gamepad = () => {
  window.addEventListener("gamepadconnected", () => {
    setInterval(() => {
      for (const gamepad of navigator.getGamepads()) {
        if (!gamepad) continue;
        for (const [index, axis] of gamepad.axes.entries()) {
          if (0 == index) {
            if (-1 == axis) {
              // console.log("left");
            } else if (1 == axis) {
              // console.log("right");
            }
          } else if (1 == index) {
            if (-1 == axis) {
              // console.log("up");
            } else if (1 == axis) {
              // console.log("down");
            }
          }
        }
        for (const [index, button] of gamepad.buttons.entries()) {
          if (button.pressed) {
            // console.log(button, index);
            if (12 == index) {
            } // ^
            else if (13 == index) {
            } // v
            else if (15 == index)
              window.slidesk.io.send(JSON.stringify({ action: "next" })); // ->
            else if (14 == index)
              window.slidesk.io.send(JSON.stringify({ action: "previous" }));
            // <-
            else if (6 == index)
              window.slidesk.io.send(JSON.stringify({ action: "next" })); // L2
            else if (7 == index)
              window.slidesk.io.send(JSON.stringify({ action: "previous" })); // R2
          }
        }
      }
    }, 500);
  });
};

gamepad();
