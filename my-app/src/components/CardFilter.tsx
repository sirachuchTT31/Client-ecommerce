import { Card, CardContent } from "@mui/material";

interface CardProductProps {
    id: number;
    price: number;
    productName: string;
    productImage: string;
}


const CardFilter: React.FC<CardProductProps> = () => {
    return (
        <>
            <Card sx={{ width : '100%' }}>
                <CardContent>
                                T
                </CardContent>

            </Card>
        </>
    )
}

export default CardFilter