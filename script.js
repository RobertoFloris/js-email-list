const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";


for(let i=0; i<10; i++){
  getApi()
}


function getApi(){
  axios.get(endpoint)
  .then(response =>{
  console.log(response.data.response);
  })
  .catch(error => {
  console.log(error);
  })
}