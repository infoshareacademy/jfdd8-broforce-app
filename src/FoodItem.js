import React from 'react'
import { Button } from 'antd';
import './index.css';

const foodItems = [
{id: 1, name: 'Kotlet Schabowy', price: 9.50},
{id:2 , name: 'Zraz wołowy', price: 5.80},
{id: 3, name: 'Żurek', price: 5.50},
{id: 4, name: 'Flaki', price: 7.50},
{id: 5, name: 'Ziemniaki', price: 3.50},
{id: 6, name: 'Frytki', price: 5.50},
{id: 7, name: 'Kasza', price: 4.00},
{id: 8, name: 'Tłuszcz', price: 0.90},
{id: 9, name: 'Kompot', price: 3.00},
{id:10 , name: 'Kefir', price: 3.50},
{id:11 , name: 'Buraczki na ciepło', price: 3.00},
{id: 12, name: 'Kapusta kiszona', price: 3.00},
{id: 13, name: 'Marchewka z groszkiem', price: 3.50},
]

class FoodItem extends React.Component {

  state = {
    selectedFoodItemIds: []
  }

  handleChange = event => {
     const foodItemId = event.target.dataset.foodItemId

    this.setState({
      selectedFoodItemIds: this.state.selectedFoodItemIds.concat(foodItemId)
    })
}

    render () {

        return (
            <div className="menu">
              {
                foodItems.map(
                  foodItem => (
                    <p>
                      <input type="checkbox" onChange={this.handleChange} data-food-item-id={foodItem.id}/>
                      {foodItem.name} - {foodItem.price} PLN
                    </p>
                  )
                )
              }
              <button onClick={() => console.log(this.state.selectedFoodItemIds)}>Order</button>
            </div>
        )
    }
}



export default FoodItem;