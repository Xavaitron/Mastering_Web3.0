import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function admin() {
  return (
    (<div className="dark flex flex-col min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
          prefetch={false}>
          <LayoutGridIcon className="w-6 h-6" />
          <span className="sr-only">Tasks</span>
        </Link>
        <nav
          className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Tasks
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Workers
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Reports
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <Image
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Address"
              style={{ aspectRatio: "32/32", objectFit: "cover" }} />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TimerIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Task 1</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0x123...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0x456...</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div className="ml-auto">
                <Badge variant={true ? "secondary" : "outline"}>{true ? "Completed" : "In Progress"}</Badge>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TimerIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Task 2</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0x789...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0xabc...</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div className="ml-auto">
                <Badge variant={false ? "secondary" : "outline"}>{false ? "Completed" : "In Progress"}</Badge>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TimerIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Task 3</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0xdef...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0xghi...</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div className="ml-auto">
                <Badge variant={true ? "secondary" : "outline"}>{true ? "Completed" : "In Progress"}</Badge>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TimerIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Task 4</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0xjkl...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LocateIcon className="w-4 h-4" />
                      <span className="text-muted-foreground">0xmno...</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
              <div className="ml-auto">
                <Badge variant={false ? "secondary" : "outline"}>{false ? "Completed" : "In Progress"}</Badge>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button>View More</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <WalletIcon className="w-8 h-8" />
              <CardTitle>Check Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{true ? "true" : "false"}</div>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1">
                  <LocateIcon className="w-4 h-4" />
                  <span className="text-muted-foreground">0x123...</span>
                </div>
                <Badge variant={true ? "secondary" : "outline"}>{true ? "Active" : "Inactive"}</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <UserPlusIcon className="w-8 h-8" />
              <CardTitle>Add Worker</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="hours">Hours</Label>
                    <Input type="number" id="hours" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="expertise">Expertise</Label>
                    <Input type="number" id="expertise" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="min-wage">Min Wage</Label>
                    <Input type="number" id="min-wage" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="wallet">Wallet</Label>
                    <Input type="text" id="wallet" />
                  </div>
                  <Button type="submit">Add Worker</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function LayoutGridIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function TimerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>)
  );
}


function UserPlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>)
  );
}


function WalletIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>)
  );
}
