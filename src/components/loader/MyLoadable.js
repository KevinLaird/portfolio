import Loadable from 'react-loadable';
import Loading from './LoadingComponent';

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: Loading,
        delay: 400,
        timeout: 1500
    }, opts));
};