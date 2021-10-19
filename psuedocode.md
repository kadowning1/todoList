## Psuedocode for Todo List

###### Requirements

1. Dynamically Render the content with React using components
2. Use Local Storage to store all to-do list data in the browser
3. Display all to-do list items
4. Three "views" for the user: All, Completed, & To-Do (not completed)
5. Display Prompting text to add item
6. Cross out or check off one item as "completed"
7. See number of remaining items
8. Remove one item (soft delete / archive)
9. Check off or cross out all items in one click as a "completed all" function
10. Remove all completed items (soft delete / archive)
11. Ability to press a button and all checked off items become active again

### Overview

- 4 different components/functions
    - App
     - will contain intial state setting
     - will render the other 3 components
    - Footer
     - Remove Button 
     - Active Button (Bootstrap Button Group)
     - Completed Button (Bootstrap Button Group)
     - All Button (Bootstrap Button Group)
     - Count number of to do
     - Could be footer
    - Header
     - Nav Bar
      - Enter Button - Add to todo list
      - Text Input (Create todo Local Storage)
    - List Section
     - input field to pass to Local Storage of To Do item

##### Model
 - constructor

 - setState - viewState/filterState
  - empty array of this.itemsToDo (All)
  - empty array of this.alreadyDone (Completed)
  - empty array of this.activeToDo (Active)

  - current page/To do
  
  - show/hide the item in the array (boolean)
  - have todos (boolean)
    - if true
    - if false

 - State of List Item Component
    - keyID - unique integer - Date timestamp
    - checked - boolean
    - deleted - boolean
    - textValue - string
    - Created at:

##### Controller

 - componentDidMount
  - set up localStorage

 - componentDidUpdate
  - update page number
  - add/delete from list
  - stringify/parse
  - add to local storage

 - helperFunctions
  - All
  - Completed
  - toDo
  - handleClear
  - viewCount
    - .length
  - 

 - localStorage CRUD Functions
  - Create
    - create new to do
  - Read
   - See List
   - Filter Value
   - view count
   - render
  - Update
   - Clear
   - Filter Value
   - update current todo
  - Delete
    - would be soft delete update method

##### View
 - render

 - method to mapArray

### 10/18 Session w/Ian

- 3 molecules
    - input
    - bottom footer
    - actual item list (checkbox)

- filter out Active/Completed
    - rerendering screen
    - maybe 'Sort'

- setState = true/false

- softDelete - state changing and rendering - Archive
- persist State

- Create
- Read
- Update (click checkbox)
- Delete

- Need more CRUD methods
    - Active
    - Completed

- How many clicks are on the page?
    - checkOffItem
    - clearItem
    - clearAllTasks
    - Active tab
    - Completed tab

- 3 different views

### 10/19 Session w/Ian

- Wireframe
- UML Diagram
- Psuedocode Methods & Patterns

- Atomic Design Principles
    - Page
    - Organisms
    - Molecules
    - Atoms

- React Components
    1. App (only when single page)
    2. ToDo List organism
    3. Footer Organism
    4. Header Molecule

```
Arr.map(todo, index) =>{
return to do
} 

```
- could be in the App render ^^^^
- could create helper function that returns constant of todo list items