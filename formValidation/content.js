let country = document.querySelector("#country");
let state = document.querySelector("#state");
let submitButton = document.querySelector(".sbt");
let name = document.querySelector(".name");
let address = document.querySelector(".address");
let contact = document.querySelector(".contact");
let nameIsValid = false;
let addressIsValid = false;
let contactIsValid = false;
let formIsValid = false;
let output = document.createElement("h1");
async function getData() {
  const res = await fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  );
  const data = await res.json();
  return data;
}

getData().then((res) => {
  res.forEach((item) => {
    // console.log(item);
    let opt = document.createElement("option");
    opt.innerHTML = item.name;
    country.appendChild(opt);
  });
});

country.addEventListener("change", function () {
  state.innerHTML = "";
  getData().then((res) => {
    let stateArray = res.filter((item) => {
      //   console.log(country.value);
      return item.name === country.value;
    });
    console.log(stateArray);
    stateArray[0].states.forEach((item) => {
      let opt = document.createElement("option");
      opt.innerHTML = item.name;
      state.appendChild(opt);
    });
  });
});
let obj = {
  name: "Dexter",
};
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (name.value.length >= 4 && name.value.length <= 10) {
    nameIsValid = true;
  }
  if (address.value.includes(".") && address.value.includes("@")) {
    addressIsValid = true;
  }
  if (contact.value.length === 10) {
    contactIsValid = true;
  }

  if (nameIsValid && addressIsValid && contactIsValid) {
    formIsValid = true;
  }

  if (formIsValid) {
    alert("Success");
  } else {
    alert("Error");
  }
});
