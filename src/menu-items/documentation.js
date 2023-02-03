// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HddOutlined, FileImageOutlined } from '@ant-design/icons';

// icons
const icons = {
  HddOutlined,
  FileImageOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'documentation',
  title: <FormattedMessage id="documentation" />,
  type: 'group',
  children: [
    {
      id: '_documentation',
      title: <FormattedMessage id="_documentation" />,
      type: 'item',
      url: '/documentation/documentation',
      icon: icons.HddOutlined
    },
    {
      id: 'publicity',
      title: <FormattedMessage id="publicity" />,
      type: 'item',
      url: '/documentation/publicity',
      icon: icons.FileImageOutlined
    }
  ]
};

export default options;
