int paper = int.Parse(Console.ReadLine());
int cloth = int.Parse(Console.ReadLine());
double glue = double.Parse(Console.ReadLine());
int discount = int.Parse(Console.ReadLine());

double totalBill = paper * 5.8 + cloth * 7.2 + glue * 1.2;
double finalDiscount = totalBill * discount / 100;
totalBill -= finalDiscount;
Console.WriteLine($"{totalBill:f3}");