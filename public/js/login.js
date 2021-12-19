let partner = JSON.parse(localStorage.getItem("partner"))

let btn = document.getElementById("btn_submit")
btn.addEventListener('click',() => {
    checkemail();
})


let err_pass = document.getElementById("err_pas");
let err_email = document.getElementById("err_email");

function checkemail() {

    if(!email) alert("Enter a valid email");
    else {
        let password = document.getElementById("password");
        password.classList.remove('hidden')

        btn.innerText = "Submit";
        btn.removeEventListener("click", ()=> {
            checkemail();
        })

        btn.addEventListener('click',() => {
            checkpassword();
        })
    }
}

async function checkpassword() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if(!password) alert("Enter a valid email and password");
    else {

        let login = {
            email,
            password,
            partner
        }
        console.log(login)

        // post request to backend
        try {
            const response = await fetch("https://smallcaseproject.herokuapp.com/login", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(login),
                });
                
            // console.log(response.status)
            if(response.status == 400) {
                err_email.classList.remove('hidden');
                err_pass.classList.remove('hidden')
            }
            else {
                let login_detail = await response.json();
                console.log(login_detail)
                localStorage.setItem("login_detail", JSON.stringify(login_detail))

                return window.location.href = "https://smallcaseproject.herokuapp.com/discover"            
            }

        } catch (e) {
            err_email.classList.remove('hidden');
            err_pass.classList.remove('hidden')
        }


        // if email is invalid then throw an error  

        // else redirect to discover page

    }
}

