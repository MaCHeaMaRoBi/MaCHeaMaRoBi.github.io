const newImg = document.createElement("img");
document.querySelector("body").append(newImg);

document.querySelector("#btn").addEventListener("click", async () => {
  var audio = new Audio("./sad.mp3");
  audio.play();

  await delay("./happy-dog.jpg", 2000);
  await delay("./sad-dog.jpg", 3500);
});

const delay = (src, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      newImg.src = src;
      resolve();
    }, delay);
  });
};
