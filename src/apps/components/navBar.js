import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
    root: {
        width: '100%',
    },
    appBar: {
      backgroundColor: '#ffffff'
    },
    flex: {
        flex: 1,
    }
});

const NavBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography type="title" color="default" className={classes.flex}>
                        Aspree
                    </Typography>
                    <Typography type="title" color="default" className={classes.flex}>
                        DashBoard
                    </Typography>
                    <IconButton>
                        <Badge className={classes.badge} badgeContent={4} color="accent">
                            <Icon>notifications</Icon>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);