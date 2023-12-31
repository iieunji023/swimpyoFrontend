import React from 'react';
import { Box, Divider, Typography } from "@mui/material";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const textHidden = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};

const imgSlide = {
    display: 'flex',
    width: '100%',
    overflowX: 'auto',
    flexWrap: 'nowrap',
    mt: '8px',
};

const img = {
    flex: '0 0 auto',
    width: '200px',
    height: '125px',
    marginRight: '10px',
    objectFit: 'cover'
};

export default function AccmReviewList({ r_no, u_m_email, u_m_nickname, r_reg_date, a_r_name, r_content, reviewImg }) {
    const [hidden, setHidden] = useState(true);

    const moreClick = (e) => {
        e.preventDefault();
        setHidden(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '1rem',
        }}>
            <Typography sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <Link to={`/user/review/detail/${u_m_email}/${r_no}`} style={{ textDecoration: 'none', color: 'black' }}>상세보기 &gt;</Link>
            </Typography>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Typography
                    noWrap
                    component="div"
                    sx={{
                        color: '#C8C8C8',
                        display: 'flex',
                        justifyContent: 'flex-first',
                        width: '100%'
                    }}
                >{u_m_nickname}</Typography>
                <Typography
                    noWrap
                    component="div"
                    sx={{
                        color: '#C8C8C8',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%'
                    }}
                >{dayjs(r_reg_date).format("YYYY-MM-DD")}</Typography>
            </Box>
            <Typography
                noWrap
                component="div"
                sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'flex-first',
                    width: '100%',
                    mb: '1rem',
                }}
            >{a_r_name}</Typography>

            {hidden &&
                <Typography
                    noWrap
                    component="div"
                    sx={{ ...textHidden }}
                >{r_content}</Typography>
            } <Typography sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                {hidden && <Link onClick={(e) => moreClick(e)} style={{ color: 'black' }}>더보기</Link>}</Typography>
            {!hidden &&
                <Typography
                    component="div"
                    sx={{
                        width: '100%'
                    }}
                >{r_content}</Typography>}
            <Box sx={{ ...imgSlide }}>
                {reviewImg.filter((img, index) => img.r_no === r_no).map(data => (
                    <dev>
                        {<img src={data.r_ri_image} style={img} />}
                    </dev>
                ))}
            </Box>
            <Divider sx={{ width: '100%', mt: '1rem' }} />
        </Box>

    );

}