import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CreditCard,
  DollarSign,
  Users,
  Send,
  ChevronRight,
} from "lucide-react";
import { WeeklyActivityChart } from "@/components/weekly-activity-chart";
import { ExpenseStatisticsChart } from "@/components/expense-statistics-chart";
import { BalanceHistoryChart } from "@/components/balance-history-chart";

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 bg-[#f5f7fa] py-8 !pl-[40px] !pt-[52px]">
      {/* My Cards Section */}
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">
            My Cards
          </h2>
          <button className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
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

              <div className="text-base sm:text-lg font-mono tracking-wider">
                3778 **** **** 1234
              </div>
            </CardContent>
          </Card>

          {/* Credit Card 2 */}
          <Card className="bg-card border border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Balance
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-card-foreground">
                    $5,756
                  </p>
                </div>
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted-foreground/20"></div>
                </div>
              </div>

              <div className="flex justify-between items-end mb-3 sm:mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">CARD HOLDER</p>
                  <p className="text-xs sm:text-sm font-medium text-card-foreground">
                    Eddy Cusuma
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">VALID THRU</p>
                  <p className="text-xs sm:text-sm font-medium text-card-foreground">
                    12/22
                  </p>
                </div>
              </div>

              <div className="text-base sm:text-lg font-mono tracking-wider text-card-foreground">
                3778 **** **** 1234
              </div>
            </CardContent>
          </Card>
          {/* Recent Transaction */}
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Recent Transaction
              </h2>
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
                        <p className="text-sm sm:text-base font-medium text-card-foreground">
                          Deposit from my Card
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          28 January 2021
                        </p>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-card-foreground">
                      -$850
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-medium text-card-foreground">
                          Deposit Paypal
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          25 January 2021
                        </p>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-green-600">
                      +$2,500
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-medium text-card-foreground">
                          Jemi Wilson
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          21 January 2021
                        </p>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-green-600">
                      +$5,400
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4  items-stretch sm:gap-6">
        {/* Left Column - Charts */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6 h-full">
          <div className="flex  flex-col items-start gap-8 ">
            <p className="text-base sm:text-[22px] font-[600] text-[#343C6A]">
              Weekly Activity
            </p>
            <WeeklyActivityChart />
          </div>
        </div>
        {/* Right Column - Statistics and Quick Transfer */}
        <div className="space-y-4 sm:space-y-6 h-full">
          {/* Expense Statistics */}
          <div className="flex  flex-col items-start gap-8  h-full">
            <p className="text-base sm:text-[22px] font-[600] text-[#343C6A]">
              Expense Statistics
            </p>
            <ExpenseStatisticsChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 items-stretch gap-4 ">
        <div className=" xl:col-span-5 space-y-4 sm:space-y-6 h-full">
          {/* Quick Transfer */}
          <div className="flex  flex-col items-start w-full gap-8 h-full">
            <p className="text-base sm:text-[22px] font-[600] text-[#343C6A]">
              Quick Transfer
            </p>
            <Card className="bg-white rounded-2xl w-full shadow-sm h-88 ">
              <CardContent className="p-3 sm:p-6 flex flex-col items-start justify-between pt-0 space-y-4 h-full">
                {/* User Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center space-y-1">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14 ring-2 ring-primary">
                      <AvatarImage src="/professional-woman-diverse.png" />
                      <AvatarFallback>LB</AvatarFallback>
                    </Avatar>
                    <p className="text-[16px] font-medium text-[#232323]">
                      Livia Bator
                    </p>
                    <p className="text-[15px] text-[#718EBF]">CEO</p>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                      <AvatarImage src="/professional-man.png" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <p className="text-[16px]  text-[#232323]">
                      Randy Press
                    </p>
                    <p className="text-[15px] text-[#718EBF]">Director</p>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                      <AvatarImage src="/diverse-business-person.png" />
                      <AvatarFallback>WM</AvatarFallback>
                    </Avatar>
                    <p className="text-[16px]  text-[#232323]">
                      Workman
                    </p>
                    <p className="text-[15px] text-[#718EBF]">Designer</p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 shadow-md hover:bg-white rounded-full bg-white"
                  >
                    <ChevronRight className="text-primary" />
                  </Button>
                </div>

                {/* Transfer Form */}
                <div className="flex items-center w-full gap-2 sm:gap-3 ">
                  <p className="text-base w-[180px]  font-[400] text-[#718EBF]">
                    Write Amount
                  </p>
                  <div className="bg-[#edf1f7] flex items-center px-4 justify-start text-[#718EBF] text-[16px] h-[50px] rounded-[50px] w-full relative ">
                    {" "}
                    525.50
                    <Button className="bg-[#0047FF] w-[125px] absolute top-0 right-0 hover:bg-[#0036CC] text-white h-[50px]  px-6 rounded-[40px] flex items-center">
                      <span>Send</span>
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Balance History */}
        <div className="xl:col-span-7 space-y-4 sm:space-y-6 h-full">
          <div className="flex  flex-col items-start gap-8 h-full">
            <p className="text-base sm:text-[22px] font-[600] text-[#343C6A]">
              Balance History
            </p>
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    </div>
  );
}
