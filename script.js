function generateShirt() {
  const strip = document.getElementById("strip").value;
  const color = document.getElementById("color").value;
  const location = document.getElementById("location").value;
  const brand = document.getElementById("brand").value;
  const style = document.getElementById("style").value;

  let imageUrl = "";
  let description = "";

  if (strip === "home" && color === "red" && location === "rest-of-the-world" && brand === "nike" && style === "modern") {
    imageUrl = "images/img-1.jpg";
    description = "Al-ahli Dubai 2011 Home Shirt.";
  } else if (
    strip === "home" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "retro"
  ) {
    imageUrl = "images/img-2.jpg";
    description = "Chicago Fire 2002 Home Shirt.";
  } else if (
    strip === "away" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "modern"
  ) {
    imageUrl = "images/img-3.jpg";
    description = "USA 2017 Away Shirt.";
  } else if (
    strip === "away" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "retro"
  ) {
    imageUrl = "images/img-4.jpg";
    description = "USA 1999 Away shirt.";
  } else if (strip === "home" && color === "red" && location === "european" && brand === "nike" && style === "modern") {
    imageUrl = "images/img-5.jpg";
    description = "Manchester United 2011 Home Shirt.";
  } else if (strip === "home" && color === "red" && location === "european" && brand === "nike" && style === "retro") {
    imageUrl = "images/img-6.jpg";
    description = "Arsenal 1994 Away Shirt.";
  } else if (strip === "away" && color === "red" && location === "european" && brand === "nike" && style === "modern") {
    imageUrl = "images/img-7.jpg";
    description = "De Graafschap 2017 Away Shirt.";
  } else if (strip === "away" && color === "red" && location === "european" && brand === "nike" && style === "retro") {
    imageUrl = "images/img-8.jpg";
    description = "PSG 2004 Away Shirt.";
  } else if (
    strip === "home" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "modern"
  ) {
    imageUrl = "images/img-9.jpg";
    description = "Chicago Fire 2012 Home.";
  } else if (
    strip === "home" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "retro"
  ) {
    imageUrl = "images/img-10.jpg";
    description = "Flamengo 1987 Home Shirt.";
  } else if (
    strip === "away" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "modern"
  ) {
    imageUrl = "images/img-11.jpg";
    description = "Portland Timber 2013 Away Shirt.";
  } else if (
    strip === "away" &&
    color === "red" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "retro"
  ) {
    imageUrl = "images/img-12.jpg";
    description = "Sao Paulo 1996 Away Shirt.";
  } else if (strip === "home" && color === "red" && location === "european" && brand === "adidas" && style === "modern") {
    imageUrl = "images/img-13.jpg";
    description = "Manchester United 2015 Home.";
  } else if (strip === "home" && color === "red" && location === "european" && brand === "adidas" && style === "retro") {
    imageUrl = "images/img-14.jpg";
    description = "Liverpool 1988 Home.";
  } else if (strip === "away" && color === "red" && location === "european" && brand === "adidas" && style === "modern") {
    imageUrl = "images/img-15.jpg";
    description = "Besiktas 2014 Away.";
  } else if (strip === "away" && color === "red" && location === "european" && brand === "adidas" && style === "retro") {
    imageUrl = "images/img-16.jpg";
    description = "Athletic Bilbao 2000 Away.";
  } else if (
    strip === "home" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "modern"
  ) {
    imageUrl = "images/img-49.jpg";
    description = "Shanghai Shenhua Home 2014.";
  } else if (
    strip === "home" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "retro"
  ) {
    imageUrl = "images/img-50.jpg";
    description = "Boca Juniors 2002 Home.";
  } else if (
    strip === "away" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "modern"
  ) {
    imageUrl = "images/img-51.jpg";
    description = "Brazil 2015 Away.";
  } else if (
    strip === "away" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "nike" &&
    style === "retro"
  ) {
    imageUrl = "images/img-52.jpg";
    description = "Brazil 1998 Away.";
  } else if (strip === "home" && color === "blue" && location === "european" && brand === "nike" && style === "modern") {
    imageUrl = "images/img-53.jpg";
    description = "Barcelona 2017 Home.";
  } else if (strip === "home" && color === "blue" && location === "european" && brand === "nike" && style === "retro") {
    imageUrl = "images/img-54.jpg";
    description = "Rangers 1997 Home.";
  } else if (strip === "away" && color === "blue" && location === "european" && brand === "nike" && style === "modern") {
    imageUrl = "images/img-55.jpg";
    description = "Juventus 2015 Away.";
  } else if (strip === "away" && color === "blue" && location === "european" && brand === "nike" && style === "retro") {
    imageUrl = "images/img-56.jpg";
    description = "Arsenal 2004 Away.";
  } else if (
    strip === "away" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "retro"
  ) {
    imageUrl = "images/img-60.jpg";
    description = "Argentina 2002 Away.";
  } else if (
    strip === "home" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "modern"
  ) {
    imageUrl = "images/img-57.jpg";
    description = "Japan 2018 Home.";
  } else if (
    strip === "home" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "retro"
  ) {
    imageUrl = "images/img-58.jpg";
    description = "Sporting Cristal 2000 Home.";
  } else if (
    strip === "away" &&
    color === "blue" &&
    location === "rest-of-the-world" &&
    brand === "adidas" &&
    style === "modern"
  ) {
    imageUrl = "images/img-59.jpg";
    description = "FC Dallas 2010 Home.";
  } else if (strip === "home" && color === "blue" && location === "european" && brand === "adidas" && style === "modern") {
    imageUrl = "images/img-61.jpg";
    description = "Chelsea 2015 Home.";
  } else if (strip === "home" && color === "blue" && location === "european" && brand === "adidas" && style === "retro") {
    imageUrl = "images/img-62.jpg";
    description = "Schalke 1994 Home.";
  } else if (strip === "away" && color === "blue" && location === "european" && brand === "adidas" && style === "modern") {
    imageUrl = "images/img-63.jpg";
    description = "Ajax 2021 Home.";
  } else if (strip === "away" && color === "blue" && location === "european" && brand === "adidas" && style === "retro") {
    imageUrl = "images/img-64.jpg";
    description = "Bayer Leverkusen 2001 Away.";
  }

  const shirtImage = document.getElementById("shirt-image");
  const shirtDescription = document.getElementById("shirt-description");
  shirtImage.src = imageUrl;
  shirtDescription.textContent = description;
  document.getElementById("shirt-generate").style.display = "block";
}
