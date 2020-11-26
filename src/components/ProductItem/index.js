import './productitem.scss'
const ProductItem = (props) => {
    return(
        <div className="item-res">
            <div className="col-auto">
                <div className="item-res__img">
                    <img src="https://play-lh.googleusercontent.com/F8cUV5oOLjCTMSvSRymK1154MwKalnvkepN4xGrfWBC_tcXvNTq_sEStiwCYV61lRdI=s180-rw" />
                </div>
            </div>
            <div className="col">
                <div className="item-res__content">
                    <div className="row-flex">
                        <div className="col">
                            <h4 className="item-res__name">Highlands Coffee - VNG Campus</h4>
                        </div>
                        <div className="col-auto">
                            <span className="textlink item-res__link">Thay đổi</span>
                        </div>
                    </div>
                    <div className="item-res__address">213/22/4 Nguyễn Trãi, P.2, Q.5, Tp.HCM</div>
                </div>
            </div>
            <div className="col-auto">
                <div className="prices">
                    {!!props.data.currentPrice &&
                        <div className="prices__sale-price">
                            {props.data.currentPrice}
                        </div>
                    }
                    
                    {!!props.data.salePrice &&
                        <div className="prices__sale-price">
                            {props.data.salePrice}
                        </div>
                    }
                    
                    {!!props.data.oldPrice &&
                        <div className="prices__old-price">
                            {props.data.oldPrice}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default ProductItem