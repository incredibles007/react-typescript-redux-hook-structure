import { APROGRESS} from '../types';
import { Progress } from '../../models';

const initialState: Progress = {
    progress:false    
};

export default function progressReducer(state = initialState, { type }:any) {
    switch (type) {
        case APROGRESS.START:
            return {
                    progress: true
                };                
        case APROGRESS.STOP:
            return {
                    progress: false
                };                    
        default:
            return state;
    }
}