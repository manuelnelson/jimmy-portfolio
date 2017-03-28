import {Slide} from './slide.model'
export interface Home{
    name: string;
    carousel: Array<Slide>;
    about: string;
    backgroundImage:{
        url:string;
    }
}
