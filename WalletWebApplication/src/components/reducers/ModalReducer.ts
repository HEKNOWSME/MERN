type Modal =  {
   transaction: false;
   category: false;
	account: false;
}
type Action = "transaction" | "category" | "account"
const modalReducer = (state: Modal, action: Action) => { 
   switch (action) {
      case "transaction":
         return !state.transaction
      case "category": 
         return !state.category
      case "account":
         return !state.account
      
      default:
         return {transaction: false, category: false, account: false}
   }
}
export default modalReducer