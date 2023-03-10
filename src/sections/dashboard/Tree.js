import { Typography } from '@mui/material';
import network from 'data/admin/network';
import user from 'data/user';

const Tree = () => {
  function action(_id) {
    let element = document.getElementById(`element${_id}`);

    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }

  function getNetwork(_id) {
    let data = network.network.map((user) => {
      if (user._id === _id) {
        return (
          <div key={user._id}>
            <button className="card bg-black rounded-0 text-light border-start border-dark" onClick={() => action(user._id)}>
              <Typography variant="subtitle1">
                {user.name} {user.lastname}
              </Typography>
              <Typography variant="caption">{user.email} </Typography>
              {Object.keys(user.network).length > 0 && (
                <Typography variant="subtitle1" className="text-primary">
                  Directs {Object.keys(user.network).length}
                </Typography>
              )}
            </button>
            <div id={`element${user._id}`} className="ms-5 m-1" style={{ display: 'none' }}>
              {user.network.map((val) => getNetwork(val._id))}
            </div>
          </div>
        );
      }
    });
    return data;
  }

  return (
    <div className="row my-5">
      <div className="col">{getNetwork(user._id)}</div>
    </div>
  );
};

export default Tree;
