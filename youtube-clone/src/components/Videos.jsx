import { Stack ,Box} from "@mui/material"
import {VideoCard} from "./"
import {ChannelCard} from "./"

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...'; 
  return (
    <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item,idx) => (
        <Box key={idx}>
            {item.id.videoID && <VideoCard video={item} />}
            {item.id.channelID && <ChannelCard channelDetail={item} />}
        </Box>
    ))}
    </Stack>
  )
}

export default Videos