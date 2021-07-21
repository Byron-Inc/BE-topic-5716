var links = document.querySelectorAll("a")

for (var k = 0; k < links.length; k++) {
    if (links[k].href.includes("viewtopic.php?id=5716") || links[k].href.includes("viewtopic.php?pid=539135")) {
        links[k].style.color = "red";
    }
}
