import { Fragment } from 'react';
import { Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';
import { CheckOutlined, GiftOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import ranksInfo from 'data/system/ranks';
import ranks from 'data/admin/ranks';
import user from 'data/user';

const page = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  function userRank() {
    let userAux = [];
    let i = user.rank;
    if (i > 0 && i != null) {
      let progress = (user.directVolumen + user.indirectVolumen) / (ranks.ranks[i - 1].directVolume + ranks.ranks[i - 1].indirectVolume);
      userAux = (
        <>
          <div className="col-12 col-lg-6">
            <Typography variant="h4" className="mt-3">
              Current rank <b className="rounded bg-primary p-1 px-3">{ranksInfo[i - 1].rankName}</b>
            </Typography>
            <Typography variant="h6" className="mt-3">
              Start of season <b className="bg-green card py-1">{getDate(ranks.ranks[i].startSeason)}</b>
            </Typography>
            <Typography variant="h6" className="mt-3">
              End of season <b className="bg-red card py-1">{getDate(ranks.ranks[i].endSeason)}</b>
            </Typography>
            <Typography variant="h6" className="mt-3">
              Rank progress <LinearWithLabel value={progress * 100} />
            </Typography>
          </div>
          <div className="col-12 col-lg-6">
            <Typography variant="h4" className="mt-3">
              Received by Ranks
              <b className="rounded bg-primary p-1 px-3 ms-2">
                {user.receivedByRanks}
                <span className="h6 fw-bold"> USD</span>
              </b>
            </Typography>
          </div>
        </>
      );
    }
    return userAux;
  }

  const dataRank = ranksInfo.map((rank, index) => (
    <div key={rank.rank} className="col-12 col-lg-3 p-2">
      <MainCard border={true}>
        <Typography variant="h4" textAlign="center">
          {rank.rankName}
        </Typography>
        <Typography variant="h5" color="primary" textAlign="center">
          {rank.amount} USD
        </Typography>
        <Fragment>
          <ListItem divider className="text-center">
            <ListItemText
              primary={
                <>
                  <b className="h3">{ranks.ranks[index].users.length} </b>
                  Users in this rank
                </>
              }
            />
          </ListItem>
          <ListItem divider className="text-center">
            <ListItemText
              primary={
                <>
                  Reward in the current season
                  <b className="bg-green h5 card py-1">{ranks.ranks[index].rewardSeason} USD</b>
                </>
              }
            />
          </ListItem>
        </Fragment>
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
    <MainCard>
      <div className="container">
        <div className="row mb-4">{userRank()}</div>
        <div className="row">{dataRank}</div>
      </div>
    </MainCard>
  );
};

export default page;
