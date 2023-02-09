window.addEventListener("load", () => {
  const r = new rive.Rive({
    src: "./assets/rivs/bird_interactive.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "state",
    fit: rive.Fit.cover,
    onLoad: (_) => {
      const inputs = r.stateMachineInputs('state');
      console.log(inputs);
    },
  });
});