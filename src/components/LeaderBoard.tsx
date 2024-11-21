import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { score } from "../utils"

type LeaderBoardProps = {
  contrast: number;
}

export function LeaderBoard({contrast}:LeaderBoardProps) {

  const normalScore = score(contrast, "normal");
  const largeScore = score(contrast, "large");

  const isNormalAccessibleAAA = normalScore === "AAA";
  const isNormalAccessibleAA = normalScore ===  "AA" || isNormalAccessibleAAA;
  const isLargeAccessibleAAA = largeScore === "AAA";
  const isLargeAccessibleAA = largeScore ===  "AAA" || isLargeAccessibleAAA;

  console.log(largeScore)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Element type</TableHead>
          <TableHead className="text-center">AA</TableHead>
          <TableHead>AAA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

          <TableRow>
            <TableCell className="font-medium">Normal Text</TableCell>
            <TableCell>
              <Badge>{isNormalAccessibleAA ? 'Pass' : 'Fail'}</Badge>
            </TableCell>
            <TableCell>
            <Badge >{isNormalAccessibleAAA ? 'Pass' : 'Fail'}</Badge>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Large text</TableCell>
            <TableCell>
              <Badge>{isLargeAccessibleAA ? 'Pass' : 'Fail'}</Badge>
            </TableCell>
            <TableCell>
            <Badge>{isLargeAccessibleAAA ? 'Pass' : 'Fail'}</Badge>
            </TableCell>
          </TableRow>

      </TableBody>
    </Table>
  )
}
