fileinput.addEventListener('change', function(event) {
    let output = document.getElementById("listing");
    let files = event.target.files;
    let sortedFiles = Array.from(files).sort((a, b) => a.name.localeCompare(b.name))

    if (sortedFiles.length > 0) {

        document.getElementById("help").innerText = "";

        output.innerHTML += "<tr><th>File Name</th><th>File Size</th></tr>"
        for (var i = 0; i < sortedFiles.length; i++) {
            if (sortedFiles[i].size < 1000)
                output.innerHTML += "<tr> <td>" + sortedFiles[i].name + " </td><td >" + sortedFiles[i].size + " bytes </td></tr > ";
            else if (sortedFiles[i].size >= 1000 && sortedFiles[i].size < 1000000)
                output.innerHTML += "<tr> <td>" + sortedFiles[i].name + " </td><td >" + sortedFiles[i].size / 1000 + " kB </td></tr > ";
            else if (sortedFiles[i].size >= 1000000 && sortedFiles[i].size < 1000000000)
                output.innerHTML += "<tr> <td>" + sortedFiles[i].name + " </td><td >" + sortedFiles[i].size / 1000000 + " MB</td></tr > ";
            else if (sortedFiles[i].size >= 1000000000 && sortedFiles[i].size < 1000000000000)
                output.innerHTML += "<tr> <td>" + sortedFiles[i].name + " </td><td >" + sortedFiles[i].size / 1000000000 + " GB </td></tr > ";
            else if (sortedFiles[i].size >= 1000000000000)
                output.innerHTML += "<tr> <td>" + sortedFiles[i].name + " </td><td >" + sortedFiles[i].size / 1000000000000 + " TB </td></tr > ";
        }
    }
})