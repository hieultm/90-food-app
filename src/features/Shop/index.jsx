import { useEffect, useContext } from 'react';
import ShopContent from './Components/ShopContent/index.jsx';
import Banner from '../../components/Banner/index.jsx';
import ShopFilter from './Components/ShopFilter/index';

import { apiContext } from '../../context/apiContext.js';
import { AuthContext } from '../../context/AuthContext.js';

import { Container } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

function Shop() {
    const { name } = useParams();
    const history = useHistory();
    const { setHasHeader } = useContext(AuthContext);

    const { getProducts } = useContext(apiContext);

    window.addEventListener('load', () => {
        const params = history.location.search;
        if (params) {
            const paramsObj = JSON.parse(
                '{"' + decodeURI(params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')) + '"}',
            );
            getProducts(name, paramsObj);
        } else {
            getProducts(name);
        }
    });

    useEffect(() => {
        setHasHeader(true);
    }, [setHasHeader]);

    return (
        <section>
            <Banner />
            <Container>
                <div className="flex justify-center">
                    <ShopFilter />
                    <ShopContent />
                </div>
            </Container>
        </section>
    );
}
export default Shop;
