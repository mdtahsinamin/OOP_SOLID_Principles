{
  // is a relationship ensure korte pari ki na
  class Author {
    id: number;
    name: string;
    profilePicture: string;

    getAuthor() {
      return this;
    }
  }

  class Post extends Author {
    id: number;
    content: string;
    commentList: Comment[];

    getComment() {
      return this.commentList;
    }
  }

  class Comment extends Author {
    id: number;
    text: string;
  }
}
