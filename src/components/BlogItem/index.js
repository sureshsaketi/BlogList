import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, publishedDate, description} = blogDetails
  return (
    <li key={id} className="each-post">
      <div className="title-published-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}
export default BlogItem
