// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ReconciliationOutlined, GlobalOutlined, PictureOutlined } from '@ant-design/icons';

// icons
const icons = {
  ReconciliationOutlined,
  GlobalOutlined,
  PictureOutlined
};

// ==============================|| MENU ITEMS - FOUNDING ||============================== //

const options = {
  id: 'eCommerce',
  title: <FormattedMessage id="eCommerce" />,
  type: 'group',
  children: [
    {
      id: 'marketing',
      title: <FormattedMessage id="marketing" />,
      type: 'item',
      url: '/eCommerce/marketing',
      icon: icons.ReconciliationOutlined
    },
    {
      id: 'websites',
      title: <FormattedMessage id="websites" />,
      type: 'item',
      url: '/eCommerce/websites',
      icon: icons.GlobalOutlined
    },
    {
      id: 'design',
      title: <FormattedMessage id="design" />,
      type: 'item',
      url: '/eCommerce/design',
      icon: icons.PictureOutlined
    }
  ]
};

export default options;
