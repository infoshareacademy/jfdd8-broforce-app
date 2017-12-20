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

        return (
            <div class="menu">
                <Button type="primary">Kotlet Schabowy - 9.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Zraz wołowy - 5.80 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Żurek - 5.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Flaki - 7.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Ziemniaki - 3.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Frytki - 5.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Kasza - 4.00 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Tłuszcz - 0.90 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Kompot - 3.00 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Kefir - 3.50 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Buraczki na ciepło - 3.00 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Kapusta kiszona - 3.00 PLN<br/>Dodaj do zamówienia</Button>
                <Button type="primary">Marchewka z groszkiem - 3.50 PLN<br/>Dodaj do zamówienia</Button>
            </div>
        )
    }
}



export default FoodItem;