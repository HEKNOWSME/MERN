import _ from "lodash";
import { Movie } from "../Movies/AllMovies";
export function paginate(items: Movie[], currentPage: number, itemsPerPage: number) {
   const startIndex = (currentPage - 1) * itemsPerPage
   return _(items).slice(startIndex).take(itemsPerPage).value();
}