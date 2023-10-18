import './index.css'

const CommentItem = props => {
  const {commentDetails, onDelete, id, onClickLike} = props
  const {name, comment, isLiked, colorClass, date} = commentDetails

  const onclickLike = () => {
    onClickLike(id)
  }
  const onClickDelete = () => {
    console.log(id)
    onDelete(id)
  }
  const srcUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedClass = isLiked ? 'liked' : 'not-liked'
  return (
    <li className="comment-card">
      <div className="card-top-text-container">
        <p className={`profile-pic-heading ${colorClass}`}>
          {name.slice(0, 1)}
        </p>
        <div className="name-container">
          <div className="name-and-date-container">
            <h1 className="username-heading">{name}</h1>
            <p className="time-para">{date}</p>
          </div>
          <p className="comment-content">{comment}</p>
        </div>
      </div>
      <div className="bottom-controls-container">
        <button onClick={onclickLike} type="button" className="like-button">
          <i>
            <img alt="like" className="like-image" src={srcUrl} />
          </i>
          <p className={`${likedClass}`}>Like</p>
        </button>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          type="button"
          className="delete-button"
        >
          <img
            alt="delete"
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
