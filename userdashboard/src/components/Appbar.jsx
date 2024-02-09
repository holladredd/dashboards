import { Badge, Box, Button, Card, Typography} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:'10px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
marginTop:'10px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




  const Appbar = () => {
  return (
 <Box  className="scale-in-center" justifyContent={'space-between'} display={'flex'}>
    <Card elevation={0} sx={{backgroundColor:'whitesmoke', mb:'20px'}}>

<Typography variant="body1" color="inherit">Welcome Back</Typography>
<Typography variant="h5" fontWeight={500} color="inherit">HOLLADREDD</Typography>
    </Card>
    <Box gap={2} sx={{display:'flex', placeItems:'center'}}>

    <Button variant='contained' sx={{backgroundColor:'slateblue'}} startIcon={<CloudUploadIcon/>}>
      Upload Product
    </Button>

    <Search sx={{backgroundColor:'white'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              />
    </Search>
    <Badge color="error" overlap="circular" badgeContent=" " variant="dot">
  <NotificationsIcon/>
</Badge>
    </Box>
 </Box>
  )
}

export default Appbar
