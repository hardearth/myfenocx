import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { LockOutlined, QuestionCircleOutlined, SafetyOutlined } from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <Link to="/support/support" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemIcon>
            <QuestionCircleOutlined />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItemButton>
      </Link>
      <Link to="/profile/verification" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon>
            <SafetyOutlined />
          </ListItemIcon>
          <ListItemText primary="Verification KYC" />
        </ListItemButton>
      </Link>
      <Link to="/auth/change-password" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemIcon>
            <LockOutlined />
          </ListItemIcon>
          <ListItemText primary="Change password" />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default SettingTab;
