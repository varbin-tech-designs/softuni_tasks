int n = int.Parse(Console.ReadLine());
int nextNum = 1;

while (nextNum <= n)
{
    Console.WriteLine(nextNum);
    nextNum = nextNum * 2 + 1;
}