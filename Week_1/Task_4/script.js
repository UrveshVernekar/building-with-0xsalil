function expandMenu() {
    var menu = document.getElementById("navbar");
    if (menu.className === "nav") {
      menu.className += " responsive";
    } else {
      menu.className = "nav";
    }
  }