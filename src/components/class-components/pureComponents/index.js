
// by default when parent state changes, parent will re-render as well as child will gets re-render
// which creates the performace issue when we are dealing with more nested components 

// pure components :
//  A pure component will re-render only its prop or state changes 
//  to prevent un-neccasary re-renders we will go for pure components in class based components 
// pure component internally applies shouldComponentUpdate life cycle metho , to prevent re-renders 
