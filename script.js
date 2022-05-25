const newImg = document.querySelector("#dogImg");
const dogP = document.querySelector("#dogP");

document.querySelector("#btn").addEventListener("click", async () => {
  var audio = new Audio("./sad.mp3");
  audio.play();

  await delay("It's always", "./happy-dog.jpg", 2000);
  await delay("But never...", "./sad-dog.jpg", 3500);
  await delay("", "", 7500);
});

const delay = (p, src, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      newImg.src = src;
      dogP.innerHTML = p;
      resolve();
    }, delay);
  });
};
