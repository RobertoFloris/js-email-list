const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

axios.get(endpoint)
.then(response =>{
  console.log(response.data);
})
.catch(error => {
  console.log(error);
})