  const loader = document.getElementById("loading");
  const weatherLabel = document.getElementById("weatherLabel");

  const states = [
    { class: "sunny-cloud"},
    { class: "partly-cloudy" },
    { class: "cloudy"},
    { class: "rainy" },
    { class: "storm", lightningSpeed: 1 },
    { class: "snowy"}
  ];

  let index = 0;

  function setWeather(state){
    loader.className = "loading-state " + state.class;
    weatherLabel.textContent = state.label;
    if(state.lightningSpeed) loader.style.setProperty("--light-speed", state.lightningSpeed+"s");
  }

  setWeather(states[index]);

  setInterval(()=>{
    index = (index+1) % states.length;
    setWeather(states[index]);
  }, 2200);
