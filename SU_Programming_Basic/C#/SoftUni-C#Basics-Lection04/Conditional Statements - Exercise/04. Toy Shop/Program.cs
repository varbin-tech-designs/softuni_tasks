double excursionPrice = double.Parse(Console.ReadLine());
int puzzleCount = int.Parse(Console.ReadLine());
int dollCount = int.Parse(Console.ReadLine());
int bearsCount = int.Parse(Console.ReadLine());
int minionsCount = int.Parse(Console.ReadLine());
int trucksCount = int.Parse(Console.ReadLine());

int totalCount = puzzleCount + dollCount + bearsCount + minionsCount + trucksCount;

double puzzlePrice = 2.6;
double dollPrice = 3.0;
double bearsPrice = 4.1;
double minionsPrice = 8.2;
double trucksPrice = 2.0;

double totalPrice = puzzlePrice * puzzleCount + dollPrice * dollCount + bearsPrice * bearsCount + minionsPrice * minionsCount + trucksPrice * trucksCount;

if (totalCount > 50)
{
    totalPrice *= 0.75;
}

double rent = totalPrice * 0.1;
double finalBill = totalPrice - rent;

if (finalBill >= excursionPrice)
{
    double remainingMoney = finalBill - excursionPrice;
    Console.WriteLine($"Yes! {remainingMoney:f2} lv left.");
}
else
{
    double neededMoney = excursionPrice - finalBill;
    Console.WriteLine($"Not enough money! {neededMoney:f2} lv needed.");
}