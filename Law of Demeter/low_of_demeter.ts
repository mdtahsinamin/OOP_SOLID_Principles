{
  class Post {
    author: User;

    getCommentOfAuthor() {
      // this.author.comments.getValue();

      this.author.getComments();
    }
  }

  class User {
    comments: Comment;
    getComments() {}
  }

  class Comment {
    value: string;
    getValue() {}
  }
}
