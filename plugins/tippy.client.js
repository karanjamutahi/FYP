import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';


export default(context, inject) => {
    try{
        const tooltip = tippy('#route-creator-map', {
        followCursor: true,
        plugins: [followCursor] 
        });
        inject('tooltip', tooltip[0]);
        console.log('Tooltip instance: ')
        console.log(tooltip[0]);
    } catch(e) {
        console.log(e);
    }
}