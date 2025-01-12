import React, { useRef, useState } from 'react';
import {TextAnimate} from "@/components/ui/text-animate.tsx";

const ReactComponent: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const onIncrease = () => {
        setCount(count + 1);
        
    }

    return (
        <div>

            <TextAnimate animation="blurInUp" by="character" className={'text-2xl'}>
                Hello, React!
            </TextAnimate>
            <div>
                <p>Count: {count}</p>
                <button onClick={onIncrease}>Increase</button>
            </div>
        </div>
    );
};

export default ReactComponent;