function display_admin_page(req, res) {
    if (req.session.authented && req.session.role_id <= 2) {
        let table = `<table border=1>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            </table>`
        res.render('admins', { title: 'ADMIN PAGE', products_table: table });
    } else {
        res.redirect('/');
    }
}
module.exports = display_admin_page;