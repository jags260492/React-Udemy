import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES={
  salad:50,
  bacon:40,
  cheese:60,
  meat:10
}

class BurgerBuilder extends Component {
  state= {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice: 200,
  }

  addIngredientHandler= (type) =>{
    const oldCount= this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const undatedIngredients ={
      ...this.state.ingredients
    };
    undatedIngredients[type] = updatedCount
    const priceAddition= INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice;
    const newPrice = oldPrice+priceAddition;
    this.setState({totalPrice: newPrice, ingredients: undatedIngredients});

  }
  removeIngredientHandler=(type)=>{
    const oldCount= this.state.ingredients[type];
    if(oldCount<=0){
      return;
    }
    const updatedCount = oldCount-1;
    const undatedIngredients ={
      ...this.state.ingredients
    };
    undatedIngredients[type] = updatedCount
    const priceDeduction= INGREDIENT_PRICES[type];
    const oldPrice =this.state.totalPrice;
    const newPrice = oldPrice-priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: undatedIngredients});
  }
  
  render() {
    const disabledInfo={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key]= disabledInfo[key] <= 0
    }
    console.log("disabledInfo[key]",disabledInfo)
    return (
      <Aux>
        <Burger   ingredients={this.state.ingredients}/>
        <BuildControls   
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved= {this.removeIngredientHandler}
        disabled={disabledInfo}
        price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;