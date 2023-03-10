import { ClockCircleOutlined, SafetyOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import { Typography } from '@mui/material';
import user from 'data/user';

export default function Review() {
  return (
    <>
      {user.statusKYC === 'active' ? (
        <MainCard className="mx-lg-5">
          <Typography style={{ fontSize: '70px' }} gutterBottom textAlign="center" className="text-success">
            <SafetyOutlined />
          </Typography>
          <Typography variant="h3" gutterTop textAlign="center">
            Verified User
          </Typography>
          <Typography variant="caption" gutterTop textAlign="center">
            First name <b>{user.name}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Last name <b>{user.lastname}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Type identification <b>{user.typeIdentification}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Identification <b>{user.CC}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Phone
            <b className="ms-2">
              {user.countryCode} {user.phone}
            </b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Zip code <b>{user.address.zipCode}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Country <b>{user.address.country}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            State <b>{user.address.department}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            City <b>{user.address.city}</b>
          </Typography>
          <br />
          <Typography variant="caption" gutterTop textAlign="center">
            Address <b>{user.address.address}</b>
          </Typography>
        </MainCard>
      ) : (
        <MainCard className="mx-lg-5">
          <Typography style={{ fontSize: '60px' }} gutterBottom textAlign="center" color="primary">
            <ClockCircleOutlined />
          </Typography>
          <Typography variant="h3" gutterTop textAlign="center">
            Information in verification process
          </Typography>
        </MainCard>
      )}
    </>
  );
}
