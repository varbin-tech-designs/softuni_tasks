﻿int points = int.Parse(Console.ReadLine());

double bonus = 0;

if (points <= 100)
{
    bonus = 5;
}
else if (points <= 1000)
{
    bonus = points * 0.2;
}
else
{
    bonus = points * 0.1;
}

if (points % 2 == 0)
{
    bonus += 1;
}
else if (points % 10 == 5)
{
    bonus += 2;
}

double totalPoints = points + bonus;

Console.WriteLine(bonus);
Console.WriteLine(totalPoints);
