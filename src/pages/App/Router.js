import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@page/default/Home';
import ResizeIcon from '@page/default/ResizeIcon';
import PageNotFound from '@page/default/PageNotFound';

function Router() {
    return (
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/resizeIcon" exact component={ResizeIcon} />

                <Route component={PageNotFound} />
            </Switch>
        </Suspense>
    );
}

export default Router;
