function openModal(src, alt) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('img01').src = src;
    document.getElementById('caption').innerText = alt;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
}
