document.body.onload = function() {
    chrome.storage.sync.get("autofillData", function(items) {
    	document.getElementById("selectedcard").innerHTML += items.autofillData[13];
        for (i in items["autofillData"]) {
            if (!items["autofillData"][i]) {
                document.getElementsByTagName("input")[i].value = "";
            } else {
                document.getElementsByTagName("input")[i].value = items.autofillData[i];
            }
        };
    });
}

document.getElementById("save").addEventListener("click", function() {
    chrome.storage.sync.set({
        'autofillData': [document.getElementById("firstname").value, document.getElementById("lastname").value,
            document.getElementById("address").value, document.getElementById("apt").value, document.getElementById("state").value,
            document.getElementById("zipcode").value, document.getElementById("city").value, document.getElementById("phone").value,
            document.getElementById("email").value, document.getElementById("CCNumber").value, document.getElementById("ExpMonth").value,
            document.getElementById("ExpYear").value, document.getElementById("CCV").value, document.getElementById("supremecard").value
        ]
    });
    document.getElementById("saved").innerHTML = "Saved!";
    document.getElementById("selectedcard").innerHTML = "Selected Card: " + document.getElementById("supremecard").value;
});