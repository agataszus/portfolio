export const hamburgerDraw = {
  hamburgerVisible: { rotate: 0, transition: { duration: 0.4, type: "spring", stiffness: 100 } },
  closeVisible: { rotate: "135deg", transition: { duration: 0.4, delay: 0.2, type: "spring", stiffness: 100 } },
};

export const bar1Draw = {
  bar1Initial: { top: 0, transition: { type: "spring", stiffness: 100, duration: 0.2, delay: 0.4 } },
  bar1Moved: { top: "50%", transition: { type: "spring", stiffness: 100, duration: 0.2 } },
};

export const bar3Draw = {
  bar3Initial: {
    top: "100%",
    rotate: 0,
    transition: {
      top: { duration: 0.2, delay: 0.4, type: "spring", stiffness: 100 },
      rotate: { duration: 0.4, type: "spring", stiffness: 100 },
    },
  },
  bar3Moved: {
    top: "50%",
    rotate: "90deg",
    transition: {
      top: { duration: 0.2, type: "spring", stiffness: 100 },
      rotate: { duration: 0.4, delay: 0.2, type: "spring", stiffness: 100 },
    },
  },
};
