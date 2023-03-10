import { FormattedMessage } from 'react-intl';
import { HddOutlined, FileImageOutlined } from '@ant-design/icons';

const icons = {
  HddOutlined,
  FileImageOutlined
};

const options = {
  id: 'documentation',
  title: <FormattedMessage id="documentation" />,
  type: 'group',
  children: [
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
