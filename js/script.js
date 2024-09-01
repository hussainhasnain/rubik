

const colorPrimary = "rgb(83, 49, 244)";
// const colorPrimary = "rgb(50, 50, 90)";
const colorPrimaryAlpha = "rgba(83, 49, 244, 0.6)";
// const colorPrimaryAlpha = "rgba(50, 50, 90, 0.6)";


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

/* ============== Reload Button Functionality starts =============== */

const reloadButton = document.querySelector(".payye__area--heading-reload");
reloadButton.addEventListener("click", function(){
  window.location.reload();
});

/* ============== Reload Button Functionality Ends =============== */


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


/* ============== Tippy JS Starts =============== */

// General Report Section 
tippy('.general__icons--percentage-1', {
  content: '33% Higher than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-2', {
  content: '2% Lower than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-3', {
  content: '12% Higher than last month',
  animation: 'shift-away',
});

tippy('.general__icons--percentage-4', {
  content: '22% Higher than last month',
  animation: 'shift-away',
});


// Products Section


tippy('.products__user--1', {
  content: 'Uploaded at 7 December 2020',
  animation: 'shift-away',
});

tippy('.products__user--2', {
  content: 'Uploaded at 20 September 2020',
  animation: 'shift-away',
});

tippy('.products__user--3', {
  content: 'Uploaded at 9 June 2021',
  animation: 'shift-away',
});

tippy('.products__user--4', {
  content: 'Uploaded at 13 January 2022',
  animation: 'shift-away',
});

tippy('.products__user--5', {
  content: 'Uploaded at 6 February 2020',
  animation: 'shift-away',
});

tippy('.products__user--6', {
  content: 'Uploaded at 15 March 2023',
  animation: 'shift-away',
});

tippy('.products__user--7', {
  content: 'Uploaded at 20 April 2022',
  animation: 'shift-away',
});

tippy('.products__user--8', {
  content: 'Uploaded at 2 May 2020',
  animation: 'shift-away',
});

tippy('.products__user--9', {
  content: 'Uploaded at 23 June 2023',
  animation: 'shift-away',
});

tippy('.products__user--10', {
  content: 'Uploaded at 10 July 2022',
  animation: 'shift-away',
});

tippy('.products__user--11', {
  content: 'Uploaded at 4 August 2021',
  animation: 'shift-away',
});

tippy('.products__user--12', {
  content: 'Uploaded at 10 September 2023',
  animation: 'shift-away',
});

/* ============== Tippy JS Ends =============== */

/* ============== AOS Initialization =============== */

AOS.init();

/* ============== AOS Initialization Ends =============== */

// Navbar functionality

const sidebar2Links = document.querySelectorAll(".sidebar2__link");

sidebar2Links.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove the active class from all links
        sidebar2Links.forEach(function(link) {
            link.classList.remove("sidebar2__link--active");
        });
        // Add the active class to the clicked link
        link.classList.add("sidebar2__link--active");
    });
});



/* ===== Users list menu toggle ===== */

// const sidebarLinkUsers = document.querySelector(".sidebar__link--users");
// // console.log(sidebarLinkUsers);
// const sidebarListUsers = document.querySelector(".sidebar2__usersList");
// // console.log(sidebarListUsers);

// sidebarLinkUsers.addEventListener("click", function(){
//     console.log('user is clicked');
//     sidebarListUsers.classList.toggle("sidebar2__usersList--open");
// });

// /* ===== Profiles list menu toggle ===== */

// const sidebarLinkProfile = document.querySelector(".sidebar__link--profile");
// // console.log(sidebarLinkProfile);
// const sidebarListProfile = document.querySelector(".sidebar2__profileList");
// // console.log(sidebarListProfile);

// sidebarLinkProfile.addEventListener("click", function(){
//     console.log('profile is clicked');


//     sidebarListProfile.classList.toggle("sidebar2__profileList--open");
//     // sidebarListProfile.classList.add('animate__animated', 'animate__slideInDown');
    
// });


/* ===== Section Sales Report Start ===== */

/* ============== Line Chart Starts ============= */
(function() {
    "use strict";

    // Check if the element with id 'report-line-chart' exists
    if (document.getElementById("report-line-chart")) {
        // Get the context of the canvas element we want to select
        let ctx = document.getElementById("report-line-chart").getContext("2d");

        // Create a new Chart instance
        let chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Income",
                    data: [0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100, 900, 1200],
                    borderWidth: 2,
                    borderColor: colorPrimaryAlpha,
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12
                            },
                           
                            color: 'rgba(100, 116, 139, 0.8)'
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 12
                            },
                            color: 'rgba(100, 116, 139, 0.8)',
                            callback: function(value, index, values) {
                                return "£" + value;
                            }
                        },
                        grid: {
                            color: 'rgba(100, 116, 139, 0.3)'
                        },
                        border: {
                            dash: [2, 2],
                            display: false
                        }
                    }
                }
            }
        });
    }
})();


/* ============== Line Chart Ends ============= */


/* ============== Pie Chart Starts ============= */
const payyePieChart = document.getElementById('report-pie-chart');

const pieData = {
    labels: ["Sales", "Expenditure", "Revenue"],
    datasets: [{
    //   label: 'My First Dataset',
      data: [15, 10, 65],
      backgroundColor: [
        'rgb(249, 115, 29)',
        'rgb(255, 205, 86)',
        colorPrimary,
      ],
      borderWidth: 5,
      hoverOffset: 4
    }]
  };
  
new Chart(payyePieChart, {
type: 'pie',
data: pieData,
options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    }
    
    }
});
/* ============== Pie Chart Ends ============= */

/* ============== Donut Chart Starts ============= */
    const payyeDonutChart = document.getElementById('report-donut-chart');

    const donutData = {
        labels: ["Sales", "Expenditure", "Revenue"],
        datasets: [{
        //   label: 'My First Dataset',
          data: [15, 10, 65],
          backgroundColor: [
            'rgb(249, 115, 29)',
            'rgb(255, 205, 86)',
              colorPrimary,
          ],
          borderWidth: 5,
          hoverOffset: 4
        }]
      };

new Chart(payyeDonutChart, {
    type: 'doughnut',
    data: donutData,
    options: {
    maintainAspectRatio: true,
    
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: "80%"
    
    }
});

/* ============== Donut Chart Ends ============= */

/* ===== Section Sales Report Ends ===== */


/*======= Edit Popup Modal Starts ========*/
document.querySelectorAll('.products__list--edit').forEach(function(editButton) {
  editButton.addEventListener('click', function() {
      var modalNumber = this.getAttribute('data-modal-id');
      var rowId = this.closest('.products__list--row').getAttribute('data-row-id');
      var rowName = this.closest('.products__list--row').getAttribute('data-row-name');
        
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
document.querySelectorAll('.products__list--delete').forEach(function(deleteButton) {
  deleteButton.addEventListener('click', function() {
      var modalNumber = this.getAttribute('data-modal-id');
      var rowId = this.closest('.products__list--row').getAttribute('data-row-id');
      var rowName = this.closest('.products__list--row').getAttribute('data-row-name');
        
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
/*======= Edit Popup Modal Ends ========*/

// initializing microModal
MicroModal.init();




/*======= Image Uploader ========*/

$('.input-images-1').imageUploader({
  maxSize: 2 * 1024 * 1024,
    maxFiles: 3

});



/*========== Select Dropdown Functionality in Category =========*/

const ddProducts = document.querySelector('#dropdown-wrapper-products');
const linkProducts = document.querySelectorAll('.dropdown-list-products a');
const spanProducts = document.querySelector('.dropdown__span-products');


ddProducts.addEventListener('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  this.classList.toggle('is-active');
});

// Add click event listeners to the linkProducts
for (let i = 0; i < linkProducts.length; i++) {
  linkProducts[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    spanProducts.innerHTML = evt.currentTarget.textContent;
    ddProducts.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  ddProducts.classList.remove('is-active');
});

/*======= Select Dropdown Functionality in Category Ends ======*/