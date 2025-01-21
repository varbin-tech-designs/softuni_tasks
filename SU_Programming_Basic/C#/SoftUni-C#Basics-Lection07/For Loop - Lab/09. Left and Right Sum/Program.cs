int n = int.Parse(Console.ReadLine());

int sumLeft = 0;
int sumRight = 0;

for (int i = 0; i < n; i++)
{
    int num = int.Parse(Console.ReadLine());
    sumLeft += num;
}
for (int i = 0; i < n; i++)
{
    int num = int.Parse(Console.ReadLine());
    sumRight += num;
}
if (sumLeft == sumRight)
    Console.WriteLine($"Yes, sum = {sumLeft}");
else
    Console.WriteLine($"No, diff = {Math.Abs(sumLeft - sumRight)}");