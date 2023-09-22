const commonTransition = { type: "spring", stiffness: 100 };

export const hamburgerDraw = {
  hamburgerVisible: { rotate: 0, transition: { duration: 0.4, ...commonTransition } },
  closeVisible: { rotate: "135deg", transition: { duration: 0.4, delay: 0.2, ...commonTransition } },
};

export const bar1Draw = {
  bar1Initial: { top: 0, transition: { ...commonTransition, duration: 0.2, delay: 0.4 } },
  bar1Moved: { top: "50%", transition: { ...commonTransition, duration: 0.2 } },
};

export const bar3Draw = {
  bar3Initial: {
    top: "100%",
    rotate: 0,
    transition: {
      top: { duration: 0.2, delay: 0.4, ...commonTransition },
      rotate: { duration: 0.4, ...commonTransition },
    },
  },
  bar3Moved: {
    top: "50%",
    rotate: "90deg",
    transition: {
      top: { duration: 0.2, ...commonTransition },
      rotate: { duration: 0.4, delay: 0.2, ...commonTransition },
    },
  },
};
