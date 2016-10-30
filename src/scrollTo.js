export default function scrollTo(coordX, coordY, duration, speed) {
  const start = window.pageYOffset;

  const difference = coordY - start;

  if (difference !== 0) {
    if (!duration) {
      if (!speed) {
        return window.scrollTo(coordX, coordY);
      }

      duration = Math.abs(difference) / (speed / 1000);
    }
    const perTick = difference * 10 / duration;
    const ticks = duration / 10;

    let i = 0;

    const interval = setInterval(() => {
      if (i >= ticks) {
        window.scrollTo(coordX, coordY);
        return clearInterval(interval);
      }

      window.scrollTo(coordX, start + i * perTick);
      i += 1;
    }, 10);
  }
}
