function calculateSupply()
{
    var age =0;
    var amount_per_day=0;
    const max_age=100;
    var consum = 0;
    if (age)
    {
        consum = age * 365 * amount_per_day;
        document.write("You will need ${consum} to last you until the ripe old age of ${age}");
    }
}
calculateSuplly();