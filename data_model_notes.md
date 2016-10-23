###Notes

Adding a component
  
  1. Clicking component
	  1. Inside the side-bar, icons there to indicate the different components
  2. Adds selected component to new row (default)
	  1. clicking the icon adds the selected component to a row after that last row
	  2. if no rows in page, creates first row and places component inside it
  3. Selected component is then shown in view
	  1. rowService holds component, ng-repeat over each row, then ng-repeat each component in that row
	  2. Row is a directive
	  3. Components have their own directive/s
	  4. Have to dynamically identify which directive to add

	  
Technical approach

1. Clicking component
	1. In local ctrl (can be it's own ctrl), a call to the rowService is made to add a component (component type/name passed as argument to rowService from CTRL)
2. Adds selected component to new row
  1. rowService finds last row and creates a new one after that in order 
  2. rowService makes a call to the componentService and passes the name/type as an argument (one passed in from CTRL)
  3. componentService builds a new component and returns that component to the rowService
  4. rowService takes returned component and adds it to the newly created row
3. Selected component is then shown in view
  1. In view, ng-repeat over the rows
	  1. row directive can likely be used to tie mouse-over events to the directive and not have to worry about the CTRL getting into the mix
	  2. directive scope will provide some advantages for drag-n-drop, significant advantages!
  2. Inside the row ng-repeat, the components will be ng-repeated at as well.  With this we can run through the data model and not rely on the DOM
  	  1. Point of challenge here, how do we dynamically add a directive or change the internals of a directive 
  	  2. Investigating this part  now