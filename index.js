let data = [
  (person1 = {
    name: "Rishabh",
    rating: "5",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eaque nulla exercitationem quos, ea perspiciatis facere voluptatum. Dolore autem inventore repudiandae at est, ipsam velit fugit numquam nihil tempore sapiente!",
  }),
  (person2 = {
    name: "Sandy",
    rating: "3",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eaque nulla exercitationem quos, ea perspiciatis facere voluptatum. Dolore autem inventore repudiandae at est, ipsam velit fugit numquam nihil tempore sapiente!",
  }),
  (person3 = {
    name: "Vinni",
    rating: "4",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eaque nulla exercitationem quos, ea perspiciatis facere voluptatum. Dolore autem inventore repudiandae at est, ipsam velit fugit numquam nihil tempore sapiente!",
  }),
];

let name = document.getElementById("name");
let rating = document.getElementById("rating");
let tests = document.getElementById("tests");
let i = 0;
name.innerHTML = data[i].name;
rating.innerHTML = data[i].rating;
tests.innerHTML = data[i].para;
const next = () => {
  i += 1;
  if (i > data.length - 1) {
    i = 0;
  }
  name.innerHTML = data[i].name;
  rating.innerHTML = data[i].rating;
  tests.innerHTML = data[i].para;
};
const prev = () => {
  i -= 1;
  if (i < 0) {
    i = data.length - 1;
  }
  name.innerHTML = data[i].name;
  rating.innerHTML = data[i].rating;
  tests.innerHTML = data[i].para;
};
