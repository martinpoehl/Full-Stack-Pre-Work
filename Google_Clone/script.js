const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

//Search function
searchButton.addEventListener('click', () => {
    if(searchBar!=="") {
        document.location.href = ("https://www.google.ch/search?q=" + searchBar.value + "&sxsrf=ALiCzsY-hZS3568MZXKiWSZqfFYWbUFeFA%3A1659351551516&source=hp&ei=_7HnYtGwHJGolwSPhLmQAQ&iflsig=AJiK0e8AAAAAYufAD43Zke9ejFL1ac4i_7M2Anqpwr9D&ved=0ahUKEwiRrKGevqX5AhUR1IUKHQ9CDhIQ4dUDCAg&uact=5&oq=" + searchBar.value + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAguEIAEELEDMgUIABCABDIICAAQgAQQsQMyCwguEIAEEMcBEK8BMgUIABCABDIICAAQsQMQgwEyCwgAEIAEELEDEIMBMgsILhCABBCxAxCDATILCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOg4ILhCABBCxAxDHARDRAzoFCC4QgAQ6CAguELEDEIMBOhEILhCABBCxAxCDARDHARCvAToOCC4QgAQQsQMQgwEQ1AI6DgguEIAEELEDEMcBEK8BUABY6gNgsAVoAHAAeACAAWOIAbADkgEBNZgBAKABAQ&sclient=gws-wiz");
    }
});

//Enter key to search
searchBar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
});