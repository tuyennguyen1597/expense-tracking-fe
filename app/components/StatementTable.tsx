import { StatementTracker } from "@/schema/statement";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type StatementTableProps = {
  statement: StatementTracker[];
};

export default function StatementTable({ statement }: StatementTableProps) {
  return (
    <div className="container w-1/2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statement.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.category}</TableCell>
              <TableCell
                className={`text-right ${
                  item.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.type === "income" ? "+" : "-"}{" "}
                {item.amount.toLocaleString()}
              </TableCell>
              <TableCell>{item.date?.toLocaleDateString() || ""}</TableCell>
              <TableCell>{item.description || ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
