import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVidoes] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVidoes(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(74,161,213,1) 0%, rgba(126,65,134,1) 49%, rgba(214,75,202,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box
        display="flex"
        sx={{
          pl: { xs: "20px", sm: "20px", md: "80px" },
          "& > :first-child": {
            // Apply padding to the first child element (Videos component)
            pl: { xs: "inherit", sm: "inherit", md: "inherit" }, // Reset padding for the child
          },
        }}
      >
        {/* <Box sx={{ mr:{sm: '150px'} }} /> */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
