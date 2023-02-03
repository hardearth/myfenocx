import PropTypes from 'prop-types';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField, Typography, MenuItem, Select, FormHelperText } from '@mui/material';

// third-party
import { Formik } from 'formik';
import * as yup from 'yup';

// project imports
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import AnimateButton from 'components/@extended/AnimateButton';
import MainCard from 'components/MainCard';
// ==============================|| DOCUMENTS ||============================== //

export default function Document({ documents, setDocuments, handleNext, setErrorIndex }) {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Verification data
      </Typography>
      <Formik
        initialValues={{
          files: null,
          identification: documents.identification,
          address: documents.address,
          city: documents.city,
          state: documents.state,
          country: documents.country
        }}
        onSubmit={(values) => {
          setDocuments({
            address: values.address,
            city: values.city,
            state: values.state,
            code: values.code,
            country: values.country,
            identification: values.identification,
            files: values.files
          });
          handleNext();
        }}
        validationSchema={yup.object().shape({
          files: yup.mixed().required('Document is a required.'),
          identification: yup.string().required('Identification is required'),
          address: yup.string().required('Address is required'),
          city: yup.string().required('City is required'),
          state: yup.string().required('State is required'),
          country: yup.string().required('Country Name is required')
        })}
      >
        {({ values, handleSubmit, setFieldValue, handleChange, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Address</InputLabel>
                  <TextField
                    id="address"
                    name="address"
                    placeholder="Address *"
                    value={values.address}
                    onChange={handleChange}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter City</InputLabel>
                  <TextField
                    id="city"
                    name="city"
                    placeholder="City *"
                    value={values.city}
                    onChange={handleChange}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter State</InputLabel>
                  <TextField
                    id="state"
                    name="state"
                    placeholder="State/Province/Region *"
                    value={values.state}
                    onChange={handleChange}
                    error={touched.state && Boolean(errors.state)}
                    helperText={touched.state && errors.state}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Zip Code</InputLabel>
                  <TextField id="zip" name="zip" placeholder="Zip / Postal code" fullWidth />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Enter Country</InputLabel>
                  <TextField
                    id="country"
                    name="country"
                    placeholder="Country"
                    value={values.country}
                    onChange={handleChange}
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="personal-phone">Identification number</InputLabel>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Select value="CC" name="idType">
                      <MenuItem value="CC">CC</MenuItem>
                      <MenuItem value="NIT">NIT</MenuItem>
                    </Select>
                    <TextField
                      id="identification"
                      name="identification"
                      placeholder="Identification number *"
                      value={values.identification}
                      onChange={handleChange}
                      error={touched.identification && Boolean(errors.identification)}
                      helperText={touched.identification && errors.identification}
                      fullWidth
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <MainCard title="Front and back of identity document">
                  <Grid item xs={12}>
                    <Stack spacing={1.5} alignItems="center">
                      <UploadMultiFile setFieldValue={setFieldValue} files={values.files} error={touched.files && !!errors.files} />
                      {touched.files && errors.files && <FormHelperText error>{errors.files}</FormHelperText>}
                    </Stack>
                  </Grid>
                </MainCard>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="end">
                  <AnimateButton>
                    <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(0)}>
                      Upload information
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

Document.propTypes = {
  documents: PropTypes.object,
  setDocuments: PropTypes.func,
  handleNext: PropTypes.func,
  setErrorIndex: PropTypes.func
};
