fetch('get_parking.php')
.then(res => res.json())
.then(data => {
    let output = '';

    data.forEach(p => {
        output += `
        <div>
            <h3>${p.location}</h3>
            <p>Available: ${p.available_slots}</p>
            <button onclick="book(${p.id})">Book</button>
        </div>
        `;
    });

    document.getElementById('parking-list').innerHTML = output;
});

function book(id) {
    fetch('book_slot.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'id=' + id
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);
        location.reload();
    });
}
