import MenuItem from './../MenuItem';
import './feature.scss'
const Feature = (props) => {
    return (
        <section className="feature">
            <h4 className="feature-heading">
                {props.heading}
            </h4>
            {props.data.map(item => <MenuItem component="" key={item.id} data={item} type="edit"/>)}
        </section>
    );
};

export default Feature;