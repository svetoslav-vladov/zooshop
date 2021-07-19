
import serverUrl from '../utils/config';

const categoryPrefix = "/products";

// todo brand

const getController = () => {
   return fetch(`${serverUrl}${categoryPrefix}`)
        .then((res) => {
            return res.json();
    });
};

export default getController;