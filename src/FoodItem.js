import React from 'react'
import { Button } from 'antd';
import './index.css';

class FoodItem extends React.Component {

    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render () {
        const size = this.state.size;
        return (
            <div class="menu">
                <Button type="primary">Kotlet Schabowy - 9.50 PLN</Button>
                <Button type="primary" size={size}>Zraz wołowy - 5.80 PLN</Button>
                <Button type="primary" size={size}>Żurek - 5.50 PLN</Button>
                <Button type="primary" size={size}>Flaki - 7.50 PLN</Button>
                <Button type="primary" size={size}>Ziemniaki - 3.50 PLN</Button>
                <Button type="primary" size={size}>Frytki - 5.50 PLN</Button>
                <Button type="primary" size={size}>Kasza - 4.00 PLN</Button>
                <Button type="primary" size={size}>Tłuszcz - 0.90 PLN</Button>
                <Button type="primary" size={size}>Kompot - 3.00 PLN</Button>
                <Button type="primary" size={size}>Kefir - 3.50 PLN</Button>
                <Button type="primary" size={size}>Buraczki na ciepło - 3.00 PLN</Button>
                <Button type="primary" size={size}>Kapusta kiszona - 3.00 PLN</Button>
                <Button type="primary" size={size}>Marchewka z groszkiem - 3.50 PLN</Button>
            </div>
        )
    }
}



export default FoodItem;