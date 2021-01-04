// import { ApiService } from '~/services';
// import { AUTH_MODULE, SET_TOKEN } from '~/store/auth/constants';

// export default (ctx) => {
//     ApiService.interceptors.response.use(undefined, (error) => {
//         /**
//          * Error 401 Handler
//          */
//         if (error.response.status === 401 && error.response.config && !error.response.config.__isRetryRequest) {
//             ctx.store.commit(`${AUTH_MODULE}/${SET_TOKEN}`, null);
//             ctx.redirect('/signin');
//         }

//         throw error;
//     });
// }
