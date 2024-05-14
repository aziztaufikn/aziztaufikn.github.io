// ----------- ----- Show & Hide Password ----- --------- //
const showPass = document.getElementById('showPass'),
    input = document.getElementById('password');

showPass.addEventListener('click', () => {
    if (input.type === "password") {
        input.type = "text";
        changeIcon = '<img src="../icons/eye-off.svg">'
    } else {
        input.type = "password";
        changeIcon = '<img src="../icons/eye.svg">'
    }
    showPass.innerHTML = changeIcon;
});