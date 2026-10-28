const tictac = [
    ['x', null, null],
    [null, null, 'o'],
    ['o', null, 'x']
]

console.log(tictac)

for(let i = 0; i < tictac.length; i++)
{
    let row = ""
    for(let j = 0; j < tictac[i].length; j++)
    {
        let display = tictac[i][j] === null ? '-' : tictac[i][j]
        row += display + " "
    }
    console.log(row)
}