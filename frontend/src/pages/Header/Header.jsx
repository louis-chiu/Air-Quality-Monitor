import { useState } from 'react';
import './style.css';
import { redirect, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import SummarizeIcon from '@mui/icons-material/Summarize';
const Header = () => {
  // const [devEUI, setDevEUI] = useState("ALL");
  // const [location, setLocation] = useState("70734R");

  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <header className='header'>
      <h1 className='logo'>EPA MONITOR</h1>

      <Box sx={{ width: 420 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label='Home'
            icon={<HomeIcon />}
            onClick={() => {
              window.location.href ='https://em2lab.comm.yzu.edu.tw';
            }}
          />

          <BottomNavigationAction
            label='On-time Info'
            icon={<TimelineIcon />}
            onClick={() => {
              navigate('/');
            }}
          />

          <BottomNavigationAction
            label='7-Day Query'
            icon={<DateRangeIcon />}
            onClick={() => {
              navigate('/7-day-query');
            }}
          />
          <BottomNavigationAction
            label='Report'
            icon={<SummarizeIcon />}
            onClick={() => {
              navigate('/');
            }}
          />
        </BottomNavigation>
      </Box>
    </header>
  );
};
export default Header;
