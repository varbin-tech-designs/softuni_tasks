string ticketType = Console.ReadLine();
int rows = int.Parse(Console.ReadLine());
int columns = int.Parse(Console.ReadLine());
double pricePerTicket = 0.0;

if (ticketType == "Premiere") pricePerTicket = 12;
else if (ticketType == "Normal") pricePerTicket = 7.5;
else if (ticketType == "Discount") pricePerTicket = 5;

int totalSeats = rows * columns;
double totalPrice = totalSeats * pricePerTicket;

Console.WriteLine($"{totalPrice:f2} leva");