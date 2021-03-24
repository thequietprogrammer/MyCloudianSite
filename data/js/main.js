// To change the current navigation button and text.
function changeTab(eId) {
    let tabList = document.getElementById("navigationArea").querySelectorAll(".navButton");
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].className = "navButton";
    }
    document.getElementById("nav" + eId.slice(3)).className += " activeNav";
    tabList = document.getElementById("textArea").querySelectorAll(".hide");
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].className = "hide";
    }
    document.getElementById("tab" + eId.slice(3)).className += " active";
}