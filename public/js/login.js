let btn = document.getElementById("btn_submit")
btn.addEventListener('click',() => {
    checkemail();
})


function checkemail() {
    let email = document.getElementById("email").value;

    if(!email) alert("Enter a valid email");
    else {
        let password = document.getElementById("password");
        password.classList.remove('hidden')

        btn.innerText = "Submit";
        btn.removeEventListener("click", ()=> {
            checkemail();
        })

        // if(localStorage.getItem('login')===null){
        //     localStorage.setItem('login',JSON.stringify({}));
        // }

        // login = {
        //     email
        // }

        // localStorage.setItem("login",JSON.stringify(login))

        btn.addEventListener('click',() => {
            checkpassword(email);
        })
    }
}

async function checkpassword(email) {
    let password = document.getElementById("password").value;

    if(!password) alert("Enter a valid email and password");
    else {
        // let partner = JSON.parse(localStorage.getItem("partner"))

        let login = {
            email,
            password,
            // partner
        }
        console.log(login)

        // post request to backend
        try {
            const response = await fetch("http://localhost:2000/login", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(login),
                });
                
            // console.log(response)
            const data = await response.json()
            window.location.href = "http://localhost:2000/discover"            

        } catch (e) {
            alert("Invalid email address and password")
        }


        // if email is invalid then throw an error  

        // else redirect to discover page

    }
}

