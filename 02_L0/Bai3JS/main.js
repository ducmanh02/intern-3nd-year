function start(){
    document.getElementById('box1').style.display='block';
    document.getElementById('dangnhap').style.display='none';
}
function close_1(){
    document.getElementById('box1').style.display='none';
    document.getElementById('btn1').style.display= 'block';
}

var Passcu = 'admin';
function validate(){
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    if(user.trim().length == 0){
        document.getElementById("loiuser").innerHTML = "Xin mời nhập username"
        return false;
    }
    else{
        document.getElementById("loiuser").innerHTML = "";
    }
    if(pass.trim().length == 0){
        document.getElementById("loipass").innerHTML = "Xin mời nhập password"
        return false;
    }
    else{
        document.getElementById("loipass").innerHTML = "";
    }
    if(user !== "admin" && user != null) {
        document.getElementById("loiuser").innerHTML = "Sai Username";
        return false;
    }else{
        document.getElementById("loiuser").innerHTML = "";
    }
    if(pass !== Passcu && pass != null) {
        document.getElementById("loipass").innerHTML = "Sai Password"
        return false;
    }else{
        document.getElementById("loipass").innerHTML = "";
    }
    if(true) {
        document.getElementById("dangnhap").innerText = "Đăng nhập thành công!!";
        document.getElementById("dangnhap").style.background = "antiquewhite";
        document.getElementById('dangnhap').style.display='block';
        close_1();
    }
}
function refresh(){

    document.getElementById('user').value = "";
    document.getElementById('pass').value = "";
    document.getElementById('oldpass').value = "";
    document.getElementById('newpass').value = "";
    document.getElementById('loipass').innerHTML = "";
    document.getElementById('loiuser').innerHTML = "";
    document.getElementById('loinewpass').innerHTML = "";
    document.getElementById('loioldpass').innerHTML = "";
    document.getElementById('tcong').innerHTML = "";
}

const loading_f = ()=>{
    document.getElementById('login_btn').innerHTML = "Loading...";
    setTimeout(()=>{
        validate();
        document.getElementById('login_btn').innerHTML = "Login";
    }, 1000)
}

function forgot_btn(){
    refresh();
    document.getElementById('box1').style.display='none';
    document.getElementById('box2').style.display = "block";

}
function back(){
    refresh();
    document.getElementById('box2').style.display = "none";
    document.getElementById('box1').style.display = "block";
}
const loading_function= ()=>{
    document.getElementById('save_btn').innerHTML = "Loading...";
    
    setTimeout(()=>{
        validateNew();
        document.getElementById('save_btn').innerHTML = "Save";
    }, 1000)
}
function validateNew(){
    const oldPass = document.getElementById('oldpass').value;
    const newPass = document.getElementById('newpass').value;
    if(oldPass.trim().length == 0){
        document.getElementById("loioldpass").innerHTML = "Xin mời nhập lại"
        return false;
    }
    else{
        document.getElementById("loioldpass").innerHTML = "";
    }
    if(newPass.trim().length == 0){
        document.getElementById("loinewpass").innerHTML = "Xin mời nhập lại"
        return false;
    }
    else{
        document.getElementById("loinewpass").innerHTML = "";
    }
    if(oldPass !== Passcu ) {
        document.getElementById("loioldpass").innerHTML = "Sai mật khẩu cũ";
        return false;
    }else{
        document.getElementById("loioldpass").innerHTML = "";
    }
    if(newPass === oldPass ) {
        document.getElementById("loinewpass").innerHTML = "Trùng mật khẩu cũ";
        return false;
    }else{
        document.getElementById("loinewpass").innerHTML = "";
    }
    if(true) {
        Passcu = newPass;
        document.getElementById("tcong").innerText = "Đổi mật khẩu mới thành công!!";
        document.getElementById('box1').style.display='block';
        document.getElementById('box2').style.display='none';
    }
}