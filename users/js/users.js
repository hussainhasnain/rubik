// Mobile Navigation

const menuButton = document.querySelector(".mobileNav__button");
const payyeSidebar = document.querySelector(".payye__sidebar");

menuButton.addEventListener("click", function(){
    payyeSidebar.classList.toggle("payye__sidebar--open");
});


window.addEventListener("resize", function(){
  
  if(window.innerWidth > 900){
    payyeSidebar.classList.remove("payye__sidebar--open");
  }
});


/* ============== Toggling the Active class on sidebar elements =============== */

const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove the active class from all links
        sidebarLinks.forEach(function(link) {
          
            link.classList.remove("sidebar__link--active");
            
        });
        // Add the active class to the clicked link
        link.classList.add("sidebar__link--active");

    });
});

/* ============== Toggling the Active class on sidebar elements Ends =============== */


/*========== Select Dropdown Functionality in Add User Pop Up =========*/

const ddUsersAdd = document.querySelector('#dropdown-wrapper-users-add');
const linkUsersAdd = document.querySelectorAll('.dropdown-list-users-add a');
const spanUsersAdd = document.querySelector('.dropdown__span-users-add');


ddUsersAdd.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the linkUsers
for (let i = 0; i < linkUsersAdd.length; i++) {
  linkUsersAdd[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    spanUsersAdd.innerHTML = evt.currentTarget.textContent;
    ddUsersAdd.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  ddUsersAdd.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Add User Pop Up Ends ======*/



/*========== Select Dropdown Functionality in Edit Pop Up =========*/

const ddUsers = document.querySelector('#dropdown-wrapper-users');
const linkUsers = document.querySelectorAll('.dropdown-list-users a');
const spanUsers = document.querySelector('.dropdown__span-users');


ddUsers.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the linkUsers
for (let i = 0; i < linkUsers.length; i++) {
  linkUsers[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    spanUsers.innerHTML = evt.currentTarget.textContent;
    ddUsers.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  ddUsers.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Edit Pop Up Ends ======*/


/*======= Add New User Popup Modal Starts ========*/
const addNewUser = document.querySelector(".addNewUser");
// addNewUser.addEventListener('touchstart', handler, { passive: true });

addNewUser.addEventListener("click", function() {
    MicroModal.show('modal-add-new-user', {
        awaitCloseAnimation: true,
        onShow: function(modal) {
            // do something
        },
        onClose: function(modal) {
            // do something
            console.log("Add user popup is closed");
        }
    });
});
/*======= Add New User Popup Modal Ends ========*/



/*======= Edit Popup Modal Starts ========*/
document.querySelectorAll('.users__list--edit').forEach(function(editButton) {
    editButton.addEventListener('click', function() {
        var modalNumber = this.getAttribute('data-modal-id');
        var rowId = this.closest('.users__list--row').getAttribute('data-row-id');
        var rowName = this.closest('.users__list--row').getAttribute('data-row-name');
          
          console.log("Editing row with ID:", rowId, "and Name:", rowName);
        
        
        var modalTemplate = document.getElementById('modal-template');
  
        // Set the modal's ID to match the clicked button's data attribute
        modalTemplate.id = "modal-edit-" + modalNumber;
        
              
        // Show the modal using MicroModal
        MicroModal.show("modal-edit-" + modalNumber,{
            awaitCloseAnimation: true,
            onShow: function(modal){
               // do something
            },
            onClose: function(modal){
               // do something
               console.log("Edit user popup is closed");
            }
        });
        
        // Reset the ID back to the template after showing the modal
        setTimeout(function() {
            modalTemplate.id = 'modal-template';
        }, 500);  // Reset after a small delay
    });
  });
  /*======= Edit Popup Modal Ends ========*/



/*======= Delete Popup Modal Starts ========*/
document.querySelectorAll('.users__list--delete').forEach(function(deleteButton) {
    deleteButton.addEventListener('click', function() {
        var modalNumber = this.getAttribute('data-modal-id');
        var rowId = this.closest('.users__list--row').getAttribute('data-row-id');
        var rowName = this.closest('.users__list--row').getAttribute('data-row-name');
          
          console.log("Deleting row with ID:", rowId, "and Name:", rowName);
        
        var modalTemplate = document.getElementById('modal-delete-template');
        // Set the modal's ID to match the clicked button's data attribute
        modalTemplate.id = "modal-delete-" + modalNumber;
              
        // Show the modal using MicroModal
        MicroModal.show("modal-delete-" + modalNumber,{
            awaitCloseAnimation: true,
            onShow: function(modal){
               // do something
            },
            onClose: function(modal){
               // do something
            }
        });
        
        // Reset the ID back to the template after showing the modal
        setTimeout(function() {
            modalTemplate.id = 'modal-delete-template';
        }, 500);  // Reset after a small delay
    });
  });
  /*======= Delete Popup Modal Ends ========*/
  
  // initializing microModal
  MicroModal.init();



