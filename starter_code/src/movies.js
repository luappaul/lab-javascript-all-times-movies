/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

const min = m => {
  const newEl = Object.assign({}, m);
  const minutes = newEl.duration
    .replace("h", "")
    .replace(" ", ":")
    .replace("min", "");
  const totalHour = minutes.split(":");
  if (totalHour.length === 2) {
    var defhour = 60 * Number(totalHour[0]) + Number(totalHour[1]);
  } else if (totalHour[0] < 12) {
    var defhour = 60 * Number(totalHour[0]);
  } else {
    var defhour = Number(totalHour[0]);
  }
  newEl.duration = defhour;
  return newEl;
};

function turnHoursToMinutes(movies) {
  return movies.map(min);
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const sum = movies.reduce((x, y) => {
    x += Number(y.rate);
    return x;
  }, 0);
  return sum / movies.length;
}

// Get the average of Drama Movies

const dramaMoviesArray = movies.filter(movie => {
  if (movie.genre.includes("Drama") === true && movie.genre.length === 1) {
    return movie || undefined;
  }
});

function dramaMoviesRate(dramaMoviesArray) {
  const sum = dramaMoviesArray.reduce((x, y) => {
    x += Number(y.rate);
    return x;
  }, 0);
  return Number((sum / dramaMoviesArray.length).toFixed(2));
}

// Order by time duration, in growing order

function orderByDuration(movies) {
  //if (movies.length === 1) return movies;
  const convertedMovies = turnHoursToMinutes(movies);
  convertedMovies.sort((a, b) => {
    return a.duration - b.duration;
  });

  return convertedMovies;
}

// How many movies did STEVEN SPIELBERG

const stevenMovie = function(movies) {
  return movies.filter(movie => {
    if (
      movie.genre.includes("Drama") === true &&
      movie.director === "Steven Spielberg"
    ) {
      return movie;
    }
  });
};

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  } else {
    return (
      "Steven Spielberg directed " +
      stevenMovie(movies).length.toString() +
      " drama movies!"
    );
  }
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  movies.sort((a, b) => {
    return a.title - b.title;
  });
  var top20 = [];
  var limit = 20;
  if (movies.length < 20) {
    limit = movies.length;
  }
  for (let i = 0; i < limit; i++) {
    top20.push(movies[i].title);
  }
  return top20;
}

// Best yearly rate average
