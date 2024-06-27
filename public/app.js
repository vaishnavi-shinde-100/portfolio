let btn = document.querySelector("button");
let inp = document.querySelector(".inp");
let text = document.querySelector("textarea");
let h1 = document.querySelector("h1");
btn.addEventListener("click", (e) => {

    e.preventDefault();

    let firstName = document.getElementById("first_name").value;
    console.log(`Fist Name : ${firstName}`);

    let lastname = document.getElementById("last_name").value;
    console.log(`Last Name : ${lastname}`);

    let email = document.getElementById("email_id").value;
    console.log(`Email : ${email}`);

    h1.innerHTML = `Welcome @${firstName + " " + lastname}`;
    inp.innerHTML = first_name.value;
    first_name.value = " ";

    inp.innerHTML = last_name.value;
    last_name.value = " ";

    inp.innerHTML = email_id.value;
    email_id.value = " ";

    let text = document.getElementById("textarea").value;
    console.log(`Massege: ${text} `);
    text.innerHTML = textarea.value;
    textarea.value = " ";

    let mobileNumber = document.getElementById("mobile_number").value;
    console.log(`Mobile Number : ${mobileNumber}`);
    mobileNumber.innerHTML = mobile_number.value;
    mobile_number.value = " ";

});






