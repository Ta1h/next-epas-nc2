import { ColumnDef } from "@tanstack/react-table";
import User from '@/types/user'
import { Button } from "../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { TableCellWithAlertDialog } from "@/components/userTable/TableCellWithAlertDialog"

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      )
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "created",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      )
    },
    cell: ({row}) => {
      const createdAt = row.getValue('created');
      const formated = new Date(createdAt as string).toLocaleDateString();
      return <div className="font-medium ml-6">{formated}</div>
    }
  },
  {
    id: 'Edit',
    cell: ({row}) => {
      const deletedRow = row.original.id;
      return <TableCellWithAlertDialog deletedRow={deletedRow}/>
    }
  },
];
