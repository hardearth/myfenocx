// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HomeOutlined, UsergroupAddOutlined, RiseOutlined, CrownOutlined, InteractionOutlined } from '@ant-design/icons';

// icons
const icons = {
  HomeOutlined,
  UsergroupAddOutlined,
  RiseOutlined,
  CrownOutlined,
  InteractionOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const options = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'home',
      title: <FormattedMessage id="home" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.HomeOutlined
    },
    {
      id: 'referrals',
      title: <FormattedMessage id="referrals" />,
      type: 'item',
      url: '/dashboard/referrals',
      icon: icons.UsergroupAddOutlined
    },
    {
      id: 'commissions',
      title: <FormattedMessage id="commissions" />,
      type: 'item',
      url: '/dashboard/commissions',
      icon: icons.RiseOutlined
    },
    {
      id: 'rank',
      title: <FormattedMessage id="rank" />,
      type: 'item',
      url: '/dashboard/rank',
      icon: icons.CrownOutlined
    },
    {
      id: 'transactions',
      title: <FormattedMessage id="transactions" />,
      type: 'collapse',
      icon: icons.InteractionOutlined,
      children: [
        {
          id: 'withdrawals',
          title: <FormattedMessage id="withdrawals" />,
          type: 'item',
          url: '/dashboard/withdrawals'
        },
        {
          id: 'deposits',
          title: <FormattedMessage id="deposits" />,
          type: 'item',
          url: '/dashboard/deposits'
        }
      ]
    }
  ]
};

export default options;
