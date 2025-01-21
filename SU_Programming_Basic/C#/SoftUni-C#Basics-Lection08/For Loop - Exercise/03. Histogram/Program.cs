int n = int.Parse(Console.ReadLine());

int counterP1 = 0;
int counterP2 = 0;
int counterP3 = 0;
int counterP4 = 0;
int counterP5 = 0;

for (int i = 0; i < n; i++)
{
    int num = int.Parse(Console.ReadLine());

    if (num < 200) counterP1++;
    else if (num < 400) counterP2++;
    else if (num < 600) counterP3++;
    else if (num < 800) counterP4++;
    else counterP5++;
}
Console.WriteLine($"{(double)counterP1 / n * 100:f2}%");
Console.WriteLine($"{(double)counterP2 / n * 100:f2}%");
Console.WriteLine($"{(double)counterP3 / n * 100:f2}%");
Console.WriteLine($"{(double)counterP4 / n * 100:f2}%");
Console.WriteLine($"{(double)counterP5 / n * 100:f2}%");