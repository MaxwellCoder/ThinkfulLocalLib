function findAccountById(accounts, id) {
 let foundId = accounts.find((account) => account.id === id);
 return foundId;
}

function sortAccountsByLastName(accounts) {
 accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
};

function getTotalNumberOfBorrows(account, books) {
 let result = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    result += 1;
   }
  }
 }
 return result;
};

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let match = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;
  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    match.push(borrow);
    book.borrows = match;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
