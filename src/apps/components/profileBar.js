import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import Card from 'material-ui/Card'

const styles = theme => ({
    container: {
        position: 'relative',
        height: 'inherit'
    },
    profile: {
        display: 'block',
        justifyContent: 'center',
        height: 280
    },
    profileUp: {
        display: 'flex',
        justifyContent: 'center'
    },
    bigAvatar: {
        marginTop: 50,
        width: 88,
        height: 80,
    },
    profileBottom: {
        padding: 20
    },
    buttonBar: {
        display: 'block',
        textAlign: 'center'
    },
    button:{
        position: 'relative',
        top: -28
    },
    profileText: {
        flex: 1,
        marginBottom: 8,
    },
    buttonBarText: {
        flex: 1,
        marginLeft: 8,
        marginBottom: 8,
        fontSize: 16
    },
    list: {
        listStyle: 'none',
        paddingLeft: 20,
        textAlign: 'left'
    },
    li: {
        display: 'flex',
        color: 'grey',
        margin: 8,
    },
    logoutBar: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        width: '100%'
    },
    logout:{
      paddingBottom: 20,
      paddingLeft: 28
    },
    settings:{
        width: '100%',
        paddingRight: 28,
        paddingBottom: 20
    }
});

class ProfileBar extends React.Component {

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Grid item xs={12} className={classes.profile}>
                    <div className={classes.profileUp}>
                        <Avatar
                            alt="Adelle Charles"
                            src="./static/hulk.png"
                            className={classes.bigAvatar}
                        />
                    </div>
                    <div className={classes.profileBottom}>
                        <Typography type="title" color="inherit" align="center" className={classes.profileText}>
                            Incredible Hulk
                        </Typography>
                        <Typography type="body2" color="secondary" align="center" className={classes.profileText}>
                            Incredible Hulk
                        </Typography>
                    </div>
                </Grid>
                <Divider/>
                <Grid item xs={12} className={classes.buttonBar}>
                    <div>
                    <Button fab color="accent" aria-label="add" className={classes.button}>
                        <AddIcon />
                    </Button>
                    </div>

                    <div>
                        <ul className={classes.list}>
                            <li className={classes.li}>
                                <Icon>email</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Mail
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Icon>event</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Calendar
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Icon>contacts</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Contacts
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Icon>list</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Tasks
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Icon>note</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Notes
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Icon>collections</Icon>
                                <Typography type="body2" color="secondary" align="left" className={classes.buttonBarText}>
                                    Collection
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.logoutBar}>
                    <Typography type="body2" color="secondary" align="left" className={classes.logout}>
                        <Icon>power_settings_new
                        </Icon>
                    </Typography>
                    <Typography type="body2" color="secondary" align="right" className={classes.settings}>
                        <Icon>settings</Icon>
                    </Typography>
                </Grid>
            </div>
        );
    }
}

ProfileBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileBar);