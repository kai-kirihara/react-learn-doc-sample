import React from 'react';
import axios from 'axios';

export default class NewsList extends React.Component {
    state = {
        news: []
    }
    
    componentDidMount() {
        axios.get(`https://44my7rpn89.execute-api.us-west-2.amazonaws.com/dev/news`)
            .then(res => {
                const news = res.data;
                this.setState({news});
            })
    }

    render() {
        return (
            <ul>
                { this.state.news.map(news => <li>{news.message}</li>)}
            </ul>
            )
    }
}