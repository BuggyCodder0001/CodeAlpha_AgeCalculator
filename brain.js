
document.querySelector(".btn-calc").addEventListener('click' , function() {
    let birthDate = document.getElementById('birthdate').value;
    let errorMsg = document.getElementById('errorMsg');
    let resultMsg = document.getElementById('resultMsg');

    errorMsg.innerText = "";
    resultMsg.innerText = "";

    if(birthDate === ''){
        errorMsg.innerText = "Please select your birthdate!";
        return;
    }

    let today = new Date();
    let birth = new Date(birthDate);

    if(birth > today){
        errorMsg.innerText = "Birthdate cannot be in the future";
        return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();


    if(days < 0) {
        months -= 1;

        const prevMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += prevMonthDays;
    }

    if(months < 0){
        years -= 1;
        months += 12;
    }

    if(years < 0){
        errorMsg.innerText = "Birthdate cannot be in the future"
        return;
    }

    resultMsg.innerText = "Your age is : "+ years +" Years, "+ months + " Months, "+ days + " Days.";
});