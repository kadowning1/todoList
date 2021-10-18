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

##### Model
 - constructor

 - setState
  - empty array of this.itemsToDo
  - empty array of this.alreadyDone
  - empty array of this.addToDo
  
  - show/hide the item in the array (boolean)

##### Controller

 - componentDidMount

 - componentDidUpdate

 - helperFunctions

 - localStorage CRUD Functions

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