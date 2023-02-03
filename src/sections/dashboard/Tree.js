// material-ui
import { CardContent, Grid, Typography } from '@mui/material';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

const LatestMessages = () => {
  // JSON usuario inicial
  const userData = [
    {
      id: 0,
      name: 'Name',
      mail: 'mail@example.com'
    }
  ];

  function getReferralsAPI(id) {
    // cambiar por datos reales de consulta que trae la lista de referidos enviando idUser
    // ejemplos varios, solo debe retornar un resultado por consulta
    let users = [];
    if (id === 'id_0') {
      users = [
        {
          id: 1,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 2,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 3,
          name: 'Name 3',
          mail: 'mail@example.com 3'
        },
        {
          id: 4,
          name: 'Name 4',
          mail: 'mail@example.com 4'
        },
        {
          id: 5,
          name: 'Name 5',
          mail: 'mail@example.com 5'
        }
      ];
    }
    if (id === 'id_3') {
      users = [
        {
          id: 6,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 7,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_7') {
      users = [
        {
          id: 8,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 9,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_9') {
      users = [
        {
          id: 10,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 11,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_10') {
      users = [
        {
          id: 12,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 13,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 14,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_13') {
      users = [
        {
          id: 15,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 16,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 17,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_17') {
      users = [
        {
          id: 18,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 19,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 20,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_18') {
      users = [
        {
          id: 21,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 22,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 23,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_21') {
      users = [
        {
          id: 24,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 25,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 26,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    if (id === 'id_26') {
      users = [
        {
          id: 27,
          name: 'Name 1',
          mail: 'mail@example.com 1'
        },
        {
          id: 90,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        },
        {
          id: 100,
          name: 'Name 2',
          mail: 'mail@example.com 2'
        }
      ];
    }
    return users;
  }

  // Vista usuario inicial
  const user = userData.map((user) => (
    <Grid item xs={12} key={user.id}>
      <Grid container spacing={2}>
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar color="success">1</Avatar>
            </Grid>
            <Grid item>
              <Typography component="div" align="left" variant="subtitle1">
                {user.name}
              </Typography>
              <Typography color="secondary" align="left" variant="caption">
                {user.mail}
              </Typography>
            </Grid>
            <Grid item>
              {Object.keys(getReferralsAPI(`id_${user.id}`)).length > 0 && (
                <div id={`on_id_${user.id}`} style={{ display: 'inline' }}>
                  <PlusOutlined style={{ fontSize: '15px' }} onClick={() => onReferrals(user.id)} className="text-success" />
                </div>
              )}
              <div id={`off_id_${user.id}`} style={{ display: 'none' }}>
                <MinusOutlined style={{ fontSize: '15px' }} onClick={() => offReferrals(user.id)} className="text-danger" />
              </div>
            </Grid>
            <Grid item>
              <div id={`id_${user.id}`} style={{ display: 'none' }}>
                {getReferrals(`id_${user.id}`)}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));

  function getReferrals(id) {
    const users = getReferralsAPI(id);
    if (Object.keys(users).length > 0) {
      return users.map((user) => (
        <Grid item key={user.id} container className="border-secondary border-start ms-3 pb-3" spacing={2} alignItems="center">
          <Grid item>
            <Typography component="div" align="left" variant="subtitle1">
              {user.name}
            </Typography>
            <Typography color="secondary" align="left" variant="caption">
              {user.mail}
            </Typography>
          </Grid>
          <Grid item>
            {Object.keys(getReferralsAPI(`id_${user.id}`)).length > 0 && (
              <div id={`on_id_${user.id}`} style={{ display: 'inline' }}>
                <PlusOutlined style={{ fontSize: '15px' }} onClick={() => onReferrals(user.id)} className="text-success" />
              </div>
            )}
            <div id={`off_id_${user.id}`} style={{ display: 'none' }}>
              <MinusOutlined style={{ fontSize: '15px' }} onClick={() => offReferrals(user.id)} className="text-danger" />
            </div>
          </Grid>
          <Grid item>
            <div id={`id_${user.id}`} style={{ display: 'none' }}>
              {getReferrals(`id_${user.id}`)}
            </div>
          </Grid>
        </Grid>
      ));
    } else {
      return null;
    }
  }

  function onReferrals(id) {
    document.getElementById('id_' + id).style.display = 'inline';
    document.getElementById('on_id_' + id).style.display = 'none';
    document.getElementById('off_id_' + id).style.display = 'inline';
  }

  function offReferrals(id) {
    document.getElementById('id_' + id).style.display = 'none';
    document.getElementById('on_id_' + id).style.display = 'inline';
    document.getElementById('off_id_' + id).style.display = 'none';
  }

  return (
    <MainCard title="Referral tree" content={false} className="container-aux">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {user}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default LatestMessages;
