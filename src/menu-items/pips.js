// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { NodeIndexOutlined, DollarCircleOutlined, LineChartOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  NodeIndexOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  BarChartOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'pips',
  title: <FormattedMessage id="pips" />,
  type: 'group',
  children: [
    {
      id: 'binary',
      title: <FormattedMessage id="binary" />,
      type: 'item',
      url: '/pips/binary',
      icon: icons.NodeIndexOutlined
    },
    {
      id: 'cryptos',
      title: <FormattedMessage id="cryptos" />,
      type: 'item',
      url: '/pips/cryptos',
      icon: icons.DollarCircleOutlined
    },
    {
      id: 'forex',
      title: <FormattedMessage id="forex" />,
      type: 'item',
      url: '/pips/forex',
      icon: icons.LineChartOutlined
    },
    {
      id: 'synthetic',
      title: <FormattedMessage id="synthetic" />,
      type: 'item',
      url: '/pips/synthetic',
      icon: icons.BarChartOutlined
    }
  ]
};

export default options;
