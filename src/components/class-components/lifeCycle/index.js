
// earth 


// human lifecycle :
// 1. born 
// 2. life ---> survival stage 
// 3. expiry stage 

// dom 
// component lifecycle methods , its for class based components
// 1. Mounting phase 

// 1. Constructor --> to create and initilize the state --> mostly used 
// 2. Render method ---> to keep elements in the dom we need render method --> used 
// 3. derivedStateFromProps ---> to initialize the state based on initial props ---> rarely used 
// 4. ComponentDidMount ---> to perform the side effects in class based components on page load --> mostly used

// side effects examples:
// 1. Http req (api calls)
// 2. Dom manipulations
// 3. timing events (timers)
// 4. any third party subscribtions
// 5. to trigger the event listeners 


// 2. Updating phase 
// 1. render -->to keep elements in the dom updated we need render method --> used 
// 2. component did update  ---> to perform the side effects in class based components in updating phase --> used 
// 3. should component update ---> it decides whether the component has to update or not --> rarely used 
// 4. getSnapShotBeforeUpdate --> to check the values of state and props before update i can use getSnapShotBeforeUpdate method--> rarely used 
// // 3. Unmounting phase
// 1. Component will unmount --> this method is used for preventing the memory leaks in the component while 
// removing from dom ---> rarely used , used when required 


