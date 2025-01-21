﻿int hours = int.Parse(Console.ReadLine());
int minutes = int.Parse(Console.ReadLine()) + 15;

if (minutes >= 60)
{
    minutes -= 60;
    hours++;
}
if (hours >= 24)
{
    hours = 0;
}
if (minutes < 10)
{
    Console.WriteLine($"{hours}:0{minutes}");
}
else
{
    Console.WriteLine($"{hours}:{minutes}");
}
