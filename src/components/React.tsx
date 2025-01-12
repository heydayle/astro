import React, { useRef, useState } from 'react';


const ReactComponent: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const onIncrease = () => {
        setCount(count + 1);
        
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            <div>
                <p>Count: {count}</p>
                <button onClick={onIncrease}>Increase</button>
            </div>
        </div>
    );
};

export default ReactComponent;