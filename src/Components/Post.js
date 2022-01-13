import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            posts: []
        }
    }

    componentDidMount(){

    const res = fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (data) => data.json())
    .then( (api => this.setState({posts : api})))
    .catch( err => console.log(err))
    console.log(res)
    
    
    
    }

    render() {
        const postItems = this.state.posts.map( (posts)=> <div>
            <h3 key={posts.id}>{posts.tittle}</h3>
            <p>{posts.body}</p>
        </div>)
        return (
            <div>
                {postItems}
            </div>
        )
    }
}
