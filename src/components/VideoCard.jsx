import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

const VideoCard = ({video: {id: { videoId }, snippet }}) => {

  return (
    <Card sx={{width: { xs: '100%', sm: '380px', md: '380px' }, boxShadow: 'none', borderRadius: '0', border: 'none', backgroundColor: '#0f0f0f'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url} 
                alt={snippet?.title}
                sx={{width: { xs: '100%', sm:'358px', md: '380px' }, height: '180px', borderRadius: '16px'}}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#0f0f0f', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight='bold' color='white'>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight='bold' color='gray'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize:12, color:'gray', ml: '5px' }} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )

}

export default VideoCard