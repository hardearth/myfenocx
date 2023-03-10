import { FormattedMessage } from 'react-intl';
import { QuestionCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const icons = {
  QuestionCircleOutlined,
  CheckCircleOutlined
};

const options = {
  id: 'funding',
  title: <FormattedMessage id="funding" />,
  type: 'group',
  children: [
    {
      id: 'funding',
      title: <FormattedMessage id="_funding" />,
      type: 'item',
      url: '/funding/funding',
      icon: icons.CheckCircleOutlined
    }
  ]
};

export default options;
