let id;
function image() {
  let url = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v",
    "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
  ];
  let rolling = document.getElementById("rolling");
  let img = document.createElement("img");
  i = 0;
  img.src = url[0];
  rolling.append(img);
  i++;
  id = setInterval(function () {
    if (i === 3) {
      i = 0;
    }
    img.src = url[i];
    rolling.append(img);
    i++;
  }, 2000);
}
image();

let movies = [
  {
    name: "RRR",
    Rating: 6,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
  },
  {
    name: "Baghi",
    Rating: 5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v",
  },
  {
    name: "Super 30",
    Rating: 4,
    img: "https://upload.wikimedia.org/wikipedia/en/2/29/Super_30_The_Film.jpg",
  },
  {
    name: "Iron Man",
    Rating: 3,
    img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Avengers 2",
    Rating: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
  },
  {
    name: "Spider-Man",
    Rating: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
  },
];

localStorage.setItem("movies", JSON.stringify(movies));

let items = JSON.parse(localStorage.getItem("movies"));

function display(res) {
  let datDiv = document.querySelector("#basic");
  // datDiv.innerHTML = ""
  datDiv.innerHTML = null;

  res.forEach(function (el) {
    let box = document.createElement("div");

    let name = document.createElement("h1");
    name.innerText = `Name: ${el.name}`;

    let Rating = document.createElement("h1");
    Rating.innerText = `Rating: ${el.Rating}`;

    let img = document.createElement("img");
    img.src = el.img;

    box.append(img, name, Rating);

    datDiv.append(box);
  });
}

let PromiseData = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = items;

    if (items != null) {
      resolve(data);
    } else {
      reject("ERROR");
    }
  }, 3000);
});

PromiseData.then(function (res) {
  display(res);
}).catch(function (err) {
  console.log(err);
});

document.getElementById("low").addEventListener("click", Low);

function Low() {
  items.sort(function (a, b) {
    return a.Rating - b.Rating;
  });
  display(items);
}

document.getElementById("high").addEventListener("click", high);

function high() {
  items.sort(function (a, b) {
    return b.Rating - a.Rating;
  });
  display(items);
}
