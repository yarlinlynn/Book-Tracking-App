

// CHANGE BETWEEN TBR, MONTHLY READS & FAVORUITES PAGE CONTENT:
export function navigation() {
    
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
}

