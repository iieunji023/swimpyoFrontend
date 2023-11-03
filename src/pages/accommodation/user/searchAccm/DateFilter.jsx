import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box } from '@mui/material';
import api from '../../../../hooks/RefreshTokenAuto';

const dateStyle = {
    textAlign: 'center', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%'
}

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');

function DateFilter() {

    const config = {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
    };

    const dateFiler = (newValue) => {
        console.log('날짜', newValue);

        let data = {
            "date" : newValue, 
        };

        // api.post("/api/user/searchAccm", JSON.stringify(data), config,)
        //     .then((response))
    }

    return (
        <Box sx={{ ...dateStyle}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem component="DateRangePicker">
                    <DateRangePicker 
                        defaultValue={[today, tomorrow]} 
                        minDate={tomorrow} localeText={{ start: '체크인', end: '체크아웃' }} 
                        sx={{bgcolor: 'white', padding: '1rem', borderRadius: '10px' }}
                        onChange={(newValue) => dateFiler(newValue)}
                        />
                </DemoItem>
            </LocalizationProvider>
        </Box>

    );
}

export default DateFilter;