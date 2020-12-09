const Header = () => {
    return (
        <div className="header__block">
            <div className="main__menu">
                <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt='' />
                <a className="header__item" href="#1">Profile</a>
                <a className="header__item" href="#2">News</a>
                <a className="header__item" href="#3">Settings</a>
            </div>
            <div className="user__block">
                <a className="user__item" href="#1">Login</a>
                <a className="user__item" href="#2">Signup</a>
            </div>
        </div>
    );
}

export default Header;