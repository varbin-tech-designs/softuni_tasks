double age = double.Parse(Console.ReadLine());
char gender = char.Parse(Console.ReadLine());
string title = "";

if (age >= 16)
{
    switch(gender)
    {
        case 'm':
            title = "Mr.";
            break;
        case 'f':
            title = "Ms.";
            break;
    }
}
else
{
    switch (gender)
    {
        case 'm':
            title = "Master";
            break;
        case 'f':
            title = "Miss";
            break;
    }
}
Console.WriteLine(title);