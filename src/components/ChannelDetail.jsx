import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from './utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams();

  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(ChannelDetail)
  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&id&order=date`).then((data) => setVideos(data?.items))
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
        style={{background: 'linear-gradient(90deg, rgba(77,73,134,1) 0%, rgba(34,34,181,1) 24%, rgba(29,102,117,1) 100%)', zIndex: 10, height: '300px'}}/>
        <ChannelCard channelDetail={ChannelDetail} marginTop='-100px'/>
      </Box>
      <Box display='flex' p='2'>
        <Videos videos={videos} justifyContent='center'/>
      </Box>
    </Box>
    )
  }

export default ChannelDetail