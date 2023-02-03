import { useState } from 'react';
import { useDispatch } from 'store';
import { FormattedMessage } from 'react-intl';

// material-ui
import { InputAdornment, Stack, TextField, Tooltip } from '@mui/material';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { CopyOutlined } from '@ant-design/icons';

// ==============================|| PLUGIN - CLIPBOARD ||============================== //

const Section = () => {
  const dispatch = useDispatch();
  const [text1, setText1] = useState('https://myfenocx.com/Azg1h4');

  return (
    <MainCard title={<FormattedMessage id="referral_link" />}>
      <Stack>
        <TextField
          fullWidth
          placeholder="Website"
          type="text"
          value={text1}
          onChange={(e) => {
            setText1(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CopyToClipboard
                  text={text1}
                  onCopy={() =>
                    dispatch(
                      openSnackbar({
                        open: true,
                        message: 'Text Copied',
                        variant: 'alert',
                        alert: {
                          color: 'success'
                        },
                        close: false,
                        anchorOrigin: { vertical: 'top', horizontal: 'right' },
                        transition: 'SlideLeft'
                      })
                    )
                  }
                >
                  <Tooltip title="Copy">
                    <IconButton aria-label="Copy from another element" color="secondary" edge="end" size="large">
                      <CopyOutlined />
                    </IconButton>
                  </Tooltip>
                </CopyToClipboard>
              </InputAdornment>
            )
          }}
        />
      </Stack>
    </MainCard>
  );
};

export default Section;
