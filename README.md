jquery-analytics-event-tracking
===============================

JQuery plugin for Event Tracking based on Universal Analytics (analytics.js)

**IN PROGRESS**

Usage
-----

Use `$('body').analyticsEventTracker();` to initialize the plugin. 

All elements in the body tag which contain the class `.track` will be tracked.

Add `date-category="category-name"` to specify the category (default: 'General')  
Add `date-action="click"` to specify the action (default: 'click')  
Add `date-label="label-name"` to specify the label (default: '')  
Add `date-value="1"` to specify the value (default: 1)

Advanced usage
-----

To use events other than the 'click' event, extend the `.track` with one of the following:
* -focus `.track-focus` - tracks event on focus 
* -blur `.track-blur` - tracks event on blur 
* -mouseover `.track-mouseover` - tracks event on mouseover 

Example
-------

    <form action="" method="post">
  	    <label for="username">Username:</label>
        <input type="email" name="username" value="" id="username" class="track-blur" data-category="login" data-action="completed" data-label="username" />

        <label for="password">Password:</label>
        <input type="password" name="password" value="" id="password" class="track-blur" data-category="login" data-action="completed" data-label="password" />

        <input type="submit" value="Log in" class="track" data-category="login" data-action="click" data-label="button" data-value="2" />
    </form>
