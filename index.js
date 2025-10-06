const cargarVideos = () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.forEach((reg) => {
        html += `<option value='${reg.url}'>${reg.tema}</option>`;
      });
      let mySelect = document.getElementById("mySelect");
      mySelect.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

const verVideo = () => {
  let url = document.getElementById("mySelect").value;
  document.getElementById("myIframe").src=url + '?autoplay=1'
};

const imagenOver = () => {
  document.getElementById("imagen").src = "mec2.jpg";
};

const imagenOut = () => {
  document.getElementById("imagen").src = "mec1.jpg";
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("imagen").addEventListener("mouseover", imagenOver);
  document.getElementById("imagen").addEventListener("mouseout", imagenOut);
  document.getElementById("boton").addEventListener("click", verVideo);
  cargarVideos();
});
