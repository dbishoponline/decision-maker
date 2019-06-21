import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import loadable from '@loadable/component';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import resources from './locales';

const NavLinkWithI18n = translate('decisions')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/decisions" className="nav-link" activeClassName="active">
    {t('decisions:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/decisions" component={loadable(() => import('./containers/Decisions').then(c => c.default))} />],
  navItem: [
    <MenuItem key="/decisions">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'decisions', resources }]
});
