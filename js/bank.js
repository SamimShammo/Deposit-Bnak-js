document.getElementById('submit').addEventListener('click', function(){
    // 1st email and email get value ///
    const emailLogin = document.getElementById('login-email');
    const userEmial = emailLogin.value;
    // console.log('get value')
    // 2nd password and get value //
    const passLogin = document.getElementById('login-pass')
    const userPass = passLogin.value;
    // console.log('get value')
    if(userEmial == 'jserbaap@gmail.com' && userPass == 'heavyRelaxd'){
        window.location.href = 'banke.html';
    }

})