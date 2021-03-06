import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions";
import Modal from './modal';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            );
        });
    }
    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>list of posts</h3>

                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
                <Modal>
                    <h1>Modal title</h1>
                    <p>Super contenu</p>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);
