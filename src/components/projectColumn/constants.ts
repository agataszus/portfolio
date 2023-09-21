export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => ({
    pathLength: [0, 0.45],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.01 },
    },
  }),
};

export const buttonDraw = {
  buttonHidden: { pathLength: 0 },
  buttonVisible: (additionalDelay: number = 0) => ({
    pathLength: [0, 0.82],
    transition: {
      delay: 0.1 + additionalDelay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const textButtonDraw = {
  textHidden: { x: -160, opacity: 0 },
  textHovered: () => ({
    opacity: [0, 1],
    x: [-160, 0],
    transition: { x: { duration: 0.3, ease: "easeOut" }, opacity: { duration: 0.8 } },
  }),
  textVisible: (additionalDelay: number = 0) => ({
    opacity: [0, 1],
    x: [-160, 0],
    transition: {
      x: { delay: additionalDelay, duration: 0.6, ease: "easeOut" },
      opacity: { delay: additionalDelay, duration: 0.6 },
    },
  }),
};

export const arrowDraw = {
  arrowHidden: { opacity: 0 },
  arrowVisible: (additionalDelay: number = 0) => ({
    opacity: [0, 1],
    transition: { delay: 0.5 + additionalDelay, duration: 0.3 },
  }),
};

export const arrowContainerDraw = {
  arrowContainerHidden: { x: 70 },
  arrowContainerVisible: (additionalDelay: number = 0) => ({
    x: [70, 0],
    transition: { delay: 0.3 + additionalDelay, duration: 0.2 },
  }),
};
