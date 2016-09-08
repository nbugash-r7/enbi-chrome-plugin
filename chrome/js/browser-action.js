/**
 * Created by nbugash on 2016-09-06.
 */

function validateApp() {
    var createData = {
        url: 'module/validate/validate.html',
        focused: true,
        type: 'popup',
        height: 95,
        width: 345
    };
    chrome.windows.create(createData, function(window) {
        console.log(createData.url + " created");
    });
}
document.getElementById('validate').addEventListener('click', validateApp);