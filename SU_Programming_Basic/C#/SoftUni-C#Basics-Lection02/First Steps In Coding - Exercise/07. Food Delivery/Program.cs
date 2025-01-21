int chickenMenu = int.Parse(Console.ReadLine());
int fishMenu = int.Parse(Console.ReadLine());
int vegMenu = int.Parse(Console.ReadLine());

double totalPrice = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
double dessert = totalPrice * 0.2;
double finalPrice = totalPrice + dessert + 2.50;

Console.WriteLine(finalPrice);