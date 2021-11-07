import React from 'react';
import Layout from './pages/Layout/Layout'
import LaunchProgram from './pages/LaunchProgram/LaunchProgram'
import { getParam } from './params/utils'

function App(props) {
        return (
            <Layout>
                <LaunchProgram query={getParam(props.location.search)} history={props.history}/>
            </Layout>
        )
}

export default App
