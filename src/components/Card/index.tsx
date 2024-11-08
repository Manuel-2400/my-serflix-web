import { CardContent, CardMedia, Typography } from '@mui/material'
import { CardProps } from './types'


export const CardwithImage = (props: CardProps) => {
    const {
        src,
        text = 'Text...',
        title = 'Title...'
    } = props
    return (
        <div className='Card'>
            <CardMedia
                component="img"
                height="140"
                image={src}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </div>
    )
}