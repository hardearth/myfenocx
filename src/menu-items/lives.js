// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { EyeOutlined } from '@ant-design/icons';

// icons
const icons = {
  EyeOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'lives',
  title: <FormattedMessage id="lives" />,
  type: 'group',
  children: [
    {
      id: '_lives',
      title: <FormattedMessage id="_lives" />,
      type: 'item',
      url: '/lives/lives',
      icon: icons.EyeOutlined
    }
  ]
};

export default options;
