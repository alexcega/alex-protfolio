function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



function toggleCerts() {
    const moreCerts = document.querySelector(".more-certs");
    const arrow = document.querySelector(".expand-toggle .arrow");

    moreCerts.classList.toggle("hidden");
    arrow.classList.toggle("rotated");
}