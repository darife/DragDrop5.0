(function() {
    /*function $id(id) {
    	return document.getElementById(id);
    }*/

    //recurso 1 - arrow function JS6
    $id = (id) => { return document.getElementById(id) };


    function Output(msg) {
        //uso de let JS6
        let m = $id("div__messages");
        m.innerHTML = msg + m.innerHTML;
    }

    function FileDragHover(e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == "dragover" ? "hover" : "");
    }
    // Seleção do arquivo
    function FileSelectHandler(e) {
        FileDragHover(e);
        var files = e.target.files || e.dataTransfer.files;
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }
    }
    // Exibindo informações do arquivo
    // uso do Map() ES6
    function ParseFile(file) {
        var mymap = new Map();
        var strInfo = "Informacao ",
            tipoFile = " Tipo ",
            tamFile = " Tamanho ";
        mymap.set(strInfo, "do arquivo ");
        mymap.set(tipoFile, "do arquivo ");
        mymap.set(tamFile, "do arquivo ");
        Output(
            "<p>" + strInfo + mymap.get(strInfo) + " <strong>" + file.name +
            "</strong>" + tipoFile + mymap.get(tipoFile) + "<strong>" + file.type +
            "</strong>" + tamFile + mymap.get(tamFile) + "<strong>" + file.size + "</strong> bytes</p>");
    }
    /*
    Output(
    	"<p>Informacao sobre o arquivo: <strong>" + file.name +
    	"</strong> tipo: <strong>" + file.type +
    	"</strong> tamanho: <strong>" + file.size +
    	"</strong> bytes</p>"
    );
    */

    // Inicializando
    function Init() {
        var fileselect = $id("button__fileselect"),
            filedrag = $id("div__filedrag"),
            submitbutton = $id("submitbutton");

        // Seleção do arquivo
        fileselect.addEventListener("change", FileSelectHandler, false);

        //var xhr = new XMLHttpRequest();
        //Uso do Const ES6
        const xhr = new XMLHttpRequest();
        if (xhr.upload) {
            // soltando o arquivo
            filedrag.addEventListener("dragover", FileDragHover, false);
            filedrag.addEventListener("dragleave", FileDragHover, false);
            filedrag.addEventListener("drop", FileSelectHandler, false);
            filedrag.style.display = "block";
        }
    }
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }

})();