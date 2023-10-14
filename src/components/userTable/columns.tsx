import { ColumnDef } from "@tanstack/react-table";
import User from '@/types/user'
import { Button } from "../ui/Button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

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
      return <div className="font-medium">{formated}</div>
    }
  },
  {
    id: 'Edit',
    cell: () => {
      return <Button variant='default'>view</Button>
    }
  },
];
