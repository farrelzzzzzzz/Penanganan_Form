document.getElementById('formbiodata').addEventListener('mouseenter', function() {
    document.body.classList.remove('blur');
    this.classList.add('blur');
});

document.getElementById('formbiodata').addEventListener('mouseleave', function() {
    document.body.classList.add('blur');
    this.classList.remove('blur');
});

// Initial blur when the page loads
document.body.classList.add('blur');
