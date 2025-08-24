"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";

const accounts = [
  {
    id: 1,
    name: "Ann Culhane",
    accountId: "5684236526",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: 70,
    balance: -270,
    deposit: 500,
  },
  {
    id: 2,
    name: "Ahmad Rosser",
    accountId: "5684236527",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Paid",
    rate: 70,
    balance: 270,
    deposit: 500,
  },
  {
    id: 3,
    name: "Zain Calzoni",
    accountId: "5684236528",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: 70,
    balance: -20,
    deposit: 500,
  },
  {
    id: 4,
    name: "Leo Stanton",
    accountId: "5684236529",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Inactive",
    rate: 70,
    balance: 600,
    deposit: 500,
  },
  {
    id: 5,
    name: "Kaiya Vetrovs",
    accountId: "5684236530",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: 70,
    balance: -350,
    deposit: 500,
  },
  {
    id: 6,
    name: "Ryan Westervelt",
    accountId: "5684236531",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Paid",
    rate: 70,
    balance: -270,
    deposit: 500,
  },
  {
    id: 7,
    name: "Corey Stanton",
    accountId: "5684236532",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Due",
    rate: 70,
    balance: 30,
    deposit: 500,
  },
  {
    id: 8,
    name: "Adison Aminoff",
    accountId: "5684236533",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    rate: 70,
    balance: -270,
    deposit: 500,
  },
  {
    id: 9,
    name: "Alfredo Aminoff",
    accountId: "5684236534",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Inactive",
    rate: 70,
    balance: 460,
    deposit: 500,
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Open":
      return "bg-blue-50 text-blue-600";
    case "Paid":
      return "bg-green-50 text-green-600";
    case "Inactive":
      return "bg-gray-50 text-gray-600";
    case "Due":
      return "bg-red-50 text-red-600";
    default:
      return "bg-gray-50 text-gray-600";
  }
}

export default function AccountsPage() {
  return (
    <div className=" bg-[#f5f7fa] pt-[52px] pl-[40px]">
      {/* Table */}
      <Card className="bg-[#f7f9fd]">
        <div className="flex items-center justify-between px-4 w-full">
          {/* Search & Filter */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="!h-[32px] " size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <div className="relative flex-1 sm:max-w-sm bg-white !h-[32px] rounded-[12px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-10 rounded-[12px] !h-[32px]  !border border-solid border-gray-100"
              />
            </div>
          </div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Button className="bg-[#2264E5]  h-[32px] w-[148px] hover:bg-primary/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add customer
            </Button>
          </div>
        </div>
        <CardContent className="p-0 ">
          <div className="overflow-x-auto">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
                    <input type="checkbox" className="h-4 w-4" />
                  </TableHead>
                  <TableHead className="w-12 text-center">
                    <div className="flex items-center justify-center gap-1">
                      #
                      <ArrowUpDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      ACCOUNT NAME
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    <div className="flex items-center gap-1">
                      DESCRIPTION
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      STATUS
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      RATE
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      BALANCE
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      DEPOSIT
                      <ChevronDown className="h-4 w-4 text-gray-400 cursor-pointer" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {accounts.map((account, index) => (
                  <TableRow
                    key={account.id}
                    className={` ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <TableCell>
                      <input type="checkbox" className="h-4 w-4" />
                    </TableCell>
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell>
                      <div className="font-medium">{account.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {account.accountId}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-gray-500 truncate">
                      {account.description}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          account.status
                        )}`}
                      >
                        {account.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      ${account.rate.toFixed(2)}
                      <div className="text-xs text-gray-400">CAD</div>
                    </TableCell>
                    <TableCell
                      className={`text-center font-medium ${
                        account.balance < 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      ${account.balance.toFixed(2)}
                      <div className="text-xs text-gray-400">CAD</div>
                    </TableCell>
                    <TableCell className="text-center font-medium">
                      ${account.deposit.toFixed(2)}
                      <div className="text-xs text-gray-400">CAD</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">1-10 of 97</p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">Rows per page: 10</p>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">1</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
