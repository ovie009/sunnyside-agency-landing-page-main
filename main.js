let toggleCollapse = false;

console.log("Hello World");

function collapse() {

    if (toggleCollapse == true) {
        document.querySelector(".dropdown-list").style.visibility="hidden";
        document.querySelector(".dropdown-collapse").style.display="none";
        toggleCollapse = false;
        
    } else{

        document.querySelector(".dropdown-collapse").style.display="block";
        document.querySelector(".dropdown-list").style.visibility="visible";
        toggleCollapse = true;

    }
}