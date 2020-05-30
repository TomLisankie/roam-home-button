homeButton = document.createElement("button");
homeButton.class = "bp3-button bp3-minimal bp3-icon-calendar bp3-small";
homeButton.style = "margin-left: 24px;";
homeButton.innerText = "Home";
console.log("hello from content script");

function insertHomeButton() {
    roamTopbar = document.getElementsByClassName("roam-topbar")[0];
    if (roamTopbar == undefined) {
        window.setTimeout(insertHomeButton, 500);
        return;
    }
    document.getElementsByClassName("roam-topbar")[0].getElementsByClassName("flex-h-box")[0].children[0].insertAdjacentElement("afterend", homeButton);
}

insertHomeButton();
