const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const mail = document.getElementById("mail");
const loading = document.getElementById("loading");

let cont=0;

mail.innerHTML="";

for(let i=0; i<10; i++){
  getApi()
}



function getApi(){
  axios.get(endpoint)
  .then(response =>{
  console.log(response.data.response);
  mail.innerHTML+=`<li>${response.data.response}</li>`
  cont++;
  if(cont>9){
    mail.classList.remove("d-none");
    loading.classList.add("d-none");
  }
  })
  .catch(error => {
  console.log(error);
  })
}