function Header(){
    return (
        <header className="header">
            <a href="#" className="logo"><i className="fas fa-seedling"></i>green</a>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#service">service</a></li>
                    <li><a href="#project">project</a></li>
                    <li><a href="#donate">donate</a></li>
                    <li><a href="#post">post</a></li>
                </ul>
            </nav>

            <div className="fas fa-bars"></div>
        </header>
    )
}

export default Header;