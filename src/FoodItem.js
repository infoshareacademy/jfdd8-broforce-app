import React from 'react'
import ReactDOM from 'react-dom';
import { Button, Radio, Icon } from 'antd';

class FoodItem extends React.Component {
    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        return (


            class ButtonSize extends React.Component {
                state = {
                    size: 'large',
                };

                handleSizeChange = (e) => {
                    this.setState({ size: e.target.value });
                }

                render() {
                    const size = this.state.size;
                    return (
                        <div>
                        <Button type="primary" size={size}>Primary</Button>

                <p>DUPA</p>
            </div>
        )
    }
}

export default FoodItem;