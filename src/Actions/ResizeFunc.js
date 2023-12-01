import React, {useRef, useState, useCallback} from 'react';

export default function ResizeFunc(response) {
    let container = useRef();
    let target = useRef();
    let observ = useRef();
    const [boxWidth, setBoxWidth] = useState(0);
    const [items, setItems] = useState(0);

    let itemx = 0;
    function resizeSlider() {
        response.forEach(elem => {
            if(window.innerWidth > elem.breakpoint.width){
                itemx = elem.breakpoint.item;
                setItems(itm => itm = elem.breakpoint.item);
            }
        });

        let containerWidth = container.current.offsetWidth;
        let boxesWidth = Math.floor(containerWidth / itemx);
        setBoxWidth(boxes => boxes = boxesWidth);
    }

    target = useCallback(elemes => {
        if(elemes){
            observ.current = new ResizeObserver(resizeSlider).observe(elemes);
        }
    }, []);
    
  return [container, target, boxWidth, items];
}
