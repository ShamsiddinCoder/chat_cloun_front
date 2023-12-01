import React, {useState, useEffect} from 'react';
import s from './AvatarSlider.module.css';
import Slide from './Slide/Slide';
import next from '../../asets/next.png';
import {useSelector, useDispatch} from 'react-redux';
import ResizeFunc from '../../Actions/ResizeFunc';
import Close from '../../asets/close.png';
import { closeSLider } from '../../Reduxes/ActReducer';

export default function AvatarSlider() {
  const dates = useSelector(select => select);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const datesAvatars = dates?.users?.dates?.allAvatars;
  let sliderTransition = datesAvatars?.length === 2 ? 1 : datesAvatars?.length === 1 ? 2 : 0;

  const response = [
    {breakpoint: {width: 0, item: 1}},
    {breakpoint: {width: 750, item: 2}},
    {breakpoint: {width: 1050, item: 3}},
  ];
  
  const [container, target, boxWidth, items] = ResizeFunc(response);

  let actButtons = datesAvatars?.length > items ? false : true;
  
  const sliders = datesAvatars?.map(elem =>  <Slide key={elem.id} boxWidth={boxWidth} {...elem} />);
  console.log(datesAvatars);

  const silderMove = (e) => {
    if(e.target.name === 'next'){
      if(count >= datesAvatars?.length - items){
        setCount(itm => itm = datesAvatars?.length - items);
      }else {
        setCount(itm => itm += 1);
      }
    }else {
      if(count / 2 === 0){
        setCount(itm => itm = 0);
      }else {
        setCount(itm => itm -= 1);
      }
    }
  }
  
  return (
    <div className={s.avatarSlider} ref={target} style={{display: dates.act.slider ? 'flex' : 'none'}} >
      <div className={s.closeAvatarSlider} onClick={() => dispatch(closeSLider())} ><img src={Close} alt="" /></div>
      <button disabled={actButtons} name='prev' onClick={(e) => silderMove(e)}>
        <img src={next} alt="" />
      </button>
      <div ref={container} className={s.sliders}>
        <div className={s.sliderInner}
          style={{transform: `translateX(${-((sliderTransition / 2) + count) * boxWidth}px)`,
                  transition: '.4s ease'
          }}
        >
          {sliders}
        </div>
      </div>
      <button disabled={actButtons} name='next' onClick={(e) => silderMove(e)}>
        <img src={next} alt="" />
      </button>
    </div>
  )
}
