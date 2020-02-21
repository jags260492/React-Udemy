import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
const layout = (props) => (
  <Aux>
    <div> Toolbar, sidebrawer, backdrop </div>
    <main className={classes.main}>
      {props.children}
    </main>
  </Aux>
);

export default layout;