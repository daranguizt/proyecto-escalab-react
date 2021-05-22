import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainScreen } from '../components/main/MainScreen';
import { SearchResults } from '../components/main/SearchResults';
import { DetailsScreen } from '../components/manga-details/DetailsScreen';
import { NotFoundScreen } from '../components/not-found/NotFoundScreen';

export const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainScreen}/>
            <Route exact path="/manga-details/:id" component={DetailsScreen}/>
            <Route exact path="/search" component={SearchResults} />
            <Route path="*" component={NotFoundScreen}/> 
        </Switch>
    )
}
