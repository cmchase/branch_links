const openBranchLink = ({subdomain, url, branch_name}) => {
  const parsed_url = url.replace(/{subdomain}/i, subdomain).replace(/{branch}/i, branch_name)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'window.open("' + parsed_url + '", "_blank")'}
    );
  });
}