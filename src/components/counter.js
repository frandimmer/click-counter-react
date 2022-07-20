import React from 'react';
import '../stylesheets/counter.css'

function Counter({ clickCount }) {
    return (
        <div className='counter-individual-container'>
            {clickCount}
        </div>
    )
}

export default Counter;