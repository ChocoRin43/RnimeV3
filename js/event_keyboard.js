try{
    addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            document.getElementById("showAlert").click();
        }
    });
}
catch(err) {
    console.log("Input Enter Sepertinya ada yang error!") = err.message;
}