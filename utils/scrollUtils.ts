export const smoothScroll = (element: HTMLDivElement, target: number, duration: number) => {
  const start = element.scrollLeft;
  const distance = target - start;
  let startTime: number;

  const easeInOutQuad = (time: number, start: number, change: number, duration: number) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
  };

  const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      element.scrollLeft = easeInOutQuad(progress, start, distance, duration);
      if (progress < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
