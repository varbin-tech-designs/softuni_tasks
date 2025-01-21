int digit1 = int.Parse(Console.ReadLine());
int digit2 = int.Parse(Console.ReadLine());
int digit3 = int.Parse(Console.ReadLine());
int digit4 = int.Parse(Console.ReadLine());

int validChanges = 0;

for (int k = digit1; k <= 8; k++)
{
    for (int l = 9; l >= digit2; l--)
    {
        for (int m = digit3; m <= 8; m++)
        {
            for (int n = 9; n >= digit4; n--)
            {
                if (k % 2 == 0 && l % 2 != 0 && m % 2 == 0 && n % 2 != 0)
                {
                    if (k == m && l == n)
                    {
                        Console.WriteLine("Cannot change the same player.");
                    }
                    else
                    {
                        Console.WriteLine($"{k}{l} - {m}{n}");
                        validChanges++;

                        if (validChanges == 6)
                        {
                            return;
                        }
                    }
                }
            }
        }
    }
}
