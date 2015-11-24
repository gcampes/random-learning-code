# Ember-modal
This is an Ember Modal Component.
This Modal is a service, so you can easily call it whenever and wherever you need.
It is inspired in the ember-cli-flash Service implementation: https://github.com/poteto/ember-cli-flash.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

To display a modal all you need to do is install the addon and follow the steps below. 
Currently the only way to install is following the install instructions and npm link the repo to your application. 
###### Place the component on the application.hbs
```handlebars
<!-- app/templates/application.hbs -->


<h2 id="title">Welcome to Ember</h2>
  {{outlet}}
  
  <!-- This is where the modal will be rendered -->
  {{ember-imdt-modal}}
```

###### Choose a shorthand or create your custom modal.
```javascript
//app/controllers/yourcontroller.js

// Using the Alert shorthand
actions: {
  someAction(){
    //...code....
    this.modal.alert("This will be displayed as a modal alert", 500);        
  }
}

// Using the confirm shorthand
actions: {
  someAction(){
    //...code....
    this.modal.confirm("This will be displayed as a modal confirm", 1000);        
  }
}

// Using the custom method
actions: {
  someAction(){
    //...code....
    let options = { /*...*/ }
      
    this.modal.custom(options);        
  }
}

```

###### Done!


##### The suported modals are: 
Method  |Description
--------|----------------------------------------------------------------------------
custom  |Displays a custom modal, with a custom title, body and buttons.
confirm |Displays a confirm modal, with a selected message and a cancel and ok button
alert   |Displays an alert modal, with a message and ok button

##The custom method

here are the full attributes supported by the custom method 

Attribute     | Type    | Description
--------------|---------|----------------------------------------------------------------
title         | string  | A title for the Modal
body          | string  | A text to be displayed in the modal body
bodyTemplate  | string  | A template to be rendered in the modal body instead of the text
overlay       | boolean | A boolean to set if the modal have overlay or not
time          | number  | A number to set the time delay when you open the modal
buttons       | array   | An array of buttons to be displayed in the footer

Here is an example of the above:
```javascript

//Here you set the options
options:{
    title: "Some title",
    body: "Some body text",
    bodyTemplate: 'path/to/template',
    overlay: true,
    time: 1000, // ms
    buttons: [
        {
          label: "Cancel",
          action: "modalCancel"
        },
        {
          label: "Ok",
          action: "modalConfirm"
        }
      ] 
  },
  
  //Then you call for the custom method
  this.modal.custom(options);
```

## Running the dummy app

* `ember server`
* Visit your app at http://localhost:4200.
