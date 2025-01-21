int hour = int.Parse(Console.ReadLine());
string day = Console.ReadLine();
string openClosed = "";

if (day == "Monday" || day == "Tuesday" || day == "Wednesday"
    || day == "Thursday" || day == "Friday" || day == "Saturday")
{
    if (hour >= 10 && hour <= 18) openClosed = "open";
    else openClosed = "closed";
}
else openClosed = "closed";

Console.WriteLine(openClosed);