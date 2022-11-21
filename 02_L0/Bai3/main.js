function start(){
    document.getElementById('container-1').style.display='block';
    document.getElementById('first_step').style.display='none';
}
function close_1(){
    refresh();
    document.getElementById('login_btn').innerHTML = "Login";
    document.getElementById('container-1').style.display='none';
    document.getElementById('btn1').style.display= 'block';

}

var Pass_init = 'admin';
function validate(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if(user.trim().length == 0){
        document.getElementById("error_user").innerHTML = "Xin mời nhập username"
        return false;
    }
    else{
        document.getElementById("error_user").innerHTML = "";
    }
    if(pass.trim().length == 0){
        document.getElementById("error_pass").innerHTML = "Xin mời nhập password"
        return false;
    }
    else{
        document.getElementById("error_pass").innerHTML = "";
    }
    if(user !== "admin" && user != null) {
        document.getElementById("error_user").innerHTML = "Sai Username";
        return false;
    }else{
        document.getElementById("error_user").innerHTML = "";
    }
    if(pass !== Pass_init && pass != null) {
        document.getElementById("error_pass").innerHTML = "Sai Password"
        return false;
    }else{
        document.getElementById("error_pass").innerHTML = "";
    }
    if(true) {
        document.getElementById("first_step").innerText = "Đăng nhập thành công!!";
        document.getElementById("first_step").style.background = "green";
        document.getElementById('first_step').style.display='block';
        close_1();
    }
}
function refresh(){

    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('oldpass').value = "";
    document.getElementById('newpass').value = "";
    document.getElementById('error_pass').innerHTML = "";
    document.getElementById('error_user').innerHTML = "";
    document.getElementById('error_newpass').innerHTML = "";
    document.getElementById('error_oldpass').innerHTML = "";
    document.getElementById('success').innerHTML = "";
}

const loading_f = ()=>{
    let x = document.getElementById('user').value;
    let y = document.getElementById('pass').value;
    if(x.trim().length!=0 && y.trim().length!=0){
        document.getElementById("error_user").innerHTML = "";
        document.getElementById("error_pass").innerHTML = "";
        document.getElementById('login_btn').innerHTML = "Loading...";
        setTimeout(()=>{
            validate();
            document.getElementById('login_btn').innerHTML = "Login";
        }, 1000)
    }
    else if(x.trim().length==0 && y.trim().length!=0){
        document.getElementById("error_pass").innerHTML = "";
        document.getElementById("error_user").innerHTML = "Xin mời nhập user";
        
    }
    else if(x.trim().length!=0 && y.trim().length==0){
        document.getElementById("error_user").innerHTML = "";
        document.getElementById("error_pass").innerHTML = "Xin mời nhập password";
    }
    else{
        document.getElementById("error_user").innerHTML = "Xin mời nhập user";
        document.getElementById("error_pass").innerHTML = "Xin mời nhập password";
    }
}

function forgot_btn(){
    refresh();
    document.getElementById('container-1').style.display='none';
    document.getElementById('container-2').style.display = "block";

}
function back(){
    refresh();
    document.getElementById('container-2').style.display = "none";
    document.getElementById('container-1').style.display = "block";
}
const saving_function= ()=>{
// document.getElementById('save_btn').innerHTML = "Loading...";
    
    // setTimeout(()=>{
    //     validateNew();
    //     document.getElementById('save_btn').innerHTML = "Save";
    // }, 1000)
    let x = document.getElementById('oldpass').value;
    let y = document.getElementById('newpass').value;
    if(x.trim().length!=0 && y.trim().length!=0){
        document.getElementById("error_oldpass").innerHTML = "";
        document.getElementById("error_newpass").innerHTML = "";
        document.getElementById('save_btn').innerHTML = "Saving...";
        setTimeout(()=>{
            validateNew();
            document.getElementById('save_btn').innerHTML = "Save";
        }, 1000)
    }
    else if(x.trim().length==0 && y.trim().length!=0){
        document.getElementById("error_newpass").innerHTML = "";
        document.getElementById("error_oldpass").innerHTML = "Xin mời nhập pass cũ";
        
    }
    else if(x.trim().length!=0 && y.trim().length==0){
        document.getElementById("error_oldpass").innerHTML = "";
        document.getElementById("error_newpass").innerHTML = "Xin mời nhập pass mới";
    }
    else{
        document.getElementById("error_oldpass").innerHTML = "Xin mời nhập pass cũ";
        document.getElementById("error_newpass").innerHTML = "Xin mời nhập pass mới";
    }
}
function validateNew(){
    const oldPass = document.getElementById('oldpass').value;
    const newPass = document.getElementById('newpass').value;
    if(oldPass.trim().length == 0){
        document.getElementById("error_oldpass").innerHTML = "Xin mời nhập mật khẩu cũ"
        return false;
    }
    else{
        document.getElementById("error_oldpass").innerHTML = "";
    }
    if(newPass.trim().length == 0){
        document.getElementById("error_newpass").innerHTML = "Xin mời nhập mật khẩu mới"
        return false;
    }
    else{
        document.getElementById("error_newpass").innerHTML = "";
    }
    if(oldPass !== Pass_init ) {
        document.getElementById("error_oldpass").innerHTML = "Sai mật khẩu cũ";
        return false;
    }else{
        document.getElementById("error_oldpass").innerHTML = "";
    }
    if(newPass === oldPass ) {
        document.getElementById("error_newpass").innerHTML = "Trùng mật khẩu cũ";
        return false;
    }else{
        document.getElementById("error_newpass").innerHTML = "";
    }
    if(true) {
        Pass_init = newPass;
        document.getElementById("success").innerText = "Đổi mật khẩu mới thành công!!";
        document.getElementById('container-1').style.display='block';
        document.getElementById('container-2').style.display='none';
    }
}
function remove_user(){
    let x= document.getElementById('user').value;
    if(x!==0){
        document.getElementById("error_user").innerHTML = "";
    }
}
function remove_pass(){
    let x= document.getElementById('pass').value;
    if(x!==0){
        document.getElementById("error_pass").innerHTML = "";
    }
}
function remove_oldpass(){
    let x= document.getElementById('oldpass').value;
    if(x!==0){
        document.getElementById("error_oldpass").innerHTML = "";
    }
}
function remove_newpass(){
    let x= document.getElementById('newpass').value;
    if(x!==0){
        document.getElementById("error_newpass").innerHTML = "";
    }
}