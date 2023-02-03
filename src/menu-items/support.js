// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  QuestionOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'support',
  title: <FormattedMessage id="support" />,
  type: 'group',
  children: [
    {
      id: '_support',
      title: <FormattedMessage id="_support" />,
      type: 'item',
      url: '/support/support',
      icon: icons.QuestionOutlined
    }
  ]
};

export default options;
