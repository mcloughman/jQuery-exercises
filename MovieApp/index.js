let counterId = 0;
let movieArr = [];

$("form").on("submit", function (e) {
  console.group("Hello");
  e.preventDefault();
  let $title = $(".title").val();
  console.log($title);
  let $rating = $("#rating").val();
  console.log($rating);
  let movie = createMovieObject($title, $rating, counterId);
  movieArr.push(movie);
  console.log(movieArr);
  const lineToAppend = createHTML($title, $rating, counterId);
  $("body").append(lineToAppend);
  counterId++;
});

function createMovieObject(title, rating, id) {
  let movie = {
    title,
    rating,
    id,
  };
  return movie;
}

function deleteMovie(id) {
  const idx = movieArr.findIndex((movie) => {
    return movie.id.toString() === id;
  });
  movieArr.splice(idx, 1);
  return movieArr;
}

function createHTML(title, rating, id) {
  const $ul = $("<ul>");
  const $li = $("<li>");
  $li.append(`<span>${title} - ${rating}</span>)`);
  const $btn = $(`<button>`).text("Remove");
  const attributes = { id: id, class: "danger" };
  $btn.attr(attributes).on("click", function () {
    deleteMovie($(this).attr("id"));
    $(this).closest("li").remove();
  });
  $li.append($btn);
  $ul.append($li);
  return $ul;
}
