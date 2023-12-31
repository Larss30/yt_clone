import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from './utils/constants'
import React from 'react'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs: '100%', sm:'358px', md: '320px'}, boxShadow: 'none', borderRadius: '0'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
          width:{xs: '100%', sm:'358px', md: '320px'}, height: '180px'}}
          />
          <CardContent sx={{backgroundColor:'#1e1e1e', height:106}}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
              <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                {((html) => {
                  const tempElement = document.createElement('div')
                  tempElement.innerHTML = html
                  return tempElement.textContent || tempElement.innerText
                })(snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60))}{snippet?.title.length > 60 ? '...' : ''}
              </Typography>
            </Link>
            <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle1' fontWeight='bold' color='#fff'>{snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                <CheckCircle sx={{fontSize: 12, color:'gray', ml: '5px'}}/>
              </Typography>
            </Link>
          </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard
