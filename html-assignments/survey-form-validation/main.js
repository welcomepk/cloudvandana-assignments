const form = document.querySelector('form')
const resetBtn = document.querySelector('#reset')

function validateForm() {
    let firstname = form["firstname"].value;
    let lastname = form["lastname"].value;
    let dob = form["dob"].value;
    let email = form["email"].value;
    let profession = form["profession"].value;
    let phone = form["phone"].value;
    let gender = form["gender"].value;
    let suggetion = form["suggetion"].value;
    let country = form["country"].value;



    if (firstname === "" || lastname === "" || dob === "" || email === "" || profession === "" || phone === "" || gender === "" || suggetion === "" || country === "") {
        alert("All fields are required!")
        return;
    }

    const data = `
        firstname : ${firstname}
        lastname : ${lastname}
        date of birth : ${dob}
        email : ${email}
        profession : ${profession}
        phone : ${phone}
        gender : ${gender}
        country : ${country}
        suggetion : ${suggetion}
    `
    alert(data)
    resetForm();
}

function resetForm() {
    form["firstname"].value = "";
    form["lastname"].value = "";
    form["dob"].value = "";
    form["email"].value = "";
    form["profession"].value = "";
    form["phone"].value = "";
    form["gender"].value = "";
    form["suggetion"].value = "";
    form["country"].value = "";
}

form.onsubmit = (e) => {
    e.preventDefault();
    validateForm();
}

resetBtn.addEventListener('click', () => {
    resetForm();
})