import './list.scss';
import Feature from './../../components/Feature';
import {menu1, menu2} from './../../data/menu';
import Icon from './../../components/Icon';
const Listing = () => {
  return (
    <div className="listing">
      <div className="hero">
        <img className="hero__img" alt="Highlands Coffee" src="https://images.foody.vn/res/g75/742579/prof/s1242x600/image-d8aed646-201116102541.jpeg" />
      </div>
      <div className="container pt">
        <div className="searchInput">
          <div className="searchInput__icon"><Icon name="search"/></div>
          <div className="searchInput__col"><input className="searchInput__form-control" type="text" placeholder="Tìm kiếm tên sản phẩm..." /></div>
        </div>
        <div className="item">
          <Icon className="item__icon item__icon--grren" name="verified"/>
          <span className="item__name item__name--large">Hightlands Coffee - 123 Nguyễn Đình Chiểu</span>
        </div>
        <div className="item">
          <Icon className="item__icon" name="location_on"/>
          <span className="item__name">213/22/4 Nguyễn Trãi, P.2, Q.5</span>
        </div>
        <div className="item">
          <Icon className="item__icon" name="access_time"/>
          <span className="item__name">08:00 - 22:00</span>
        </div>
        <div className="row">
          <button className="selectBtn blue">
            <span className="selectBtn__name">Đổi cửa hàng khác</span>
            <span className="material-icons selectBtn__icon">expand_more</span>
          </button>
        </div>
        <div className="row">
          <Feature 
            heading="Trà"
            data={menu1}
          />
          <div className="clear-line"></div>
          <Feature 
            heading="Cà phê"
            data={menu2}
          />
        </div>
      </div>
    </div>
  );
}

export default Listing;
