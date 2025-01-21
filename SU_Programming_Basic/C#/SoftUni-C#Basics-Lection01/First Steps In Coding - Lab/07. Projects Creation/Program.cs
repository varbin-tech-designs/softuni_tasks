string name = Console.ReadLine();
int projects = int.Parse(Console.ReadLine());

int totalHours = projects * 3;

Console.WriteLine($"The architect {name} will need {totalHours} hours to complete {projects} project/s.");