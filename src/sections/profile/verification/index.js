import { useState, useEffect } from 'react';
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';
import Documents from './Documents';
import Review from './Review';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
const steps = ['Upload documents', 'Review your status'];
import user from 'data/user';

const getStepContent = (step, handleNext, setErrorIndex, documents, setDocuments) => {
  switch (step) {
    case 0:
      return <Documents handleNext={handleNext} setErrorIndex={setErrorIndex} documents={documents} setDocuments={setDocuments} />;
    case 1:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
};

const ValidationWizard = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [documents, setDocuments] = useState({});
  const [errorIndex, setErrorIndex] = useState(null);

  useEffect(() => {
    if (user.statusKYC === 'inactive') {
      setActiveStep(0);
    }
  }, []);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  return (
    <MainCard title="Verification KYC">
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label, index) => {
          const labelProps = {};

          if (index === errorIndex) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Error
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setDocuments({});
                    setActiveStep(0);
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(activeStep, handleNext, setErrorIndex, documents, setDocuments)}
            {activeStep === steps.length - 1 && (
              <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}></Stack>
            )}
          </>
        )}
      </>
    </MainCard>
  );
};

export default ValidationWizard;
