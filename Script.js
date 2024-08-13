document.addEventListener('DOMContentLoaded', function(){
  const initialise = document.querySelector('.ins');
  const rangePass = document.querySelector('.range');
  const generate = document.querySelector('.generate');
  
  
  function generatePassword(len){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = "";
    for(let i=0;i<len;i++){
      const randomIndex = Math.floor(Math.random()*characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
  
  generate.addEventListener('click',function(){
    let len = rangePass.value;
    const password = generatePassword(len);
    initialise.value = password;
  });
  });
  
  
  