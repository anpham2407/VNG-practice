import './topbar.scss';
import Icon from './../Icon';
const Sidebar = () => {
  return (
    <header className="header">
        <button className="header__button">
            <Icon className="header__icon--fix" name="navigate_before"/>
        </button>
        <div className="header__title">
            Hightland Coffee
        </div>
        <button className="header__button">
            <Icon className="header__icon--fix" name="more_horiz"/>
        </button>
    </header>
  );
}

export default Sidebar;
