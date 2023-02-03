// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { PieChartOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  PieChartOutlined,
  BarChartOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'academy',
  title: <FormattedMessage id="academy" />,
  type: 'group',
  children: [
    {
      id: 'finance',
      title: <FormattedMessage id="finance" />,
      type: 'item',
      url: '/academy/finance',
      icon: icons.PieChartOutlined
    },
    {
      id: 'academy_trading',
      title: <FormattedMessage id="academy_trading" />,
      type: 'item',
      url: '/academy/trading',
      icon: icons.BarChartOutlined
    }
  ]
};

export default options;
