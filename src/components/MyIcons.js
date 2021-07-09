import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MyIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge className="text-light">
        <FacebookIcon />
      </Badge>
      <Badge className="text-light">
        <InstagramIcon />
      </Badge>
      <Badge className="text-light">
        <GitHubIcon />
      </Badge>
      <Badge className="text-light">
        <TwitterIcon />
      </Badge>
    </div>
  );
}
