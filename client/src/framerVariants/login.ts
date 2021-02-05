const transition = {
  type: "spring",
  stiffness: 160,
  damping: 10,
};
export const logVariant = {
  hidden: {
    x: window.innerWidth < 500 ? "-60%" : "10%",
    y: window.innerWidth < 500 ? "-10%" : "0%",
  },
  visible: {
    x: window.innerWidth < 500 ? "-10%" : "-165%",
    transition: transition,
  },
};
export const regVariant = {
  hidden: {
    x: window.innerWidth < 500 ? "-130%" : "10%",
    y: window.innerWidth < 500 ? "-10%" : "0%",
  },
  visible: {
    x: window.innerWidth < 500 ? "-160%" : "100%",
    transition: transition,
  },
};
