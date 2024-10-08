
function Validation(values) {
// alert("")
let error = {}
const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const password_pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/

if(values.email === ''){
    error.email='Email should not be empty'
}
else if(!email_pattern.test(values.email)){
    error.email = "email didn't match"
}else {
    error.email=""
}

if(values.password === ''){
    error.password="password should not be empty";
}
else if(!password_pattern.test(values.password)){
    error.password="incorrect password";
} else{
    error.password=""
}
return error
}

export default Validation;
