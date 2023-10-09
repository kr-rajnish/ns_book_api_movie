import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

fetch("https://content.newtonschool.co/v1/pr/64a277bd01d4ee34c6074e33/moviesList?limit=10&page=1 ")
.then(response => response.json())
.then(data => {
  data.map((item) => {
    console.log(item);
    const name = item.title
    const poster = item.backdrop_path
    const language = item.original_language;
    const reating = item.vote_average;
    const movies = `<li><img src="${poster}"><h2>${name}<h2/><p>${language}</p><p>${reating}/10</p></li>`
    document.getElementById("app").innerHTML += movies
  })
})
.catch(err => {
  console.log(err)
})




