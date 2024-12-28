import { User } from "../Users/Users"

export const Paginate = (items: User[], currentPage: number, pageSize: number) => {
   const startIndex = (currentPage - 1) * pageSize
   const endIndex = startIndex + pageSize
   return items.slice(startIndex, endIndex);
}
