int fee = int.Parse(Console.ReadLine());
double shoes = fee - (fee * 0.4);
double uniform = shoes - (shoes * 0.2);
double ball = uniform / 4;
double accesorios = ball / 5;

double totalPrice = shoes + uniform + ball + accesorios + fee;

Console.WriteLine(totalPrice);