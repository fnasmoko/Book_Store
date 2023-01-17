# Books_Store
Books Store app is a service that handles the transaction of borrow / return books owned by member. The user of this service is member. In this app a member could borrow and return a book. Also can get the list of members, books, and borrowed books.

## List of API

These are the list of API /members
```
[GET] /member -> to get all existing member

```

These are the list of API /books
```
[GET] /book -> to get all existing book except borrowed book

```

These are the list of API /transaction
```
[GET] / -> to get all transaction by name of member

[POST] /borrow -> to borrow the book

[POST] /return -> to return the book that the member had borrowed

```