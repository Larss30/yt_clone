import React from 'react'
import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos, justifyContent, direction}) => {
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent={justifyContent ? justifyContent : {xs: 'center', md: 'start'}} gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
