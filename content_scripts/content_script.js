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
    roamTopbar = document.getElementsByClassName("rm-topbar")[0];
    if (roamTopbar == undefined) {
        window.setTimeout(insertHomeButton, 500);
        return;
    }
    document.getElementsByClassName("rm-topbar")[0].getElementsByClassName("rm-open-left-sidebar-btn")[0].insertAdjacentElement("afterend", homeButton);
}

insertHomeButton();
