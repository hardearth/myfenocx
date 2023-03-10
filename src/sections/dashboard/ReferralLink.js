import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { InputAdornment, Stack, TextField, Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { CopyOutlined } from '@ant-design/icons';
import user from 'data/user';

const Section = () => {
  const [text1, setText1] = useState(user.linkReferal);

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
                <CopyToClipboard text={text1}>
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
