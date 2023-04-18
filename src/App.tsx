import React from 'react';
import Card, {CardVariant} from "./components/Card";

const App = () => {
    return (
        <div>
          <Card onClick={(num) => {console.log('click ', num)}} width='150px' height='150px' variant={CardVariant.outlined}/>
        </div>
    );
};

export default App;