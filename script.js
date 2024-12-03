const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

let mail = document.getElementById("mail");
mail.innerHTML="";

for(let i=0; i<10; i++){
  getApi()
}


document.getElementById("mail")


function getApi(){
  axios.get(endpoint)
  .then(response =>{
  console.log(response.data.response);
  mail.innerHTML+=`<li>${response.data.response}</li>`
  })
  .catch(error => {
  console.log(error);
  })
}