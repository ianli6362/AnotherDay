import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 18,
        marginLeft: 18,
    }
});

class ProfileBar extends React.Component {

    constructor(props){
        super(props);
        this.propsStyle = {
            width: this.props.width,
            height: this.props.height,
        }
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root} style={this.propsStyle}>
                {this.props.children}
            </div>
        );
    }
}

ProfileBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileBar);