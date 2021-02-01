import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '@route';

function Router() {
    return (
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <Switch>
                {routes.map((row, index) => (
                    <Route key={index} path={row.path} exact={row.exact} component={row.component}></Route>
                ))}
            </Switch>
        </Suspense>
    );
}

export default Router;
