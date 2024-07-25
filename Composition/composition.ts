{
  class Post {
    id: number;
    content: string;
    // reference of other object/ has a relationship
    author: Author; // Post 'Has- A' Author
    // Post class use Author class
    commentList: Comment[]; // Post 'Has - A' list of comments
    // Depend on  Comment class

    getAuthor() {
      return this.author;
    }

    getComments() {
      return this.commentList;
    }
  }

  class Author {
    id: number;
    name: string;
    profilePicture: string;
  }

  class Comment {
    id: number;
    text: string;
    author: Author;

    getAuthor() {
      return this.author;
    }
  }
}
