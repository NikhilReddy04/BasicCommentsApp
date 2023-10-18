import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameIp: '',
    commentIp: '',
    commentsList: [],
  }

  enteringName = event => {
    this.setState({nameIp: event.target.value})
  }

  enteringComment = event => {
    this.setState({commentIp: event.target.value})
  }

  onDelete = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: newCommentsList})
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const randomNum = Math.ceil((Math.random() * 100) % 7)
    const colorClass = initialContainerBackgroundClassNames[randomNum]
    const {nameIp, commentIp} = this.state
    const commentDetails = {
      id: uuidv4(),
      name: nameIp,
      comment: commentIp,
      isLiked: false,
      colorClass,
      date: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentDetails],
      nameIp: '',
      commentIp: '',
    }))
  }

  render() {
    const {commentsList, nameIp, commentIp} = this.state
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="top-text-container">
            <h1 className="main-heading">Comments</h1>
            <p className="name-input-label">
              Say something about 4.0 technologies
            </p>
            <form className="input-form">
              <input
                onChange={this.enteringName}
                className="name-input"
                placeholder="Your Name"
                type="text"
                value={nameIp}
              />
              <textarea
                onChange={this.enteringComment}
                className="comment-input"
                placeholder="Your Comment"
                value={commentIp}
              />
            </form>

            <button
              onClick={this.addComment}
              type="button"
              className="add-comment-button"
            >
              Add comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <hr className="horizontal-line" />
        </div>

        <div className="comments-container">
          <p className="comments-count">{commentsList.length} Comments</p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                onDelete={this.onDelete}
                id={eachItem.id}
                commentDetails={eachItem}
                onClickLike={this.onClickLike}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
