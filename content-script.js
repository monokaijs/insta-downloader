console.log("InstaDownloader Content Script loaded...");

const insertScript = (pathOrCode, isPath = true) => {
  let newScript = window.document.createElement('script');
  if (isPath) newScript.src = chrome.runtime.getURL(pathOrCode);
  if (!isPath) newScript.innerText = pathOrCode;
  newScript.onload = function () {
    window.document.body.removeChild(newScript);
  };
  let doc = window.document.body || window.document.head || window.document.documentElement;
  doc.appendChild(newScript);
}

insertScript('./injected-script.js');

