# Book Tracker Website

A personal book management and reading journal website designed to help track books across multiple reading statuses, organize monthly reads, sort/add favourites, and display completed reading history on a public-facing bookshelf.

The project is divided into two sections:

#### Frontend (Public)
The frontend is accessible to visitors and serves as a digital bookshelf displaying books that have been completed or re-read. Visitors can browse monthly reading history.

#### Backend (Admin)
The backend is a private administration area where books are managed. Through the admin panel, books can be added, updated, categorized, and moved between reading statuses (to be read/completed/did not finish).

<br/>

The purpose of this project is to:
- Track all books planned to be read or re-read for the month.
- Record reading progress and reading history.
- Maintain a detailed TBR (To Be Read) collection.
- Track completed books and DNF (Did Not Finish) books.
- Track re-reads and maintain multiple read dates.
- Store ratings and personal reading notes.
- Organize favourite books by authors and series.
- Create a visually appealing digital bookshelf.

#### Technology Stack
This project is intentionally designed to begin with simple technologies:

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage (for temporary data storage)

Future versions may include:

- Node.js
- Express.js
- SQLite or PostgreSQL

---

### Project Structure
Project Structure
book-tracker/

├── admin/
│   ├── adminLogin.html
│   ├── adminPanel.html
│   ├── css/
│   │   ├── admin.css
│   │   ├── adminForm.css
│   ├── js/
│   │   ├── app.js
│   │   ├── navigation.js
│
├── book_covers/
├── data/
├── index.html
├── styles.css
├── README.md
├── .gitignore

___

### Features
##### Admin Login
- A simple login page that provides access to the administration area.


Central navigation hub for all management pages.
- TBR
- Add Book
- Monthly Reads
- Favourites
- Bookshelf Preview

The TBR page serves as the master library of all books.

#### Functions
- Search by title or author
- View book details
- Edit book information

---

#### Reading Statuses
- To Be Read
- Completed
- Did Not Finish
- Re-Read

#### Add New Book
Allows new books to be added to the collection.

#### Information Stored
- Book Cover 
- Book Title
- Book Type: Novel or Manga
- Author
- Standalond or Series Information
    - If part of series add the book number in series
- Completion Date or DNF Date
- Book Description
- Rating
- Book Tags
- Personal Notes

#### Book Details Page
Each book has a dedicated details page.

##### Information Available
- Book Cover 
- Book Title
- Book Type: Novel or Manga
- Author
- Standalond or Series Information
- Completion Date or DNF Date
- Book Description
- Rating
- Book Tags
- Personal Notes

##### Editing Functions
- Update reading status
- Add completion dates
- Record re-reads
- Add ratings
- Add personal notes

#### Reading Workflow
##### TBR
Book has not been started.

###### Available fields:
- Book Cover 
- Book Title
- Book Type: Novel or Manga
- Author
- Standalond or Series Information
- Book Tags
- Book Description

###### Hidden fields:
- Add ratings
- Add personal notes
- Completion Date

##### DNF
Book was started but not completed.

###### Available fields:
- Book Cover 
- Book Title
- Book Type: Novel or Manga
- Author
- DNF Date
- Standalond or Series Information
- Book Tags
- Book Description

###### Unavailable fields:
- Add ratings
- Add personal notes

##### Completed
Book has been finished.

###### Available fields:
- Book Cover 
- Book Title
- Book Type: Novel or Manga
- Author
- Standalond or Series Information
- Completion Date or DNF Date
- Book Description
- Rating
- Book Tags
- Personal Notes

##### Re-Read
Previously completed book read again.

###### Available fields:
- Additional Completion Dates
- Updated Rating
- Updated Notes

##### Monthly Reads
Books are automatically grouped by month based on completion dates.


### Favourites
Personal favourites are organized into author and series/standalone .

##### Public Bookshelf
The public bookshelf acts as a reading archive.

###### Visitors can browse:
- Monthly reads that I've completed only


The bookshelf will not display private admin functionality.

#### Current Development Status

##### Phase 1: Planning and UI Design

###### Current focus:
- Folder structure creation
- Page layout design
- Navigation setup
- Responsive styling
- Data model planning

Backend functionality and database integration will be added after the interface design is complete.

