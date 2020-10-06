import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import IndexNotFound from "../../components/NotFound/IndexNotFound";
import IndexAddEdit from "./Pages/AddEdit/IndexAddEdit";
import IndexMain from "./Pages/Main/IndexMain";

Photo.propTypes = {};

function Photo() {
  /// sử dụng RouteMatch() để có thuộc tích Match (Url)
  const match = useRouteMatch();
  console.log({ match });
  return (
    <Switch>
      <Route exact path={match.url} component={IndexMain} />

      <Route path={`${match.url}/add`} component={IndexAddEdit} />
      <Route path={`${match.url}/:photoId`} component={IndexAddEdit} />

      <Route component={IndexNotFound} />
    </Switch>
  );
}

export default Photo;
