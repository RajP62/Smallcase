let partner = JSON.parse(localStorage.getItem("partner"))

let btn = document.getElementById("btn_submit")
btn.addEventListener('click',() => {
    checkemail();
})


function checkemail() {

    if(!email) alert("Enter a valid email");
    else {
        let password = document.getElementById("password");
        let rpassword = document.getElementById("rpassword");

        password.classList.remove('hidden')
        rpassword.classList.remove('hidden')

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
    let rpassword = document.getElementById("rpassword").value;

    if(password != rpassword) alert("Password is not same");
    else {

        let login = {
            email,
            password,
            partner
        }
        console.log(login)

        // post request to backend
        try {
            const response = await fetch("http://localhost:2000/register", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(login),
                });
                
            // console.log(response.status)
            if(response.status == 400) {
               return alert("Provide Different Email");
            }
            else {
                let login_detail = await response.json();
                console.log(login_detail)
                localStorage.setItem("login_detail", JSON.stringify(login_detail))

                return window.location.href = "http://localhost:2000/discover"            
            }

        } catch (e) {
            alert("Provide different email")
        }


        // if email is invalid then throw an error  

        // else redirect to discover page

    }
}

