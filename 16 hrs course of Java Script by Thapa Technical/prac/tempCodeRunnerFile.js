const container = document.querySelector(".container");


const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/name/Nepal");
request.send();

request.addEventListener("load",function(){
  const [data] = JSON.parse(this.responseText);
  console.log(data.capital);
  const html = `<p> ${data.capital} </p>`

  container.insertAdjacentHTML("afterbegin",html);
})

