// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { UserSwitchOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserSwitchOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'trading',
  title: <FormattedMessage id="trading" />,
  type: 'group',
  children: [
    {
      id: 'copy',
      title: <FormattedMessage id="copy" />,
      type: 'item',
      url: '/trading/copy',
      icon: icons.UserSwitchOutlined
    }
  ]
};

export default options;
