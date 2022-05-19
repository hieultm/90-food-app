import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import routesConfig from '../configs/routesConfig';

function Routes() {
    return (
        <Suspense fallback={<div className="h-screen w-full z-[9999] bg-zinc-300">Loading...</div>}>
            <Switch>
                {routesConfig.map(({ exact, path, component }, index) => (
                    <Route key={`route-${index}`} path={path} component={component} exact={exact} />
                ))}
            </Switch>
        </Suspense>
    );
}

export default Routes;
