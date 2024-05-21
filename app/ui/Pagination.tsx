import React from "react";
import Breadcrumb from "@/app/ui/Breadcrumb";

interface PaginationProps {
    page: number;
    pageCount: number;

}
const Pagination: React.FC<PaginationProps> = ({ page, pageCount }) => {

    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    const prevPage = page - 1;
    const nextPage = page + 1;
    console.log(pages,page,pageCount,prevPage,nextPage);
    return (
<div className="flex flex-row justify-center">

<nav aria-label="Page navigation example">
    <ul className="inline-flex -space-x-px text-base h-10">
        {(page > 1) ?
        <li>
            <a href={`/articles?page=${prevPage}`}
               className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg  hover:bg-menuhover ">Previous</a>
        </li>: ""}

        {pages.map((item) => (
            <div key={item}>
                <li>
                    {(page === item) ?
                        <a href={`/articles?page=${item}`}
                           className="flex items-center justify-center px-4 h-10 font-medium border border-gray-300 bg-menu   ">{item}</a>
                        :
                        <a href={`/articles?page=${item}`}
                           className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-menuhover  ">{item}</a>
                     }
                        </li>

                        </div>
                        ))}

        {(page < pageCount) ?
        <li>
            <a href={`/articles?page=${nextPage}`}
               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg  hover:bg-menuhover ">Next</a>
        </li>:""}
    </ul>
</nav>
</div>
)

}

export default Pagination;