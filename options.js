const sharefileSubdomain = document.getElementById('sharefileSubdomain');
const workspaceCustomer = document.getElementById('workspaceCustomer');
const button = document.getElementById('saveSubdomains');

chrome.storage.sync.get('subdomains', function(data) {
  sharefileSubdomain.setAttribute('value', data.subdomains.sharefile);
  workspaceCustomer.setAttribute('value', data.subdomains.workspace);
});

[sharefileSubdomain, workspaceCustomer].forEach(input => {
  input.addEventListener('keyup', ()=> {
    button.removeAttribute('class')
  })
});

button.addEventListener('click', () => {
  chrome.storage.sync.set({subdomains: {
    sharefile: document.getElementById('sharefileSubdomain').value,
    workspace: document.getElementById('workspaceCustomer').value
  }}, () => {
    button.setAttribute('class', 'disabled')
  })
});