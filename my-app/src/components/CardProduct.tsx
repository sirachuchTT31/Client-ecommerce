'use client'
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

interface CardProductProps {
    id?: number;
    price?: number;
    productName?: string;
    productImage?: string;
}


const CardProduct: React.FC<CardProductProps> = ({ id, price, productName, productImage }) => {


    React.useEffect(() => {
    }, [])

    return (
        <>
            <Card sx={{ maxWidth: 300, maxHeight: 200 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            {/* <MoreVertIcon /> */}
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                // image="/static/images/cards/paella.jpg"
                // alt="Paella dish"
                />
                <CardContent>
                    <Typography variant='subtitle1' sx={{ color: 'black' }} >{productName ? productName : 'A B C'}</Typography>
                    <Typography variant="body2"  sx={{ color: 'text.secondary', WebkitLineClamp: 2, WebkitBoxOrient: "vertical", textOverflow: "ellipsis", maxHeight : 40 , display:"-ms-flexbox" , overflow: "hidden" }}>
                    {}
                    </Typography>
                </CardContent>
            </Card>

        </>
    )
}

export default CardProduct;