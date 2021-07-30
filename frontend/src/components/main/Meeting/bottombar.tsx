import { Box, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import AirplayIcon from "@material-ui/icons/Airplay";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import CallEndIcon from "@material-ui/icons/CallEnd";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    gridParent: {
      minHeight: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    gridItems: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
    leftSection: {
      marginRight: "auto",
      paddingLeft: "20px",
    },
    midSection: {},
    rightSection: {
      marginLeft: "auto",
      paddingRight: "20px",
    },
    iconContainer: {
      marginLeft: "15px",
      marginRight: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  })
);

export default (props: { meetingID: string; handleLeaveMeeting: Function }) => {
  const classes = useStyle();
  return (
    <>
      <Grid className={classes.gridParent} container justify="center">
        <Grid item xs={4} className={classes.gridItems}>
          <Box display="flex" className={classes.leftSection}>
            <Box className={classes.iconContainer}>
              <AirplayIcon fontSize="large" />
              Screen Share
            </Box>
            <Box className={classes.iconContainer}>
              <VideoLabelIcon fontSize="large" />
              Whiteboard
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.gridItems}>
          <Box display="flex" className={classes.midSection}>
            <Box className={classes.iconContainer}>
              <MicIcon fontSize="large" />
              Mute
            </Box>
            <Box
              className={classes.iconContainer}
              onClick={() => props.handleLeaveMeeting()}
            >
              <CallEndIcon fontSize="large" />
              End Call
            </Box>
            <Box className={classes.iconContainer}>
              <VideocamIcon fontSize="large" />
              Video
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} className={classes.gridItems}>
          <Box display="flex" className={classes.rightSection}>
            {props.meetingID}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
