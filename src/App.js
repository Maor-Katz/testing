import React, {useState} from 'react';
import './App.css';
import './app.scss';
import Header from './components/header/index'
import Headline from "./components/headline/index";
import SharedButton from "./components/button/index";
import ListItem from "./components/listitem/list";
import {connect} from 'react-redux';
import {fetchPost} from './actions/index'
import './app.scss'

const tempArr = [{
    fname: 'maor',
    lname: 'katz',
    email: 'maorkatz@gmail.com',
    age: 30,
    onlineStatus: true
}]

function App(props) {
    const configButton = {
        buttonText: 'Get posts',
        emitEvent: fetchPost
    }

    function fetchPost() {
        props.fetchPost()
        exampleUpdateState()
    }

    function exampleUpdateState() {
        setHideBtn(!hideBtn)
    }

    function exampleMethodReturnValue(number) {
        return number + 1;
    }

    const [hideBtn, setHideBtn] = useState(false);
    const {posts} = props;
    return (
        <div className="App" data-test="appComponent">
            <Header/>
            <section>
                <Headline header={'Posts'} desc={'click the button to render posts'} tempArr={tempArr}/>
            </section>
            {!hideBtn && <SharedButton {...configButton}/>}
            {posts.length > 0 && <div>
                {posts.map((p, index) => {
                    return <ListItem desc={p.body} title={p.title} key={index}/>
                })}
            </div>}
        </div>
    );
}

const mapStateToProps = state => (
    {
        posts: state.posts
    }
)


export default connect(mapStateToProps, {fetchPost})(App);
