const buttonSave = document.getElementById('save_button');
const formSection = document.getElementsByClassName('form_banner')[0];
const mainForm = document.getElementsByTagName('form')[0];

    buttonSave.addEventListener('click', function (event) {
        event.preventDefault();
        const table = document.createElement('table');
        table.className = 'values_table';
        table.innerHTML = `<tr><td> Fullname: ${mainForm.fullname.value}</td></tr>
<tr><td> Birth Date: ${mainForm.birth_date.value}</td></tr>
<tr><td> Your gender: ${mainForm.gender.value}</td></tr>
<tr><td> Your Country: ${mainForm.countries.value}</td></tr>
<tr><td> Your adress: ${mainForm.adress.value}</td></tr>`;
        formSection.replaceChild(table,mainForm);
    });