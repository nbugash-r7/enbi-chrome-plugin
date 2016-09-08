/**
 * Created by nbugash on 2016-09-06.
 */
function save_options() {
    chrome.storage.sync.set({
        function_as: document.getElementById('function_as').value
    });
}

function restore_options() {
    chrome.storage.sync.get('function_as', function(obj) {
        document.getElementById('function_as').value = obj.function_as;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('function_as').addEventListener('change', save_options);