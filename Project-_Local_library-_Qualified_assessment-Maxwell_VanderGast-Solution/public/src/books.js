
function findAuthorById(authors, id) {
 let result = authors.find((author) => author.id === id);
 return result;
};

function findBookById(books, id) {
 let found = books.find((book) => book.id === id);
 return found;
};

function partitionBooksByBorrowedStatus(books) {
 let returned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );

 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
  
 let finalArray = [[...booksBorrowed], [...returned]];
 return finalArray;
};

function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
