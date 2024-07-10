class Navbar {
    constructor() {
        this.navItems = [
            { name: 'Home', link: '#' },
            { name: 'About', link: '#' },
            { name: 'Services', link: '#' },
            { name: 'Contact', link: '#' },
            { name: 'Sign Up', link:'signupForm'},
        ];
    }

    render() {
        let navbar = document.createElement('div');
        navbar.className = 'navbar__navbar';

        let navList = document.createElement('ul');
        navList.className = 'navbar__nav-list';

        let imgContainer = document.createElement("div")
        this.imgContainer = document.createElement("navbar__navbar")
        imgContainer.classList.add("row")

        let img = document.createElement("img")
        img.src = "assets/images/logo.jpg"
        img.classList.add("img")

        let cont = document.createElement("h1")
        cont.innerHTML = "DucManh"

        this.navItems.forEach(item => {
            let navItems = document.createElement('li');
            navItems.className = 'navbar__nav-items'
            let navLink = document.createElement('a');
            navLink.id = item.link;
            navLink.innerText = item.name;
            navItems.appendChild(navLink);
            navList.appendChild(navItems);
        });
        navbar.appendChild(navList);
        navbar.appendChild(imgContainer);
        imgContainer.appendChild(img);
        imgContainer.appendChild(cont)


        return navbar;
    }
};

export default Navbar;
