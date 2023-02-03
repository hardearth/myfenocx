import { Fragment } from 'react';

// material-ui
import { Typography, Stack, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';
import { CheckOutlined, GiftOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';

const page = () => {
  const userData = [
    {
      id: 0,
      name: 'Username',
      mail: 'mail@example.com',
      rank: 1,
      rankName: 'Level Up',
      progress: 35
    }
  ];

  const ranks = [
    {
      rank: 1,
      rankName: 'Level',
      amount: 5000,
      requirements: ['Active account', '1000 USD in volume of direct users', '4000 USD in group volume'],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 2,
      rankName: 'Level Up',
      amount: 10000,
      requirements: ['Active account', '2000 USD in volume of direct users', '8000 USD in group volume'],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 3,
      rankName: 'VIP',
      amount: 20000,
      requirements: [
        'Active account',
        '3000 USD in volume of direct users',
        '17000 USD in group volume',
        'With My Fx Founding, My Fx Pips and My Fx Academy'
      ],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 4,
      rankName: 'Emerald',
      amount: 34000,
      requirements: [
        'Active account',
        '4000 USD in volume of direct users',
        '30000 USD in group volume',
        'With My Fx Founding, My Fx Pips and My Fx Academy',
        '1 User VIP'
      ],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 5,
      rankName: 'Diamond',
      amount: 65000,
      requirements: [
        'Active account',
        '5000 USD in volume of direct users',
        '60000 USD in group volume',
        'With My Fx Founding, My Fx Pips, My Fx Academy and My Fx Health & Wellness',
        '2 User VIP',
        '1 User Emerald'
      ],
      advantage: ['15% of the volume', 'Range pin']
    },
    {
      rank: 6,
      rankName: 'Blue Diamond',
      amount: 125000,
      requirements: [
        'Active account',
        '5000 USD in volume of direct users',
        '120000 USD in group volume',
        'With My Fx Founding, My Fx Pips, My Fx Academy and My Fx Health & Wellness',
        '2 User Emerald',
        '1 User Diamond'
      ],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 7,
      rankName: 'Master',
      amount: 245000,
      requirements: [
        'Active account',
        '5000 USD in volume of direct users',
        '240000 USD in group volume',
        'With My Fx Founding, My Fx Pips, My Fx Academy and My Fx Health & Wellness',
        '2 User Diamond',
        '1 User Blue Diamond'
      ],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 8,
      rankName: 'President',
      amount: 505000,
      requirements: [
        'Active account',
        '5000 USD in volume of direct users',
        '500000 USD in group volume',
        'With My Fx Founding, My Fx Pips, My Fx Academy and My Fx Health & Wellness',
        '2 User Blue Diamond',
        '1 User Master'
      ],
      advantage: ['10% of the volume', 'Range pin']
    },
    {
      rank: 9,
      rankName: 'Imperial crown',
      amount: 1005000,
      requirements: [
        'Active account',
        '5000 USD in volume of direct users',
        '1000000 USD in group volume',
        'With My Fx Founding, My Fx Pips, My Fx Academy and My Fx Health & Wellness',
        '2 User Master',
        '1 User President'
      ],
      advantage: ['15% of the volume', 'Range pin']
    }
  ];

  const user = userData.map((user) => (
    <Stack key={user.id} spacing={1}>
      <Typography variant="h3">{user.rank + ' ' + user.rankName} </Typography>
      <Typography variant="h5" color="primary">
        {user.name}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {user.mail}
      </Typography>
      <LinearWithLabel value={user.progress} />
    </Stack>
  ));

  const dataRank = ranks.map((rank) => (
    <div key={rank.rank} className="col-12 col-lg-3 p-2">
      <MainCard border={true}>
        <Typography variant="h4" textAlign="center">
          {rank.rank + ' ' + rank.rankName}
        </Typography>
        <Typography variant="h5" color="primary" textAlign="center">
          {rank.amount} USD
        </Typography>
        <Typography variant="body2" className="mt-3" color="textSecondary">
          Advantages
        </Typography>
        <Typography variant="h5">
          {rank.advantage.map((list, i) => (
            <Fragment key={i}>
              <ListItem divider>
                <ListItemIcon>
                  <GiftOutlined className="text-light me-3" />
                </ListItemIcon>
                <ListItemText primary={list} />
              </ListItem>
            </Fragment>
          ))}
        </Typography>
        <Typography variant="body2" className="mt-3" color="textSecondary">
          Requirements
        </Typography>
        <Typography variant="h5">
          {rank.requirements.map((list, i) => (
            <Fragment key={i}>
              <ListItem divider>
                <ListItemIcon>
                  <CheckOutlined className="text-success me-3" />
                </ListItemIcon>
                <ListItemText primary={list} />
              </ListItem>
            </Fragment>
          ))}
        </Typography>
      </MainCard>
    </div>
  ));

  return (
    <MainCard title={user} content={false}>
      <div className="container">
        <div className="row">{dataRank}</div>
      </div>
    </MainCard>
  );
};

export default page;
