import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import DecisionsView from '../components/DecisionsView';

interface DecisionsProps {
  t: TranslateFunction;
}

class Decisions extends React.Component<DecisionsProps> {
  public render() {
    return <DecisionsView {...this.props} />;
  }
}

export default translate('decisions')(Decisions);
