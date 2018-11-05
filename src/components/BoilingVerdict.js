import React from 'react';
import Label from './labels/Label';

const boilingVerdict = (props) => {

  if (props.celsius >= 200) {
    return <Label theColor={props.color}> It's over 200 Celsius, it's boooiiiilingg! </Label>;        
  } else if (props.celsius >= 100) {
    return <Label theColor={props.color}>The water would boil.</Label>;
  } else {
    return <Label theColor={props.color}>The water would not boil.</Label>;
  }

}

export default boilingVerdict;