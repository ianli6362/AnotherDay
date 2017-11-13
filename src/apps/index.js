import React from 'react';
import {render} from 'react-dom';
import Grid from 'material-ui/Grid';
import NavBar from './components/navBar';
import ProfileBar from './components/profileBar';
import ModuleBlock from './components/moduleBlock';
import Paper from 'material-ui/Paper';

const styles = {
    background: {
        backgroundColor: '#f3f3f3',
        height: 1000,
        width: '1000'
    },
    container: {
        margin: 0
    }

}

class App extends React.Component {

    render () {
        console.log(this.props);
        return (
            <div style={styles.background}>
                <NavBar></NavBar>
                <Grid container spacing={0}>
                    <Grid item xs={2.5}>
                        <ModuleBlock width="250px" height="850px">
                            <ProfileBar />
                        </ModuleBlock>
                    </Grid>
                    <Grid item xs={9.5}>
                        <ModuleBlock width="1170px" height="240px">
                            sdfdsf
                        </ModuleBlock>
                    </Grid>

                </Grid>

            </div>
        );
    }
}


render(<App/>, document.getElementById('app'));
