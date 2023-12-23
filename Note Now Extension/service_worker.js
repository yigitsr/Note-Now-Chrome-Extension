window.onload = load();
document.getElementById("buttonSave").addEventListener("click",buttonSave);
document.getElementById("buttonRemove").addEventListener("click",buttonRemove);

// Functions

    function load()
    {
        var storedValue = localStorage.getItem('text');
        if(storedValue)
        {
            document.getElementById('note').value = storedValue;
        }
    }

    function buttonSave()
    {
        var fieldValue = document.getElementById('note').value;
        localStorage.setItem('text',fieldValue);
        alert("notes saved");
        
    }

    function buttonRemove()
    {
        document.getElementById('note').value = '';
        localStorage.removeItem('text');
        alert("notes deleted");
    }