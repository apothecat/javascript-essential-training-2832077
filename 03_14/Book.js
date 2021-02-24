class Book {
  constructor(title, datePublished) {
    this.title = title;
    this.datePublished = datePublished;
  }
  bookAge() {
    let now = new Date();
    let published = new Date(this.datePublished);
    let elapsed = now - published;
    let daysSincePublished = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    return daysSincePublished;
  }
}

export default Book;
