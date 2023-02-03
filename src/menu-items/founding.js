// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { QuestionCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

// icons
const icons = {
  QuestionCircleOutlined,
  CheckCircleOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'founding',
  title: <FormattedMessage id="founding" />,
  type: 'group',
  children: [
    {
      id: 'demo',
      title: <FormattedMessage id="demo" />,
      type: 'item',
      url: '/founding/demo',
      icon: icons.QuestionCircleOutlined
    },
    {
      id: 'real',
      title: <FormattedMessage id="real" />,
      type: 'item',
      url: '/founding/real',
      icon: icons.CheckCircleOutlined
    }
  ]
};

export default options;
