const chai = require('chai');
const expect = chai.expect;

const { addBook, getTitles, findBooks } = require('./library'); 

describe('Library Functions', () => {
  let libraryBooks = [];

  beforeEach(() => {
    // Reset the libraryBooks array before each test.
    libraryBooks = [
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
      { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
      { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
      { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
    ];
  });

  it('should add a book to the library', () => {
    const book = addBook("New Book", "New Author", 1234);
    expect(libraryBooks).to.deep.include(book);
  });

  it('should get titles sorted alphabetically', () => {
    const titles = getTitles();
    const expectedTitles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "The Road Ahead", "Walter Isaacson"];
    expect(titles).to.deep.equal(expectedTitles);
  });

  it('should find books matching the title', () => {
    const foundBooks = findBooks("The Road");
    const expectedBooks = ["The Road Ahead", "The Road Ahead"];
    expect(foundBooks).to.deep.equal(expectedBooks);
  });

  it('should handle no matching books for findBooks', () => {
    const foundBooks = findBooks("Non-existent Title");
    expect(foundBooks).to.deep.equal([]);
  });
});