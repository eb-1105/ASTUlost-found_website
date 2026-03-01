document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filterForm');
    const resultsGrid = document.querySelector('.results-grid');

    function renderItems(filteredItems) {
        resultsGrid.innerHTML = ''; // Clear current results

        if (filteredItems.length === 0) {
            resultsGrid.innerHTML = '<p>No items found matching your criteria.</p>';
            return;
        }

        filteredItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <div class="item-img">No Image Provided</div>
                <div class="item-info">
                    <span class="status-tag ${item.type === 'lost' ? 'status-lost' : 'status-found'}">
                        ${item.type}
                    </span>
                    <h4>${item.name}</h4>
                    <p><small>Location: ${item.location}</small></p>
                    <p><small>Date: ${item.date}</small></p>
                    <button class="button" style="padding: 5px 10px; font-size: 0.8rem;">
                        ${item.type === 'lost' ? 'View Details' : 'Claim Item'}
                    </button>
                </div>
            `;
            resultsGrid.appendChild(card);
        });
    }

    // Initial render
    renderItems(items);

    // Filter Logic
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const keyword = filterForm.querySelector('input[type="text"]').value.toLowerCase();
        const type = filterForm.querySelectorAll('select')[0].value;
        const category = filterForm.querySelectorAll('select')[1].value;
        const dateSince = filterForm.querySelector('input[type="date"]').value;

        const filtered = items.filter(item => {
            const matchesKeyword = item.name.toLowerCase().includes(keyword);
            const matchesType = type === 'all' || item.type === type;
            const matchesCategory = category === 'All Categories' || item.category === category;
            const matchesDate = !dateSince || new Date(item.date) >= new Date(dateSince);

            return matchesKeyword && matchesType && matchesCategory && matchesDate;
        });

        renderItems(filtered);
    });
});