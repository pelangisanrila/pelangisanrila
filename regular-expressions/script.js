$(function() {
    const namaLengkapRegex = new RegExp('^[A-Z][a-zA-Z.-]{0,}( [A-Z][a-zA-Z.-]*)*$');
    const NIMRegex = new RegExp('^[0-9]{9}$');
    const noHandphoneRegex = new RegExp('^\\+628[0-9]{9,12}$');
    const IPKRegex = new RegExp('^(?:[1-3](?:\.[0-9]{1,2})?|4(?:\.0{1,2})?)$');
    const githubProfileLinkRegex = new RegExp('^https:\/\/github\.com\/[a-zA-Z0-9_-]+$');

    $('input').each(function() {
        $(this).on('input', function() {
            const pElement = $(this).next('p');

            let isValid = false;
            let message = '';

            switch ($(this).attr('id')) {
                case 'namaLengkap-regex':
                    isValid = namaLengkapRegex.test($(this).val());
                    message = isValid ? 'Nama Valid 👍' : 'Nama Invalid. Gunakan huruf kapital di setiap awal kata, contoh : Na Jaemin';
                    break;
                case 'noHP-regex':
                    isValid = noHandphoneRegex.test($(this).val());
                    message = isValid ? 'Nomor telepon Valid 👍' : 'Nomor telepon Invalid. Gunakan kode negara +628, contoh : +6281234567890';
                    break;
                case 'NIM':
                    isValid = NIMRegex.test($(this).val());
                    message = isValid ? 'NIM Valid 👍' : 'NIM Invalid, harus 9 digit angka';
                    break;
                case 'IPK':
                    isValid = IPKRegex.test($(this).val());
                    message = isValid ? 'IPK Valid 👍' : 'IPK Invalid, format harus antara 0.00 - 4.00';
                    break;
                case 'githubProfile-link':
                    isValid = githubProfileLinkRegex.test($(this).val());
                    message = isValid ? 'URL GitHub Valid 👍' : 'URL GitHub Invalid, format harus https://github.com/username';
                    break;
                default:
                    return;
            }

            if (isValid) {
                $(this).removeClass('focus:ring-red-500 focus:border-red-300')
                       .addClass('focus:ring-green-500 focus:border-green-300');
                pElement.removeClass('text-red-700')
                        .addClass('text-green-700');
            } else {
                $(this).removeClass('focus:ring-green-500 focus:border-green-300')
                       .addClass('focus:ring-red-500 focus:border-red-300');
                pElement.removeClass('text-green-700')
                        .addClass('text-red-700');
            }

            pElement.html(message);
        });
    });
});
