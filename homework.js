const displaysText = " Goze is";

const practice = document.getElementById("heading-msg");

// practice.textContent += displaysText === "" ?  "This is Not Empty" : `${displaysText}` ;


if (displaysText === ""){
    practice.textContent = "This is Empty";
} else {
    practice.textContent = `${displaysText}` + " " + practice.textContent;
}