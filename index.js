'use strict';


const STORE = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];

function iterateStore(shop) {
    return shop.map(obj => obj.hasOwnProperty('id')? generateItemHtml(obj) : 'missing input');

}

function generateItemHtml(obj) {

 let renderedItem = ` <li id='${obj.id}'>
 <span class="shopping-item" >${obj.name}</span>
 <div class="shopping-item-controls">
   <button >
     <span class="button-label">check</span>
   </button>
   <button class="shopping-item-delete">
     <span class="button-label">delete</span>
   </button>
 </div>
</li>`;
 return renderedItem;
}
console.log(generateItemHtml(STORE[2]));

function renderShoppingList(){
    let list = iterateStore(STORE);
    $('.shopping-list').html(list.join(' '));
}
console.log('`renderShoppingList` ran');



function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on
  // a shopping list item.
  console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
  // this function will be responsible for when users want to delete a shopping list
  // item
  console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);