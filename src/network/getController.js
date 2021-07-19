
import serverUrl from '../utils/config';

const categoryPrefix = "/products";

// todo brand

// todo id

const getController = (id = '') => {
   return fetch(`${serverUrl}${categoryPrefix}${id}`)
        .then((res) => {
            return res.json();
    });
};

export default getController;