
const EmailService = {
    saveEmail: async function (email,ime) {
       
        console.log("***************email serivce" + email)
        var email = await fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/spremiEmail',
                    {
                        method: 'POST', headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                               
                                "email": email,
                                "ime":ime
                                

                            }

                        ),
                    })
                let potvrdaNarudzbe = await email.json()
                console.log("potvrda maila", potvrdaNarudzbe)
    }
};

export default EmailService;