string day = Console.ReadLine();
double pricePerTicket = 0.0;

switch(day)
{
    case "Monday":
    case "Tuesday":
    case "Friday":
        pricePerTicket = 12;
        break;
    case "Wednesday":
    case "Thursday":
        pricePerTicket = 14;
        break;
    case "Saturday":
    case "Sunday":
        pricePerTicket = 16;
        break;
}
Console.WriteLine(pricePerTicket);