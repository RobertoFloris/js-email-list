const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const mail = document.getElementById("mail");
const loading = document.getElementById("loading");
const btn = document.getElementById("btn");

let cont=0;
loading.innerHTML = "Caricamento delle mail in corso..."
mail.innerHTML="";
btn.innerHTML="Clicca qui per caricare altre email"

for(let i=0; i<10; i++){
  getApi()
}


btn.addEventListener("click", (e)=>{
  mail.innerHTML="";
  cont=0;
  e.preventDefault();
  mail.classList.add("d-none");
  loading.classList.remove("d-none");
  btn.classList.add("d-none")
  for(let i=0; i<10; i++){
    getApi()
  }
})


function getApi(){
  axios.get(endpoint)
  .then(response =>{
  console.log(response.data.response);
  mail.innerHTML+=`<li class="list-group-item d-flex justify-content-between align-items-center">${response.data.response}</li>`
  cont++;
  if(cont>9){
    mail.classList.remove("d-none");
    loading.classList.add("d-none");
    btn.classList.remove("d-none");
  }
  })
  .catch(error => {
  console.log(error);
  })
}