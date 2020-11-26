import './confirmpayment.scss';
import Feature from '../../components/Feature';
import ProductItem from '../../components/ProductItem';
import {menu1, menu2} from '../../data/menu';
import Icon from '../../components/Icon';
const ConfirmPayment = () => {
  return (
    <div className="confirm">
      <div className="container pt">
        <div className="row">
          <h4 className="delivery-status">Tự đến lấy</h4>
          <ProductItem 
            heading="Thông tin đơn hàng"
            data={menu2}
          />
          <div className="time">
            <div className="time__tagline-time">Thời gian nhận hàng</div>
            <div className="time__display-time">
              <div className="time__icon small">
                <Icon name="query_builder"></Icon>
              </div>
              <div className="time__text">ASAP - 15:30, Hôm nay 30/06</div>
              <div className="time__icon">
                <Icon name="chevron_right"></Icon>
              </div>
            </div>
          </div>
          <div className="flex-row note">
            <div className="col-auto icon">
              <Icon name="sticky_note_2"></Icon>
            </div>
            <div className="col text">
              Nhập ghi chú
            </div>
          </div>
        </div>
        <div className="row">
          <div className="clear-line"></div>
          <Feature 
            heading="Thông tin đơn hàng"
            data={menu2}
          />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPayment;
