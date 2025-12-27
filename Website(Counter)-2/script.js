const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");

const countLabel = document.getElementById("countLabel");
let count = 0;

incBtn.onclick = function ()
{
    count++;
    countLabel.textContent = count;
}

decBtn.onclick = function ()
{
    count--;
    countLabel.textContent = count;
    if (count<0)
    {
        window.alert("Alert (counter < 0 ).")
        
    }
}

resetBtn.onclick = function ()
{
    count=0;
    countLabel.textContent = count;
}

