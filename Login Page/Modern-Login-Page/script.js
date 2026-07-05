const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("password");

const loginPass = document.getElementById("loginPassword");
const loginEmail = document.getElementById("loginEmail");

const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");

const signupMsg  = document.getElementById('SignUpmsg');
const loginMsg   = document.getElementById('signInmsg');

signUpBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const user = {
    name: userName.value,
    email: userEmail.value,
    password: userPass.value,
  };
  
  const response = await fetch("http://localhost:5000/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if(data.success){
    userName.value = "";
    userEmail.value = "";
    userPass.value = "";
    signupMsg.innerText = data.message;
    signupMsg.style.color = "green";
}
else{
    signupMsg.innerText = data.message;
}
setTimeout(()=>{
  signupMsg.innerText = ""
},2000)
});

signInBtn.addEventListener('click',async (e)=>{
  e.preventDefault();
  const user = {
    email:loginEmail.value,
    password:loginPass.value
  }
  try{
    const response = await fetch("http://localhost:5000/login",{
      method:"POST",
      headers:{
        "content-type" : "application/json",
      },
      body:JSON.stringify(user),
    });
    const data = await response.json();
    if(data.success){
      loginEmail.value = "";
      loginPass.value = "";
      loginMsg.innerText = data.message
      loginMsg.style.color = "green";
    }
    else{
      loginMsg.innerText = data.message    
      loginMsg.style.color = "red";
    }
  }
  catch(err){
    loginMsg.innerText = "Server error";
    loginMsg.style.color = "red";
  }
  setTimeout(()=>{
    loginMsg.innerText = "";
  },2000)
});


registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});



const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
    window.location.href = "../../index.html";
});