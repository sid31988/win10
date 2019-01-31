

function InvokeAction(url, type, data) {
    var options = {};
    options.url = url; 
    options.type = type;
    options.data = data;
    $.ajax(options);
}


//$(document).on('click', '.save-btn', function () {
//    var panelId = $(this).data('actpanel');
//    leftBtnPanelAddOffAction();
//    freezePanel(panelId);
//});

//$(document).on('click', '.cancel-btn', function () {
//    var panelId = $(this).data('actpanel');
//    leftBtnPanelAddOffAction();
//    freezePanel(panelId);
//});


function addDataToTable(data, url, datatableID, type, panelname, table, hiddenArray, fromModal, modelID, rowTemplateName, rowInternalTemplateName) {
    if (typeof table === "undefined") table = null;
    if (typeof hiddenArray === "undefined") hiddenArray = [];
    if (typeof fromModal === "undefined") fromModal = false;
    if (typeof modelID === "undefined") modelID = '';
    if (typeof rowTemplateName === "undefined" || rowTemplateName.trim() == "") rowTemplateName = null;
    if (typeof rowInternalTemplateName === "undefined" || rowInternalTemplateName.trim() == "") rowInternalTemplateName = null;

    $('.loader').show();
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function (response) {
            // The below line has been commented since it removes the grid on subsequent add or multiple add operations.
            //table.destroy();
            var resdata = response.data;

            // Looks up each and every property of the Response Data, identifies the Date fields and handles date specific fields
            for (var key in resdata) {
                if (isDate(resdata[key])) {
                    var convertedDate = toJavaScriptDate(resdata[key]);
                    resdata[key] = formatDateString(convertedDate, GridDateFormat);
                }
            }

            // An additional check has been added so as to keep intact the existing forms functionality
            // The below new condition is applicable for the new form
            // Generates the row html on the basis of jQuery templating
            if (rowTemplateName != null) {
                var newRowInternalHtml = getHtmlFromTemplate(rowInternalTemplateName, resdata);
                var newRowHtml = getHtmlFromTemplate(rowTemplateName, { rowInternal: newRowInternalHtml });
                var $tbody = $('#' + datatableID).find('tbody');
                var $newRow = $(newRowHtml);
                $tbody.append($newRow);
                //$newRow.data("childdata", JSON.stringify(resdata)); -- This will set the data attribute, but will not be visible on outerHTML attribute
                $newRow.attr("data-childdata", JSON.stringify(resdata)); // This will set both the data attribute and will refresh the outerHTML attribute
            }
            else { // Generates the row html on the basis of string manipulation
                var htmlStr = '<tr class="tbl-row" data-childdata=\'' + JSON.stringify(resdata) + '\' data-actpanel="' + panelname + '">';
                for (var key in resdata) {
                    if (key != "CreatedDate" && key != "UpdatedDate" && key != "IsDeleted" && !hiddenArray.includes(key)) {
                        htmlStr += "<td>" + resdata[key] + "</td>";
                    }
                }
                //console.log('htmlStr - addDataToTable: ' + htmlStr);
                $('#' + datatableID).find('tbody').append(htmlStr + "</tr>");
            }

            table = $('#' + datatableID).DataTable();

            if (fromModal) {
                $('#' + modelID).modal('hide');
            }
            $('.loader').hide();
        }, error: function (err1, err2, err3) {
            console.log(err1, err2, err3);
            $('.loader').hide();

        }
    });
}

function editDataOfTable(data, url, datatableID, type, table, rowInternalTemplateName) {
    if (typeof table === "undefined") table = null;
    if (typeof rowInternalTemplateName === "undefined" || rowInternalTemplateName.trim() == "") rowInternalTemplateName = null;
    var $row = $('#' + datatableID + ' tbody').find('.selected-column');
    var changedData = $row.data("childdata");
    if (typeof changedData === "string") changedData = JSON.parse(changedData);
    for (var key in changedData) {
        var newData = data[key.toUpperCase()];
        changedData[key] = newData !== undefined ? newData : changedData[key];
    }
    $('.loader').show();
    $.ajax({
        url: url,
        type: type,
        data: changedData,
        success: function (response) {
            // The below line has been commented since it removes the grid on subsequent edit or multiple edit operations.
            // table.destroy();

            var resdata = response.data;

            var childData = {};
            for (var key in resdata) {
                if (isDate(resdata[key])) {
                    var convertedDate = toJavaScriptDate(resdata[key]);
                    resdata[key] = formatDateString(convertedDate, GridDateFormat);
                    childData[key] = formatDateString(convertedDate, ControlDateFormat);
                }
                else {
                    childData[key] = resdata[key];
                }
            }

            // An additional check has been added so as to keep intact the existing forms functionality
            // The below new code is applicable for both the existing as well as new forms
            // Generates the row html on the basis of jQuery templating
            if (!(rowInternalTemplateName == undefined || rowInternalTemplateName == null)) {
               
                var changedRow = getHtmlFromTemplate(rowInternalTemplateName, resdata);
                $row.html(changedRow);
                //$row.data("childdata", JSON.stringify(childData)); -- This will set the data attribute, but will not be visible on outerHTML attribute
                $row.attr("data-childdata", JSON.stringify(childData)); // This will set both the data attribute and will refresh the outerHTML attribute
            }
            else {
                // Some code has already been written for existing screens, kindly place it here, since the above code requires a template for each form
            }
            table = $('#' + datatableID).DataTable();
            var x = $(preIndex + " .selected-column");
            $('.loader').hide();
        },
        error: function (err1, err2, err3) {
            console.log(err1, err2, err3);
            $('.loader').hide();
        }
    });
}

function deleteDataOfTable(data, url, datatableID, type, table) {
    if (typeof table === "undefined") table = null;
    var $row = $('#' + datatableID + ' tbody').find('.selected-column');
    var deletedData = $row.data("childdata");

    $('.loader').show();
    $.ajax({
        url: url,
        type: type,
        data: deletedData,
        success: function (response) {
            // The below line has been commented since it removes the grid on subsequent edit or multiple edit operations.
            // table.destroy();

            var $row = $('#' + datatableID + ' tbody').find('.selected-column');
            table = $('#' + datatableID).DataTable();
            $row.remove();
            $('.loader').hide();
        },
        error: function (err1, err2, err3) {
            console.log(err1, err2, err3);
            $('.loader').hide();
        }
    });
}

function getHtmlFromTemplate(templateName, data) {
    var templateElement = $("#" + templateName);
    var templateHtml = templateElement.html();
    var finalHtml = templateHtml;
    for (var x in data) {
        finalHtml = replaceAll(finalHtml, "[" + x + "]", data[x]);
    }
    return finalHtml;
}