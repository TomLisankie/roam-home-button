homeButton = document.createElement("button");
homeButton.class = "bp3-button bp3-minimal bp3-icon-calendar bp3-small";
homeButton.style = "margin-left: 24px;";
homeButton.innerText = "Home";
homeButton.onclick = homeButtonClicked;

function homeButtonClicked(e) {
    e.preventDefault();
    window.location = window.location.hash.split("/").slice(0,3).join("/");
}

function insertHomeButton() {
    roamTopbar = document.getElementsByClassName("roam-topbar")[0];
    if (roamTopbar == undefined) {
        window.setTimeout(insertHomeButton, 500);
        return;
    }
    document.getElementsByClassName("roam-topbar")[0].getElementsByClassName("flex-h-box")[0].children[0].insertAdjacentElement("afterend", homeButton);
}

insertHomeButton();
