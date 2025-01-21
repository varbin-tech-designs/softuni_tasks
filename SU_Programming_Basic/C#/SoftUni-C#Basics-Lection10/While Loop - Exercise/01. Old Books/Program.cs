string searchedBook = Console.ReadLine();
string book = Console.ReadLine();
int bookCount = 0;

while (book != "No More Books")
{
    if (book == searchedBook)
    {
        Console.WriteLine($"You checked {bookCount} books and found it.");
        return;
    }
    bookCount++;
    book = Console.ReadLine();

}
Console.WriteLine($"The book you search is not here!");
Console.WriteLine($"You checked {bookCount} books.");