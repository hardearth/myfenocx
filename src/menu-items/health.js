// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HeartOutlined } from '@ant-design/icons';

// icons
const icons = {
  HeartOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'health',
  title: <FormattedMessage id="health" />,
  type: 'group',
  children: [
    {
      id: '_health',
      title: <FormattedMessage id="_health" />,
      type: 'item',
      url: '/health/health',
      icon: icons.HeartOutlined
    }
  ]
};

export default options;
