function checkOnlyOne (sidebarInput) {

    const checkboxes = document.getElementsByName("sidebar_icons");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    })

    sidebarInput.checked = true;
}