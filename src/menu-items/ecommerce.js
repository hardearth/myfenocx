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
  id: 'ecommerce',
  title: <FormattedMessage id="ecommerce" />,
  type: 'group',
  children: [
    {
      id: 'marketing',
      title: <FormattedMessage id="marketing" />,
      type: 'item',
      url: '/ecommerce/marketing',
      icon: icons.ReconciliationOutlined
    },
    {
      id: 'websites',
      title: <FormattedMessage id="websites" />,
      type: 'item',
      url: '/ecommerce/websites',
      icon: icons.GlobalOutlined
    },
    {
      id: 'design',
      title: <FormattedMessage id="design" />,
      type: 'item',
      url: '/ecommerce/design',
      icon: icons.PictureOutlined
    }
  ]
};

export default options;
