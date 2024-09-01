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



// Accordion starts
$("#my-accordion").accordionjs({
    // Allow self close.(data-close-able)

   
    closeAble   : true,

    closeOther  : true,

    slideSpeed  : 150,

    activeIndex : false,

    openSection: function( section ){},

    beforeOpenSection: function( section ){},
});

// Accordion Ends

// Sidebar Filter Starts
let sidebarjs = new SidebarJS.SidebarElement({
    position: 'right',
    backdropOpacity: 0.6,
    responsive: true,
    mainContent: document.querySelector(".payye__area--fullWidth"),
    responsive: '800px',
});

const sidebarRight = document.querySelector(".sidebarjs--right");

const closeSidebarBtn = document.querySelector(".contacts__filter--group-close");
const closeSearchBtn = document.querySelector(".contacts__filter--group-button");

closeSidebarBtn.addEventListener("click", function(){
    sidebarRight.classList.remove("sidebarjs--is-visible");
});

closeSearchBtn.addEventListener("click", function(){
    sidebarRight.classList.remove("sidebarjs--is-visible");
});
// Sidebar Filters End


/*======= Add New Contact Popup Modal Starts ========*/
const addNewContact = document.querySelector(".addNewContact");

addNewContact.addEventListener("click", function() {
    MicroModal.show('modal-add-new-contact', {
        awaitCloseAnimation: true,
        onShow: function(modal) {
            // do something
        },
        onClose: function(modal) {
            // do something
            console.log("Add contact popup is closed");
        }
    });
});


/*======= Add New Contact Popup Modal Ends ========*/




/*========== Select Dropdown Functionality in Add Contacts Pop Up =========*/

const ddContactsAdd = document.querySelector('#dropdown-wrapper-contacts-add');
const linkContactsAdd = document.querySelectorAll('.dropdown-list-contacts-add a');
const spanContactsAdd = document.querySelector('.dropdown__span-contacts-add');


ddContactsAdd.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the linkContacts
for (let i = 0; i < linkContactsAdd.length; i++) {
  linkContactsAdd[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    spanContactsAdd.innerHTML = evt.currentTarget.textContent;
    ddContactsAdd.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  ddContactsAdd.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Add Contacts Pop Up Ends ======*/



/*======= Edit Popup Modal Starts ========*/
document.querySelectorAll('.contacts__list--edit').forEach(function(editButton) {
    editButton.addEventListener('click', function() {
        var modalNumber = this.getAttribute('data-modal-id');
        var rowId = this.closest('.contacts__list--row').getAttribute('data-row-id');
        var rowName = this.closest('.contacts__list--row').getAttribute('data-row-name');
          
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
               console.log("Edit Contact popup is closed");
            }
        });
        
        // Reset the ID back to the template after showing the modal
        setTimeout(function() {
            modalTemplate.id = 'modal-template';
        }, 500);  // Reset after a small delay
    });
  });
  /*======= Edit Popup Modal Ends ========*/



/*========== Select Dropdown Functionality in Edit Contacts Pop Up =========*/

const ddContactsEdit = document.querySelector('#dropdown-wrapper-contacts-edit');
const linkContactsEdit = document.querySelectorAll('.dropdown-list-contacts-edit a');
const spanContactsEdit = document.querySelector('.dropdown__span-contacts-edit');


ddContactsEdit.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the linkContacts
for (let i = 0; i < linkContactsEdit.length; i++) {
  linkContactsEdit[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    spanContactsEdit.innerHTML = evt.currentTarget.textContent;
    ddContactsEdit.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  ddContactsEdit.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Edit Contacts Pop Up Ends ======*/