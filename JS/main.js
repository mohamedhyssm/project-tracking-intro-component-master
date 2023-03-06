let menu = document.getElementById("menu"),
  links = document.getElementById("links"),
  linksLi = Array.from(links.children)

const closeMenu = `<path fill="#242942" fill-rule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"/>`,
  openMenu = `<g fill="#242942" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g>`;

if (window.innerWidth <= 767) {
  linksLi.forEach(li => {
    li.onclick = () => {
      menu.dataset.icon = "open";
      menu.innerHTML = openMenu;
      menu.setAttribute("style", "width: 24; height:16;");
      links.classList.remove("active")
    }
  })
}

menu.onclick = function () {
  if (menu.dataset.icon === "open") {
    menu.dataset.icon = "close";
    menu.innerHTML = closeMenu;
    menu.setAttribute("style", "width: 20; height: 20");
  }
  else {
    menu.dataset.icon = "open";
    menu.innerHTML = openMenu;
    menu.setAttribute("style", "width: 24; height:16;");
  }

  links.classList.toggle("active")
}