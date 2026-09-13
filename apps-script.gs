/**
 * Just a Website — приёмник заявок в Google Sheet + письмо-уведомление.
 * Вставь этот код в Apps Script (Extensions → Apps Script) той таблицы,
 * где лист называется "Leads". Подробности — в GOOGLE_SHEET_SETUP.md.
 */

// Кому слать уведомление о новой заявке (пусто = не слать письмо):
var NOTIFY_EMAIL = 'elena@pixelexpertsteam.com';
// WhatsApp-уведомление через CallMeBot (пусто = не слать):
//   номер в международном формате без "+", напр. 48884037664
var WHATSAPP_PHONE = '48884037664';
//   apikey из CallMeBot (см. GOOGLE_SHEET_SETUP.md, раздел WhatsApp):
var WHATSAPP_APIKEY = '2099636';
// Название листа с заявками:
var SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    var d = {};
    if (e && e.postData && e.postData.contents) {
      d = JSON.parse(e.postData.contents);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Если лист пустой — добавляем заголовки
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Imię', 'Email', 'Telefon', 'Firma', 'Wiadomość', 'Źródło', 'Termin']);
    }

    var termin = (d.date && d.time) ? (d.date + ' ' + d.time) : '';

    var row = [
      new Date(),
      d.name || '',
      d.email || '',
      d.phone || '',
      d.business || '',
      d.message || '',
      d.source || '',
      termin
    ];
    sheet.appendRow(row);

    // Письмо-уведомление
    if (NOTIFY_EMAIL) {
      var subject = d._subject || 'Nowe zgłoszenie — Just a Website';
      var body =
        'Nowe zgłoszenie z landingu Just a Website\n\n' +
        'Imię:      ' + (d.name || '—') + '\n' +
        'Email:     ' + (d.email || '—') + '\n' +
        'Telefon:   ' + (d.phone || '—') + '\n' +
        'Firma:     ' + (d.business || '—') + '\n' +
        'Źródło:    ' + (d.source || '—') + '\n' +
        (termin ? 'Termin:    ' + termin + '\n' : '') +
        '\nWiadomość:\n' + (d.message || '—') + '\n';
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: subject,
        body: body,
        replyTo: d.email || undefined
      });
    }

    // WhatsApp-уведомление через CallMeBot
    if (WHATSAPP_PHONE && WHATSAPP_APIKEY && WHATSAPP_APIKEY.indexOf('PASTE_') === -1) {
      try {
        var wa =
          '*Nowe zgłoszenie — Just a Website*\n' +
          'Imię: ' + (d.name || '—') + '\n' +
          'Email: ' + (d.email || '—') + '\n' +
          'Telefon: ' + (d.phone || '—') + '\n' +
          'Firma: ' + (d.business || '—') + '\n' +
          'Źródło: ' + (d.source || '—') +
          (termin ? '\nTermin: ' + termin : '') +
          (d.message ? '\nWiadomość: ' + d.message : '');
        var waUrl = 'https://api.callmebot.com/whatsapp.php?phone=' + encodeURIComponent(WHATSAPP_PHONE) +
          '&text=' + encodeURIComponent(wa) + '&apikey=' + encodeURIComponent(WHATSAPP_APIKEY);
        UrlFetchApp.fetch(waUrl, { muteHttpExceptions: true });
      } catch (waErr) {}
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Проверка в браузере: открытие URL (…/exec) покажет "OK".
function doGet() {
  return ContentService.createTextOutput('OK — Just a Website lead endpoint is live.');
}
