window.addEventListener("load", () => {
  const screens = [
    document.getElementById("screen3"),
    document.getElementById("screen2"),
    document.getElementById("screen1"),
  ];
  const profilePage = document.getElementById("profilePage");

  let currentScreen = 0;

  function showNextScreen() {
    if (currentScreen > 0) {
      screens[currentScreen - 1].classList.remove("active");
      screens[currentScreen - 1].classList.add("exit");
    }

    if (currentScreen < screens.length) {
      screens[currentScreen].classList.add("active");
      currentScreen++;
      setTimeout(showNextScreen, 1200);
    } else {
      setTimeout(() => {
        screens.forEach((screen) => (screen.style.display = "none"));
        profilePage.classList.add("show");
      }, 600);
    }
  }

  setTimeout(showNextScreen, 300);
});
// je hais le js....//