function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Email validation
    let st=0;
    for(let i=0;i<username.length;i++){
        if(username[i]=='@' && st==0){
            st=1;
        }
        if(username[i]=='.' && st==1){
            st=2;
        }
    }
    if(st!=2){
        alert('Invalid email address!');
        return;
    }
    
    // Password validation   
    for(let i=0; i<password.length; i++){
        let ascii = password.charCodeAt(i);
        if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) || (ascii == 64) || (ascii >= 48 && ascii <= 57))){
            alert('Password should not contain any special character other than @ and must contain an uppercase letter and a number!');
            return;
        }
    }
    let cp=0,nm=0;
    for(let i=0;i<password.length;i++){
        if(password[i]<='9' && password[i]>='0'){
            nm=1;
        }
        if(password[i]<='Z' && password[i]>='A'){
            cp=1;
        }
    }
    if(cp==0 || nm==0){
        alert('Password should not contain any special character other than @ and must contain an uppercase letter and a number!');
        return;
    }

    alert('Login successful!');
    location.reload();
}
