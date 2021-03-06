import React from 'react';
import classes from '../BuildControls/BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p>Current price:<strong> {props.price} </strong></p>
    {controls.map(ctrl =>(
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label} 
      added={()=>props.ingredientAdded(ctrl.type)}
      removed={()=>props.ingredientRemoved(ctrl.type)}
      disabled={ props.disabled[ctrl.type] }
       />
    ))}
  </div>
);
export default buildControls;