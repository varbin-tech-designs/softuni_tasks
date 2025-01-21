int pens = int.Parse(Console.ReadLine());
int marker = int.Parse(Console.ReadLine());
int detergent = int.Parse(Console.ReadLine());
int discount = int.Parse(Console.ReadLine());

double totalPrice = pens * 5.80 + marker * 7.20 + detergent * 1.20;
double finalPrice = totalPrice - (totalPrice * discount / 100);

Console.WriteLine(finalPrice);