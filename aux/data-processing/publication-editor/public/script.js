// Publication Editor Frontend JavaScript

class PublicationEditor {
    constructor() {
        this.currentTab = 'high';
        this.validationData = null;
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Publication Editor...');
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Load validation data
        await this.loadValidationData();
        
        // Update UI
        this.updateStats();
        this.renderPublications();
        
        console.log('✅ Publication Editor ready!');
    }

    setupEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    async loadValidationData() {
        try {
            console.log('📥 Loading validation data...');
            
            const response = await fetch('/api/validation-data');
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            this.validationData = await response.json();
            console.log('✅ Validation data loaded:', this.validationData);
            
            // Hide loading spinner
            document.getElementById('loading').style.display = 'none';
            
        } catch (error) {
            console.error('❌ Error loading validation data:', error);
            this.showNotification('Failed to load validation data', 'error');
        }
    }

    updateStats() {
        if (!this.validationData) return;

        const totalElement = document.getElementById('total-count');
        const progressElement = document.getElementById('progress-fill');
        
        const total = this.validationData.total;
        const completed = this.validationData.summary.valid;
        const progressPercent = Math.round((completed / this.validationData.summary.total) * 100);
        
        totalElement.textContent = `${total} publications to review | ${completed} completed (${progressPercent}%)`;
        progressElement.style.width = `${progressPercent}%`;
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Show/hide tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(tabName).style.display = 'block';
        
        this.currentTab = tabName;
        console.log(`📑 Switched to ${tabName} priority tab`);
    }

    renderPublications() {
        if (!this.validationData) return;

        const categories = ['high', 'medium', 'low'];
        
        categories.forEach(category => {
            const listElement = document.getElementById(`${category}-list`);
            const publications = this.validationData.categories[category] || [];
            
            if (publications.length === 0) {
                listElement.innerHTML = `
                    <div class="empty-state">
                        <h3>🎉 All done!</h3>
                        <p>No ${category} priority publications need review.</p>
                    </div>
                `;
                return;
            }
            
            listElement.innerHTML = publications.map(pub => 
                this.createPublicationCard(pub, category)
            ).join('');
        });
        
        // Show the first tab
        this.switchTab('high');
    }

    createPublicationCard(publication, category) {
        const similarity = Math.round((publication.validation?.titleSimilarity || 0) * 100);
        const similarityClass = category === 'high' ? 'similarity-high' : 
                              category === 'medium' ? 'similarity-medium' : 'similarity-low';
        
        // Get original title from the publication data (fallback to truncated title)
        const originalTitle = publication.originalTitle || publication.title || 'Title not found';
        const crossrefTitle = publication.crossrefData?.title || 'Not available';
        const originalAuthors = publication.originalAuthors || publication.authors || 'Authors not found';
        const crossrefAuthors = publication.crossrefData?.authors || 'Not available';
        const journal = publication.crossrefData?.journal || 'Not available';
        const link = publication.originalLink || 'No link';

        return `
            <div class="publication-card" data-id="${publication.id}">
                <div class="publication-header">
                    <span class="publication-id">${publication.id}</span>
                    <span class="similarity-badge ${similarityClass}">${similarity}% similar</span>
                </div>
                
                <div class="publication-content">
                    <div class="comparison-section">
                        <div class="comparison-side current">
                            <div class="side-label">Current Data</div>
                            <div class="publication-title">${this.escapeHtml(originalTitle)}</div>
                            <div class="publication-authors">${this.escapeHtml(originalAuthors)}</div>
                            <div class="publication-link">${this.escapeHtml(link)}</div>
                        </div>
                        
                        <div class="comparison-side crossref">
                            <div class="side-label">Crossref Data</div>
                            <div class="publication-title">${this.escapeHtml(crossrefTitle)}</div>
                            <div class="publication-authors">${this.escapeHtml(crossrefAuthors)}</div>
                            <div class="publication-journal">${this.escapeHtml(journal)}</div>
                        </div>
                    </div>
                </div>
                
                <div class="publication-actions">
                    <button class="btn btn-accept" onclick="editor.acceptCrossref('${publication.id}')">
                        ✅ Accept Crossref
                    </button>
                    <button class="btn btn-edit" onclick="editor.editPublication('${publication.id}')">
                        ✏️ Edit Manually
                    </button>
                    <button class="btn btn-skip" onclick="editor.skipPublication('${publication.id}')">
                        ⏭️ Skip
                    </button>
                </div>
            </div>
        `;
    }

    async acceptCrossref(publicationId) {
        try {
            console.log(`✅ Accepting Crossref data for ${publicationId}...`);
            
            // Find the publication
            const publication = this.findPublicationById(publicationId);
            if (!publication) {
                throw new Error('Publication not found');
            }
            
            // Prepare updates from Crossref data
            const updates = {};
            if (publication.crossrefData?.title) {
                updates.title = publication.crossrefData.title;
            }
            if (publication.crossrefData?.authors) {
                updates.authors = publication.crossrefData.authors;
            }
            if (publication.crossrefData?.journal) {
                updates.journal = publication.crossrefData.journal;
            }
            
            // Send update request
            const response = await fetch('/api/update-publication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    publicationId: publicationId,
                    updates: updates,
                    originalLink: publication.originalLink
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            console.log('✅ Publication updated:', result);
            
            // Remove from UI
            this.removePublicationCard(publicationId);
            this.showNotification('Publication updated successfully!', 'success');
            
        } catch (error) {
            console.error('❌ Error accepting Crossref data:', error);
            this.showNotification('Failed to update publication', 'error');
        }
    }

    editPublication(publicationId) {
        console.log(`✏️ Editing publication ${publicationId}...`);
        
        const card = document.querySelector(`[data-id="${publicationId}"]`);
        const publication = this.findPublicationById(publicationId);
        
        if (!card || !publication) {
            this.showNotification('Publication not found', 'error');
            return;
        }
        
        // Get current values
        const originalTitle = publication.originalTitle || publication.title || '';
        const originalAuthors = publication.originalAuthors || publication.authors || '';
        const crossrefTitle = publication.crossrefData?.title || '';
        const crossrefAuthors = publication.crossrefData?.authors || '';
        
        // Create edit form
        const editForm = `
            <div class="edit-mode">
                <div class="edit-field">
                    <label>Title:</label>
                    <textarea id="edit-title-${publicationId}" placeholder="Enter corrected title...">${this.escapeHtml(originalTitle)}</textarea>
                    <small>Crossref suggests: "${this.escapeHtml(crossrefTitle)}"</small>
                </div>
                
                <div class="edit-field">
                    <label>Authors:</label>
                    <textarea id="edit-authors-${publicationId}" placeholder="Enter corrected authors...">${this.escapeHtml(originalAuthors)}</textarea>
                    <small>Crossref suggests: "${this.escapeHtml(crossrefAuthors)}"</small>
                </div>
                
                <div class="edit-actions">
                    <button class="btn btn-save" onclick="editor.saveEdit('${publicationId}')">💾 Save Changes</button>
                    <button class="btn btn-cancel" onclick="editor.cancelEdit('${publicationId}')">❌ Cancel</button>
                </div>
            </div>
        `;
        
        // Insert edit form
        const contentDiv = card.querySelector('.publication-content');
        contentDiv.insertAdjacentHTML('beforeend', editForm);
        
        // Hide action buttons
        card.querySelector('.publication-actions').style.display = 'none';
    }

    async saveEdit(publicationId) {
        try {
            console.log(`💾 Saving edits for ${publicationId}...`);
            
            const publication = this.findPublicationById(publicationId);
            if (!publication) {
                throw new Error('Publication not found');
            }
            
            // Get edited values
            const title = document.getElementById(`edit-title-${publicationId}`).value.trim();
            const authors = document.getElementById(`edit-authors-${publicationId}`).value.trim();
            
            if (!title) {
                this.showNotification('Title cannot be empty', 'error');
                return;
            }
            
            // Prepare updates
            const updates = { title };
            if (authors) updates.authors = authors;
            
            // Send update request
            const response = await fetch('/api/update-publication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    publicationId: publicationId,
                    updates: updates,
                    originalLink: publication.originalLink
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            console.log('✅ Publication updated:', result);
            
            // Remove from UI
            this.removePublicationCard(publicationId);
            this.showNotification('Publication updated successfully!', 'success');
            
        } catch (error) {
            console.error('❌ Error saving edits:', error);
            this.showNotification('Failed to save changes', 'error');
        }
    }

    cancelEdit(publicationId) {
        const card = document.querySelector(`[data-id="${publicationId}"]`);
        if (card) {
            // Remove edit form
            const editMode = card.querySelector('.edit-mode');
            if (editMode) editMode.remove();
            
            // Show action buttons
            card.querySelector('.publication-actions').style.display = 'flex';
        }
    }

    skipPublication(publicationId) {
        console.log(`⏭️ Skipping publication ${publicationId}...`);
        this.removePublicationCard(publicationId);
        this.showNotification('Publication skipped', 'success');
    }

    removePublicationCard(publicationId) {
        const card = document.querySelector(`[data-id="${publicationId}"]`);
        if (card) {
            card.style.transform = 'translateX(100%)';
            card.style.opacity = '0';
            setTimeout(() => {
                card.remove();
                this.checkEmptyStates();
            }, 300);
        }
    }

    checkEmptyStates() {
        ['high', 'medium', 'low'].forEach(category => {
            const listElement = document.getElementById(`${category}-list`);
            const cards = listElement.querySelectorAll('.publication-card');
            
            if (cards.length === 0) {
                listElement.innerHTML = `
                    <div class="empty-state">
                        <h3>🎉 All done!</h3>
                        <p>No ${category} priority publications need review.</p>
                    </div>
                `;
            }
        });
    }

    findPublicationById(publicationId) {
        if (!this.validationData) return null;
        
        const allPublications = [
            ...this.validationData.categories.high,
            ...this.validationData.categories.medium,
            ...this.validationData.categories.low
        ];
        
        return allPublications.find(pub => pub.id === publicationId);
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the editor when the page loads
let editor;
document.addEventListener('DOMContentLoaded', () => {
    editor = new PublicationEditor();
});