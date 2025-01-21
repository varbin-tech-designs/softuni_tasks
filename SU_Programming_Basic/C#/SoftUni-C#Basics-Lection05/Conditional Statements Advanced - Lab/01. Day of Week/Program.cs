int dayNum = int.Parse(Console.ReadLine());
string day = "";

if (dayNum == 1)
{
    day = "Monday";
}
else if (dayNum == 2)
{
    day = "Tuesday";
}
else if (dayNum == 3)
{
    day = "Wednesday";
}
else if (dayNum == 4)
{
    day = "Thursday";
}
else if (dayNum == 5)
{
    day = "Friday";
}
else if (dayNum == 6)
{
    day = "Saturday";
}
else if (dayNum == 7)
{
    day = "Sunday";
}
else
{
    day = "Error";
}

Console.WriteLine(day);