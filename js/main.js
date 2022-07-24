const navbar = document.querySelector(".navbar");
const tabsSwitch = document.querySelectorAll(".tabs ul li");
const tabHeader = document.querySelector(".tabs h2");
const textArray = [
    {
        header: "Tabs with soft transitioning effect",
        textOne: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sapiente error iusto vel ipsam nulla, alias qui repellendus adipisci molestiae voluptatibus nisi reprehenderit sit inventore autem unde odio maiores magni.",
        textTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores.",
    },
    {
        header: "header two",
        textOne: "content two",
        textTwo: "content two",
    },
    {
        header: "header three",
        textOne: "content three",
        textTwo: "content three",
    }
];


window.onscroll = () => {
    if (window.pageYOffset >= navbar.clientHeight && !navbar.classList.contains("scroll")) {
        navbar.classList.add("scroll");
        navbar.classList.add("navbar-fixed-top");
        document.body.style.paddingTop = navbar.clientHeight + "px";
    } else if (window.pageYOffset < navbar.clientHeight && navbar.classList.contains("scroll")) {
        navbar.classList.remove("scroll");
        navbar.classList.remove("navbar-fixed-top");
        document.body.style.paddingTop = 0 + "px";
    };
};

tabsSwitch.forEach((tab, tIndex) => {
    tab.addEventListener("click", () => {
        tabsSwitch.forEach(tab => { tab.classList.remove("active") });
        tab.classList.add("active");
        textArray.forEach((element, index) => {
            if (tIndex === index) {
                tabHeader.innerHTML = element.header;
                tabHeader.nextElementSibling.innerHTML = element.textOne;
                tabHeader.nextElementSibling.nextElementSibling.innerHTML = element.textOne;
            }
        })
    });
});

