import {Work} from './work.model';
export interface Home{
    name: string;
    work: Array<Work>;
    about: string;
    contact: string;
    backgroundImage:{
        url:string;
    }
}
