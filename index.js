'use strict';


const STORE = [
  {id: cuid(), name: 'apples', checked: false},
  {id: cuid(), name: 'oranges', checked: false},
  {id: cuid(), name: 'milk', checked: true},
  {id: cuid(), name: 'bread', checked: false}
];

function iterateStore(shop) {
  return shop.map(obj => obj.hasOwnProperty('id')? generateItemHtml(obj) : 'missing input');

}

function generateItemHtml(obj) {
  let renderedItem = ` <li id='${obj.id}'>
  <span class="shopping-item ${obj.checked ? "shopping-item__checked" : ""}" >${obj.name}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-check">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
  </li>`;
  return renderedItem;
}

function renderShoppingList(){
  let list = iterateStore(STORE);
  $('.shopping-list').html(list.join(' '));
}
console.log('`renderShoppingList` ran');

function addItemToStore(item) {
  STORE.push({id: cuid(), name: item, checked: false});
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    let newItem = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToStore(newItem);
    renderShoppingList();
  });
  console.log('`handleNewItemSubmit` ran');
}

function checkItem(id) {
  STORE.map(item => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
  });
}

function handleItemCheckClicked() {
  $('ul').on('click', '.shopping-item-check', function() {
    const id = $(this).closest('li').attr('id');
    checkItem(id);
    renderShoppingList();
  })
  console.log('`handleItemCheckClicked` ran');
}

function deleteItem(id) {
  STORE.map((item, i) => {
    if (item.id === id) {
      // Delete STORE[i];
      console.log('MATCH');
      STORE.splice(i, 1);
    }
  });
}

function handleDeleteItemClicked() {
  $('ul').on('click', '.shopping-item-delete', function() {
    const id = $(this).closest('li').attr('id');
    deleteItem(id);
    renderShoppingList();
  });
  console.log('`handleDeleteItemClicked` ran');
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