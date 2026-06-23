
// ADMIN LOGIN FORM:
export function initializeLogin() {
    
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
}