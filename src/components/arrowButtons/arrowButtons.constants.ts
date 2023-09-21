export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (times: { delayTime: number; durationTime: number }) => ({
    pathLength: [0, 0.502],
    opacity: [0, 1],
    transition: {
      pathLength: { delay: times?.delayTime, duration: times?.durationTime, ease: "easeOut" },
      opacity: { delay: times?.delayTime, duration: 0.01 },
    },
  }),
};
