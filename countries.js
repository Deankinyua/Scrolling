const show_countries = () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      const countries = JSON.parse(xhr.response);

      countries.forEach((element) => {
        console.log(element.name.common);
      });
    }
  };
};
