In this project, let's build a **Comments App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif" alt="comments output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of comments should be zero and the inputs fields should be empty
- When non-empty values are provided and **Add Comment** button is clicked,
  - A new comment should be added to the list of comments
  - The comments count should be incremented by one
  - The value of the input fields for name and comment should be updated to their initial values
- When the **Like** button of a comment is clicked, if the image for **Like** is
  - [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image, then it should be changed to the [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image
  - [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image, then it should be changed to the [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image
- When the **Delete** button of a comment is clicked, the comment should be deleted from the list of comments and the comments count should be decremented by one

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-component-breakdown-structure-v0.png" alt="component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Comments/index.js`
- `src/components/Comments/index.css`
- `src/components/CommentItem/index.js`
- `src/components/CommentItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- The `formatDistanceToNow` function in the **date-fns** package is used to return the gap between the given date and now in words.

```js
import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date())) // less than a minute
```

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- HTML input element for name should have the placeholder as **Your Name**
- HTML textarea element for comment should have the placeholder as **Your Comment**
- The **Like** image for each comment should have the alt as **like**
- The **Delete** button for each comment should have the data-testid as **delete**
- To display how much time ago the comment was posted, we will use `formatDistanceToNow` function from **date-fns** package

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png) alt should be **comments**
- [https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png) alt should be **delete**
- [https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png)
- [https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png)

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #dee0e3; width: 150px; padding: 10px; color: black">Hex: #dee0e3</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #cbd2d9; width: 150px; padding: 10px; color: black">Hex: #cbd2d9</div>
<div style="background-color: #0284c7; width: 150px; padding: 10px; color: white">Hex: #0284c7</div>
<div style="background-color: #f59e0b; width: 150px; padding: 10px; color: black">Hex: #f59e0b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #f97316; width: 150px; padding: 10px; color: black">Hex: #f97316</div>
<div style="background-color: #10b981; width: 150px; padding: 10px; color: black">Hex: #10b981</div>
<div style="background-color: #b91c1c; width: 150px; padding: 10px; color: black">Hex: #b91c1c</div>
<div style="background-color: #0ea5e9; width: 150px; padding: 10px; color: white">Hex: #0ea5e9</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: white">Hex: #94a3b8</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: white">Hex: #7e858e</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
