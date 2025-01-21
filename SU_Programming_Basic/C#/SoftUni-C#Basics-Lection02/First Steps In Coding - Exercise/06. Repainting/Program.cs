int plastic = int.Parse(Console.ReadLine());
int paint = int.Parse(Console.ReadLine());
int thinner = int.Parse(Console.ReadLine());
int hours = int.Parse(Console.ReadLine());

double totalPrice = (plastic + 2) * 1.5 + (paint + (paint * 0.1)) * 14.5 + thinner * 5 + 0.4;
double pricePerHour = totalPrice * 0.3;
double finalPrice = totalPrice + pricePerHour * hours;

Console.WriteLine(finalPrice);

