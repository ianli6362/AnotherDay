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
        minWidth: 800
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
                    <Grid item lg={3}>
                        <ModuleBlock width="88%" height="850px">
                            <ProfileBar />
                        </ModuleBlock>
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleBlock width="88%" height="240px">
                            sdfdsf
                        </ModuleBlock>
                    </Grid>

                </Grid>

            </div>
        );
    }
}


render(<App/>, document.getElementById('app'));
