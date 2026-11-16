"use client"

import { createColumnHelper } from "@tanstack/react-table"
import type { DataTableFeatures } from "./data-table-features"
import { Badge } from "../ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  categoryId : number;
  isActive : boolean;
  category : {
    id: number;
    name : string
  }
}

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Product>()

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Product Name",
    cell: ({ row }) => <div>{row.original.name}</div>
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: ({ row }) => 
    <div>
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        {row.original.price} $
      </Badge>
    </div>
  }),
  columnHelper.accessor("qty", {
    header: "Qty",
    cell: ({ row }) => <div>{row.original.qty}</div>
  }),
  columnHelper.accessor("categoryId", {
    header: "CategoryId",
    cell: ({ row }) => <div>{row.original.categoryId}</div>
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: ({ row }) => 
    <div>
      {row.original.category.name}
    </div>
  }),

    columnHelper.display({
  header: "Actions",
  cell: ({ row }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="ghost" className="h-8 w-8 p-0" />}
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem><SquarePen />Edit</DropdownMenuItem>
            <DropdownMenuItem variant="destructive"><Trash2 />
            Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    },
  }),
])