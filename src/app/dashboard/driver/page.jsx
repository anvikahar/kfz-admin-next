"use client";
import { useState } from "react";
import { CustomPagination } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const DriverPage = () => {
  const customerData = [
    {
      customerName: "John Doe",
      email: "johndoe@gmail.com",
      phone: "+91 90909090",
      document: "Pan Card",
      status: "Active",
      registerDate: "2023-04-12",
    },
    {
      customerName: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+1 1234567890",
      document: "Aadhar Card",
      status: "Pending",
      registerDate: "2023-04-13",
    },
    {
      customerName: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: "+44 1234567890",
      document: "Pan Card",
      status: "Active",
      registerDate: "2023-04-14",
    },
    {
      customerName: "Bob Brown",
      email: "bobbrown@example.com",
      phone: "+61 1234567890",
      document: "Aadhar Card",
      status: "Pending",
      registerDate: "2023-04-15",
    },
    {
      customerName: "Emily Wilson",
      email: "emilywilson@example.com",
      phone: "+81 1234567890",
      document: "Aadhar Card",
      status: "Active",
      registerDate: "2023-04-16",
    },
    {
      customerName: "David Lee",
      email: "davidlee@example.com",
      phone: "+82 1234567890",
      document: "Pan Card",
      status: "Active",
      registerDate: "2023-04-17",
    },
    {
      customerName: "Maria Garcia",
      email: "mariagarcia@example.com",
      phone: "+34 1234567890",
      document: "Aadhar Card",
      status: "Pending",
      registerDate: "2023-04-18",
    },
    {
      customerName: "Luca Rossi",
      email: "lucarossi@example.com",
      phone: "+39 1234567890",
      document: "Aadhar Card",
      status: "Active",
      registerDate: "2023-04-19",
    },
    {
      customerName: "Sophie Martin",
      email: "sophiemartin@example.com",
      phone: "+33 1234567890",
      document: "Pan Card",
      status: "Pending",
      registerDate: "2023-04-20",
    },
    {
      customerName: "Mohammed Khan",
      email: "mohammedkhan@example.com",
      phone: "+92 1234567890",
      document: "Aadhar Card",
      status: "Active",
      registerDate: "2023-04-21",
    },
  ];

  // State for current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(customerData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <div className="flex gap-10 w-full">
                <h1 className="font-bold text-2xl">All Driver Details</h1>
                {/* <div className="w-full flex-1">
                  <form>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search Driver..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                      />
                    </div>
                  </form>
                </div> */}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href={"/dashboard/vehicle"}>
                  <Button size="sm" variant="outline" className="h-7 gap-1">
                    <Car className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      View Vehicle
                    </span>
                  </Button>
                </Link>
                <Link href={"/dashboard/driver/add-driver"}>
                  <Button size="sm" variant="outline" className="h-7 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Driver
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <TabsContent value="all">
              <Card className="h-[600px]" x-chunk="dashboard-06-chunk-0 ">
                <CardContent>
                  <ScrollArea className="h-[480px] w-full overflow-y-auto">
                    <Table>
                      <TableHeader className=" py-4">
                        <TableRow>
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Sr.No
                          </TableHead>
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Driver Name
                          </TableHead>
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Driver Email
                          </TableHead>
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Driver Phone
                          </TableHead>
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Document
                          </TableHead>
                          {/* <TableHead style={{ whiteSpace: "nowrap" }}>
                            Document Image
                          </TableHead> */}

                          {/* // Status Here 
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Status
                          </TableHead> */}
                          <TableHead style={{ whiteSpace: "nowrap" }}>
                            Created at
                          </TableHead>

                          <TableHead
                            style={{
                              whiteSpace: "nowrap",
                              textAlign: "center",
                            }}
                          >
                            Action
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customerData
                          .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                          )
                          .map((cData, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium p-2">
                                {index + 1}
                              </TableCell>
                              <TableCell className="font-medium p-2">
                                {cData.customerName}
                              </TableCell>
                              <TableCell className="font-medium p-2">
                                {cData.email}
                              </TableCell>
                              <TableCell className="font-medium p-2">
                                {cData.phone}
                              </TableCell>
                              <TableCell className="font-medium p-2">
                                {cData.document}
                              </TableCell>

                              {/* <TableCell className="font-medium p-2">
                                <Link
                                  href={cData.documentImage}
                                  width={50}
                                  height={50}
                                  alt="Driver Document Image"
                                ></Link>
                              </TableCell> */}

                              {/* <TableCell className="font-medium p-2">
                                <Badge
                                  style={{ whiteSpace: "nowrap" }}
                                  variant="outline"
                                >
                                  {cData.status}
                                </Badge>
                              </TableCell> */}

                              <TableCell className="font-medium p-2">
                                {cData.registerDate}
                              </TableCell>

                              <TableCell>
                                <div className=" flex flex-row gap-2">
                                  <Button variant="outline">Accept</Button>
                                  <Button variant="outline">Reject</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                </CardContent>
                <CustomPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing{" "}
                    <strong>
                      {currentPage * itemsPerPage > customerData.length
                        ? customerData.length
                        : currentPage * itemsPerPage}
                    </strong>{" "}
                    of <strong>{customerData.length}</strong> orders
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </h1>
    </div>
  );
};

export default DriverPage;
