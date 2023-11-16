import React from 'react';
import { Box, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import AccmReviewList from './AccmReviewList';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../../../hooks/RefreshTokenAuto';

export default function AccmReview() {
    const [reviewData, setReviewData] = useState([]);
    const [reviewImg, setReviewImg] = useState([]);

    const {a_acc_no} = useParams();
    console.log('AccmReview a_acc_no', a_acc_no);

    useEffect(() => {
        if(parseInt(a_acc_no) > 0) {
            api.get("/api/user/review/showReviewList",{ params: { "a_acc_no": parseInt(a_acc_no) } })
            .then((response) => {
                console.log('AccmReview', response.data);
                if (response.data != null) {
                    setReviewData(response.data.userReviewDto);
                    setReviewImg(response.data.r_ri_images);
                }
            }).catch((error) => {
                console.error('Error ', error);
            });
        }
        
    }, [a_acc_no]);

    return(
        <Container component="main" sx={{ marginBottom: '3rem', marginTop: '3rem' }}>
            <Paper elevation={3} sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', maxWidth: '700px', margin: 'auto' }}>
                <Typography component="h1" variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
                    업소 후기
                </Typography>
                {(reviewData.length !== 0) && reviewData.map((item, index) => (
                    <AccmReviewList key={index} {...item} reviewImg={reviewImg} />
                ))}
            </Paper>
        </Container>
    );

}