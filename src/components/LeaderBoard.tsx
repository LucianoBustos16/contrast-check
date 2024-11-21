// import { Theme } from "@/App";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

  // const isDarkMode = theme === "dark";

  const passStyle = "bg-[#E1FCEF] text-center min-w-[50px] text-[#2b5a42] rounded-full px-2 mx-auto w-fit font-bold";

  const failStyle = "bg-[#f3f1f2] text-center min-w-[50px] text-[#a30029] rounded-full px-2 mx-auto w-fit font-bold";


  return (
    <Table className="dark:bg-[#151515] dark:text-white">
      <TableHeader>
        <TableRow>
          <TableHead className="">Element type</TableHead>
          <TableHead className="text-center">AA</TableHead>
          <TableHead className="text-center">AAA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

          <TableRow>
            <TableCell className="font-medium">Normal Text</TableCell>
            <TableCell>
              <p className={isNormalAccessibleAA ? passStyle : failStyle }> {isNormalAccessibleAA ? 'Pass' : 'Fail'}</p>
            </TableCell>
            <TableCell>
            <p className={isNormalAccessibleAAA ? passStyle : failStyle } >{isNormalAccessibleAAA ? 'Pass' : 'Fail'}</p>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell className="font-medium">Large text</TableCell>
            <TableCell>
                  <p className={isLargeAccessibleAA ? passStyle : failStyle }>{isLargeAccessibleAA ? "Pass" : "Fail"}</p>
            </TableCell>
            <TableCell>
            <p className={isLargeAccessibleAAA ? passStyle : failStyle }>{isLargeAccessibleAAA ? 'Pass' : 'Fail'}</p>
            </TableCell>
          </TableRow>

      </TableBody>
    </Table>
  )
}
