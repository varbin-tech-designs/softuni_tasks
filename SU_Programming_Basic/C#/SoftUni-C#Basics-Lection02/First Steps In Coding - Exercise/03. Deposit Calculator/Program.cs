double deposit = double.Parse(Console.ReadLine());
int term = int.Parse(Console.ReadLine());
double interest = double.Parse(Console.ReadLine()) / 100;

double sum = deposit + term * ((deposit * interest) / 12);

Console.WriteLine(sum);