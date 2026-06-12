

// ADMIN LOGIN FORM:
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const emailField = document.getElementById("email").value;
    const passwordField = document.getElementById("password").value;

    if( emailField === "admin@email.com" && passwordField === "adminloginpanel" ) {
        document.getElementById("admin_login").style.display = "none";
        document.getElementById("admin_panel").style.display = "flex";
    } else {
        document.getElementById("alert-message").textContent = `Access denied. Please try again`;
    }
})

// CHANGE BETWEEN TBR, MONTHLY READS & FAVORUITES PAGE CONTENT:
const pageBtns = document.querySelectorAll("[data-page]");
const adminPages = document.querySelectorAll(".page");

pageBtns.forEach( btn => {
    btn.addEventListener("click", () => {
        const activePage = btn.dataset.page;
        adminPages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(activePage).classList.add("active");
    });
});
