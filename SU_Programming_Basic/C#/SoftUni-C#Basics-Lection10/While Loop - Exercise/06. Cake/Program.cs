int width = int.Parse(Console.ReadLine());
int length = int.Parse(Console.ReadLine());
string command = Console.ReadLine();
int cakeArea = width * length;

while (command != "STOP")
{
    int eatenPeaces = int.Parse(command);
    cakeArea -= eatenPeaces;

    if(cakeArea <= 0)
    {
        Console.WriteLine($"No more cake left! You need {Math.Abs(cakeArea)} pieces more.");
        return;
    }
    command = Console.ReadLine();
}
Console.WriteLine($"{cakeArea} pieces are left.");