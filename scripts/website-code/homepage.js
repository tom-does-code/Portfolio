let homepageTitle = document.getElementById('HomepageTitle');


homepageTitle.onclick = function() {
    if (homepageTitle.style.color != 'blue') {
        homepageTitle.style.color = 'blue';
    } else {
        homepageTitle.style.color = '#e44856'
    }
};
