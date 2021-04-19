import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'AC28f715c4a0a0ab0feb3b4872844a51f1'
auth_token = 'de7e1d5e74085a1c225d444596cad7bd'
client = Client(account_sid, auth_token)

messages = client.messages.list(limit=5)

for record in messages:
    print(record.body)