(() => {
  const sequence = (id, line, duration) => ({
    line,
    duration,
    frames: Array.from({ length: 6 }, (_, index) => `assets/restored/motion/${id}-${index}.webp`)
  });

  window.motionClips = {
    station: sequence('station', 3, 1100),
    store: sequence('store', 9, 900),
    apartment: sequence('apartment', 3, 1050),
    wedding: sequence('wedding', 5, 1150)
  };
})();

