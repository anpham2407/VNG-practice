import {Fragment} from 'react';
import './confirmpayment.scss';
import Feature from '../../components/Feature';
import ProductItem from '../../components/ProductItem';
import {menu1, menu2} from '../../data/menu';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Topbar from '../../components/Topbar';
const ConfirmPayment = () => {
  return (
    <Fragment>
      <Topbar 
        title="Xác nhận thanh toán"
      />
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
                  <Icon size={16} color="#b5b5b5" name="query_builder"></Icon>
                </div>
                <div className="time__text">ASAP - 15:30, Hôm nay 30/06</div>
                <div className="time__icon">
                  <Icon size={16} color="#b5b5b5" name="chevron_right"></Icon>
                </div>
              </div>
            </div>
            <div className="flex-row note">
              <div className="col-auto icon">
                <Icon size={16} color="#b5b5b5" name="sticky_note_2"></Icon>
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
              edit
            />
            <div className="amount">
              <div className="flex-row">
                <div className="col-auto col-label">
                  Tạm tính
                </div>
                <div className="col col-value">
                  117.000đ
                </div>
              </div>
              <div className="flex-row amount__discount">
                <div className="col-auto col-label">
                  Mã giảm giá
                </div>
                <div className="col col-value green">
                  -10.000đ
                </div>
              </div>
              <div className="flex-row amount__total">
                <div className="col-auto col-label">
                  Tổng tiền
                </div>
                <div className="col col-value">
                  107.000đ
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="clear-line"></div>
            <div className="discount-code">
              <h4 className="feature-heading discount-code__title">Thêm mã giảm giá</h4>
              <div className="discount-code__body">
                <div className="flex-row">
                  <div className="col-auto discount-code__label">
                    <Icon className="discount-code__firsticon" color="#0190f3" name="card_giftcard" size={24}/>
                    <span className="discount-code__text">VNGTHANG7</span>
                    <Icon className="discount-code__lasticon" color="#52ad34" name="check_circle" size={18}/>
                  </div>
                  <div className="col discount-code__value">
                    <Button label="Áp dụng" className="primary apply" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="clear-line"></div>
            <div className="apply-pay">
              <div className="apply-pay__text">
                <span>Chỉ thanh toán bằng</span>
                <img src="https://blogchiasekienthuc.com/wp-content/uploads/2019/07/su-dung-dich-vu-zalopay.png" />
              </div>
              <div className="apply-pay__button">
                <Button label="Thanh toán 107.000đ" large fullWidth gradient className="primary apply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ConfirmPayment;
