import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CreditCard, DollarSign, Users, Send } from "lucide-react"
import { WeeklyActivityChart } from "@/components/weekly-activity-chart"
import { ExpenseStatisticsChart } from "@/components/expense-statistics-chart"
import { BalanceHistoryChart } from "@/components/balance-history-chart"

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 bg-[#f5f7fa]  !pl-[40px] !pt-[52px]">
      {/* My Cards Section */}
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">My Cards</h2>
          <button className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">See All</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Credit Card 1 */}
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div>
                  <p className="text-xs sm:text-sm opacity-80">Balance</p>
                  <p className="text-xl sm:text-2xl font-bold">$5,756</p>
                </div>
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/40"></div>
                </div>
              </div>

              <div className="flex justify-between items-end mb-3 sm:mb-4">
                <div>
                  <p className="text-xs opacity-80">CARD HOLDER</p>
                  <p className="text-xs sm:text-sm font-medium">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-xs opacity-80">VALID THRU</p>
                  <p className="text-xs sm:text-sm font-medium">12/22</p>
                </div>
              </div>

              <div className="text-base sm:text-lg font-mono tracking-wider">3778 **** **** 1234</div>
            </CardContent>
          </Card>

          {/* Credit Card 2 */}
          <Card className="bg-card border border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Balance</p>
                  <p className="text-xl sm:text-2xl font-bold text-card-foreground">$5,756</p>
                </div>
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted-foreground/20"></div>
                </div>
              </div>

              <div className="flex justify-between items-end mb-3 sm:mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">CARD HOLDER</p>
                  <p className="text-xs sm:text-sm font-medium text-card-foreground">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">VALID THRU</p>
                  <p className="text-xs sm:text-sm font-medium text-card-foreground">12/22</p>
                </div>
              </div>

              <div className="text-base sm:text-lg font-mono tracking-wider text-card-foreground">
                3778 **** **** 1234
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transaction */}
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">Recent Transaction</h2>
        </div>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-card-foreground">Deposit from my Card</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">28 January 2021</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-semibold text-card-foreground">-$850</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-card-foreground">Deposit Paypal</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">25 January 2021</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-semibold text-green-600">+$2,500</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-card-foreground">Jemi Wilson</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">21 January 2021</p>
                  </div>
                </div>
                <span className="text-sm sm:text-base font-semibold text-green-600">+$5,400</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Charts */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          {/* Weekly Activity */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <WeeklyActivityChart />
            </CardContent>
          </Card>

          {/* Balance History */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Balance History</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <BalanceHistoryChart />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Statistics and Quick Transfer */}
        <div className="space-y-4 sm:space-y-6">
          {/* Expense Statistics */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Expense Statistics</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ExpenseStatisticsChart />
            </CardContent>
          </Card>

          {/* Quick Transfer */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg font-semibold text-foreground">Quick Transfer</CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0 space-y-3 sm:space-y-4">
              {/* User Avatars */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/professional-woman-diverse.png" />
                  <AvatarFallback>LB</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/professional-man.png" />
                  <AvatarFallback>RP</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                  <AvatarImage src="/diverse-business-person.png" />
                  <AvatarFallback>WM</AvatarFallback>
                </Avatar>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-dashed border-muted-foreground"
                >
                  <span className="text-xl sm:text-2xl text-muted-foreground">+</span>
                </Button>
              </div>

              <div className="text-center space-y-1">
                <p className="text-xs sm:text-sm font-medium text-card-foreground">Livia Bator</p>
                <p className="text-xs text-muted-foreground">CEO</p>
              </div>

              {/* Transfer Form */}
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <label className="text-xs sm:text-sm text-muted-foreground">Write Amount</label>
                  <Input placeholder="525.50" className="mt-1 h-10 sm:h-auto" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-auto">
                  <span>Send</span>
                  <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
