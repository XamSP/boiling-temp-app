import Label from './Label';

export class RedLabel extends Label{
  constructor(props){
    super(props);
    this.className = this.className + ' red-label';
  }
}