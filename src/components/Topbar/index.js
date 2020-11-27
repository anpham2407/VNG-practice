import './topbar.scss';
import Icon from './../Icon';
const Topbar = (props) => {
  return (
    <header className="header">
        <button className="header__button">
            <Icon className="header__icon--fix" name="navigate_before"/>
        </button>
        <div className="header__title">
            {!!props.title && props.title}
        </div>
        <button className="header__button">
            <Icon className="header__icon--fix" name="more_horiz"/>
        </button>
    </header>
  );
}

export default Topbar;
