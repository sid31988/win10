const Columns = [
    { data: "Date", render: renderDate },
    { data: "Issuer" },
    { data: "Curr" },
    { data: "Prefix" },
    { data: "StartNo" },
    { data: "Nos" },
    { data: "EndNo" },
    { data: "Deno" },
    { data: "Value" },
    { data: null, className: "center", render: renderEditDeleteCommands }
];
const DateFormat = "MM-dd-yyyy";

let $editDeleteCommandTemplate = null;
let $receiverTrustTable = null;
let receiverTrustDataTable = null;

function initialisePage(receiverTrustTableSelector, findUrl, editDeleteCommandTemplateSelector) {
    $receiverTrustTable = $(receiverTrustTableSelector);
    $editDeleteCommandTemplate = $(editDeleteCommandTemplateSelector);
    receiverTrustDataTable = $receiverTrustTable.DataTable({
        columns: Columns,
        ajax: findUrl
    });
    debugger;
    $(".editor_edit").off("click").on("click", function (ev) {

    });
}

function renderEditDeleteCommands(data, type, row, meta) {
    if (type !== "display") return "";
    var templateHtml = $editDeleteCommandTemplate.html();
    templateHtml = replaceAll(templateHtml, "[key]", row.Id);
    return templateHtml;
}

function renderDate(data, type, row, meta) {
    return data.length > 0 ? formatDateString(new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10)), DateFormat) : data;
}

function formatDateString(date, format) {
    var monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var dateComponents = {};
    dateComponents.dd = date.getDate();
    dateComponents.MMMM = monthFullNames[date.getMonth()];
    dateComponents.MMM = monthShortNames[date.getMonth()];
    dateComponents.MM = date.getMonth() + 1;
    if (dateComponents.MM.toString().length == 1)
        dateComponents.MM = "0" + dateComponents.MM.toString();
    dateComponents.yyyy = date.getFullYear();
    dateComponents.yy = dateComponents.yyyy.toString().substring(2);
    dateComponents.hh = date.getHours();
    dateComponents.ss = date.getSeconds();
    dateComponents.mm = date.getMilliseconds();

    for (var key in dateComponents) {
        format = replaceAll(format, key, dateComponents[key]);
    }
    return format;
}

function replaceAll(str, oldText, newText) {
    return str.split(oldText).join(newText);
}