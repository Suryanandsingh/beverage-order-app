# Beverage ordering application

The application should have 2 main views. The first view needs to show a beverage. menu and a queueing system for customers.
The second view needs to display, A simple form where customers can place an order for a beverage and submit it. Once orders are submitted, they should appear in the queue.

## Beverage menu

The beverage menu view should show a list of drinks to the customer.
The beverage menu should be displayed on page load once the app is initialized. and it can fetch the menu from JSON data.

Sample menu:
a. Sparkling Cranberry Punch 
b. Iced Chocolate Delight
c. Raspberry Fizz
d. Virgin Frozen Margarita
e. Summer Punch

## Beverage queue

The beverage queue is comprised of three lists: 

a. In the Queue
b. Being Mixed
c. Ready to Collect

Once a customer has placed an order for a beverage it should appear in the ‘In the Queue’ list, indicating to the customer that their drink is being processed. Items in the queue should show the name of the customer and the name of the beverage.
The mixologist who is making the beverage should be able to interact with the queue, firstly by clicking on list items in the ‘In the Queue’ list to move them to the ‘Being Mixed’ list once they are about to make the relevant beverage.
When the beverage is ready, the mixologist should be able to click on the relevant list item in the ‘Being Mixed’ queue to move it to the ‘Ready to Collect’ list.
Finally, once the customer has collected their beverage, they should be able to click on the relevant item in the ‘Ready to Collect’ list to remove it from the queue.

## Beverage order form

The beverage order form is a simple form that should allow the customer to select a drink from the menu and submit it along with their name to identify
   
themselves.
The beverages should be rendered as a dropdown list and the customer’s name should be entered into a text input field.

No validation of the form is required.