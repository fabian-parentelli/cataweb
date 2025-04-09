async function registerSuccess(email) {

    const emailRegister = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registro Exitoso</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .header {
                    background-color: #4CAF50;
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                }
                .content p {
                    margin: 10px 0;
                    line-height: 1.6;
                }
                .content ul {
                    list-style: none;
                    padding: 0;
                }
                .content ul li {
                    margin: 5px 0;
                    font-size: 14px;
                }
                .content ul li strong {
                    color: #4CAF50;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                    padding: 15px;
                    border-top: 1px solid #ddd;
                }
                .footer p {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Registro Exitoso</h1>
                </div>
                <div class="content">
                    <p>¡Hola <strong>${email.name}</strong>!</p>
                    <p>Tu registro en nuestro sitio ha sido exitoso. Aquí están los detalles de tu cuenta:</p>
                    <ul>
                        <li><strong>Nombre:</strong> ${email.name}</li>
                        <li><strong>Correo Electrónico:</strong> ${email.email}</li>
                        <li><strong>Rol:</strong> ${email.role}</li>
                        <li><strong>ID:</strong> ${email._id}</li>
                    </ul>
                    <p>¡Gracias por unirte a nosotros!</p>
                </div>
                <div class="footer">
                    <p>No responda a este correo electrónico. Este es un mensaje automático.</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    return emailRegister;
};

export { registerSuccess };