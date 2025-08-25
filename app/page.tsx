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

      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-3">
        {/* Credit Card 1 */}
        <div className="h-full">
          <div className="flex items-center justify-between h-[50px] mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-[22px] font-[600] text-[#343C6A]">
              My Cards
            </h2>
          </div>
          <Card className="bg-gradient-to-r rounded-[25px]  from-[#4C49ED] to-[#0A06F4] border-0">
            <CardContent className=" w-full !p-0 flex flex-col items-start justify-between">
              <div className="flex px-4 py-2 w-full flex-col items-start">
                <div className="flex w-full justify-between items-start mb-6 ">
                  <div>
                    <p className="text-xs text-white ">Balance</p>
                    <p className="text-[14px] sm:text-[20px] font-[600] text-white">
                      $5,756
                    </p>
                  </div>
                  <img
                    src="/Chip_Card.png"
                    alt="Chip Card"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>

                <div className="flex w-full justify-between items-end mb-3">
                  <div>
                    <p className="text-[12px] font-[400] text-white">
                      CARD HOLDER
                    </p>
                    <p className="text-[15px] font-[600] text-white">
                      Eddy Cusuma
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-[400] text-white">
                      VALID THRU
                    </p>
                    <p className="text-[15px] font-[600] text-white">12/22</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center border-0 border-t border-solid border-gray-100  w-full px-4 py-2 bg-">
                <div className="text-base sm:text-[22px] font-[600] text-white font-mono tracking-wider">
                  3778 **** **** 1234
                </div>
                <img
                  src="/visa.png"
                  alt="visa "
                  className="w-[44px] h-[30px] object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credit Card 2 */}
        <div className="flex flex-col items-end w-full">
          <div className="flex items-center justify-between h-[50px] mb-3 sm:mb-4">
            <h2 className="text-[14px] sm:text-[17px] font-[600] text-[#343C6A]">
              {" "}
              See All
            </h2>
          </div>

          <Card className="bg-white rounded-[25px]  border w-full border-border">
            <CardContent className=" w-full !p-0 flex flex-col items-start justify-between">
              <div className="flex px-4 py-2 w-full flex-col items-start">
                <div className="flex w-full justify-between items-start mb-6 ">
                  <div>
                    <p className="text-xs text-[#718EBF] ">Balance</p>
                    <p className="text-[14px] sm:text-[20px] font-[600] text-[#343C6A]">
                      $5,756
                    </p>
                  </div>
                  <img
                    src="/Chip_Card2.png"
                    alt="Chip Card"
                    className="w-[36px] h-[36px] object-contain"
                  />
                </div>

                <div className="flex w-full justify-between items-end mb-3">
                  <div>
                    <p className="text-[12px] font-[400] text-[#718EBF]">
                      CARD HOLDER
                    </p>
                    <p className="text-[15px] font-[600] text-[#343C6A]">
                      Eddy Cusuma
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] font-[400] text-[#718EBF]">
                      VALID THRU
                    </p>
                    <p className="text-[15px] font-[600] text-[#343C6A]">
                      12/22
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center border-0 border-t border-solid border-gray-100  w-full px-4 py-2 bg-">
                <div className="text-base sm:text-[22px] font-[600] text-[#343C6A] font-mono tracking-wider">
                  3778 **** **** 1234
                </div>
                <img
                  src="/visa2.png"
                  alt="visa"
                  className="w-[44px] h-[30px] object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Recent Transaction */}
        <div className="h-full">
          <div className="flex items-center justify-between h-[50px] mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-[22px] font-[600] text-[#343C6A]">
              Recent Transaction
            </h2>
          </div>

          <Card className="bg-white !p-0 rounded-[25px] border w-full border-border">
            <CardContent className="p-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="sm:w-[55px] sm:h-[55px] w-10 h-10 rounded-full bg-[#FFF5D9] flex items-center justify-center">
                      <img
                        src="/deposit.png"
                        alt="deposit"
                        className="w-[22px] h-[17px] object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-medium text-[#232323]">
                        Deposit from my Card
                      </p>
                      <p className="text-xs sm:text-[15px] text-[#718EBF]">
                        28 January 2021
                      </p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-[16px] font-[500] text-[#FF4B4A]">
                    -$850
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="sm:w-[55px] sm:h-[55px] w-10 h-10 rounded-full bg-[#E7EDFF] flex items-center justify-center">
                      <img
                        src="/paypal.png"
                        alt="paypal"
                        className="w-[20px] h-[22px] object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-[500] text-[#232323]">
                        Deposit Paypal
                      </p>
                      <p className="text-xs sm:text-[15px] text-[#718EBF]">
                        25 January 2021
                      </p>
                    </div>
                  </div>
                  <span className="text-sm sm:text-[16px] font-[500] text-[#41D4A8]">
                    +$2,500
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="sm:w-[55px] sm:h-[55px] w-10 h-10 rounded-full bg-[#DCFAF8] flex items-center justify-center">
                      <img
                        src="/dolar.png"
                        alt="dolar"
                        className="w-[25px] h-[25px] object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-[500] text-card-foreground">
                        Jemi Wilson
                      </p>
                      <p className="text-xs sm:text-[15px] text-[#718EBF]">
                        21 January 2021
                      </p>
                    </div>
                  </div>
                  <span className="text-sm sm:sm:text-[16px] font-[500] text-[#41D4A8]">
                    +$5,400
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    <p className="text-[16px] font-[500] text-[#232323]">
                      Livia Bator
                    </p>
                    <p className="text-[15px] text-[#718EBF]">CEO</p>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                      <AvatarImage src="/professional-man.png" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <p className="text-[16px]  text-[#232323]">Randy Press</p>
                    <p className="text-[15px] text-[#718EBF]">Director</p>
                  </div>

                  <div className="flex flex-col items-center space-y-1">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                      <AvatarImage src="/diverse-business-person.png" />
                      <AvatarFallback>WM</AvatarFallback>
                    </Avatar>
                    <p className="text-[16px]  text-[#232323]">Workman</p>
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
