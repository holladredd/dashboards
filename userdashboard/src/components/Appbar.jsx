import { Box, Button, Card, Typography} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
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
 <Box justifyContent={'space-between'} display={'flex'}>
    <Card elevation={0}>

<Typography variant="body1" color="inherit">Welcome Back</Typography>
<Typography variant="h5" fontWeight={500} color="inherit">HOLLADREDD</Typography>
    </Card>
    <Button variant='contained' sx={{backgroundColor:'slateblue' }} startIcon={<CloudUploadIcon/>}>
      Upload Product
    </Button>

    <Searc>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
 </Box>
  )
}

export default Appbar
