import { ClockCircleOutlined, SafetyOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';

// material-ui
import { Typography } from '@mui/material';

// ==============================|| VALIDATION WIZARD - REVIEW  ||============================== //

const messages = [
  {
    id: 0,
    title: 'Information in verification process',
    type: 0
  } /*,
  {
    id: 0,
    title: 'Verified User',
    type: 1
  }*/
];
export default function Review() {
  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          {message.type === 1 ? (
            <MainCard className="mx-lg-5">
              <Typography style={{ fontSize: '70px' }} gutterBottom textAlign="center" className="text-success">
                <SafetyOutlined />
              </Typography>
              <Typography variant="h3" gutterTop textAlign="center">
                {message.title}
              </Typography>
            </MainCard>
          ) : (
            <MainCard className="mx-lg-5">
              <Typography style={{ fontSize: '60px' }} gutterBottom textAlign="center" color="primary">
                <ClockCircleOutlined />
              </Typography>
              <Typography variant="h3" gutterTop textAlign="center">
                {message.title}
              </Typography>
            </MainCard>
          )}
        </div>
      ))}
    </>
  );
}
